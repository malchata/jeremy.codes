import { h, render } from "preact";
import Blog from "../../../components/Blog";
import SubHeading from "../../../components/SubHeading";
import CodeBlock from "../../../components/CodeBlock";

export const Metadata = {
  title: "Experimenting with WebP Recompression",
  date: "23 June, 2020",
  description: "In which I experiment with recompressing JPEGs to lossy WebP images, but while also mitigating quality loss with a fun new tool I wrote.",
  slug: "/blog/experimenting-with-webp-recompression/",
  sitemapPriority: 1.0
};

export default () => (
  <Blog title={Metadata.title} date={Metadata.date}>
    <p>Image recompression is a concept as old as image encoders themselves. The most basic way to describe it is that your input image, which was once processed by a <a href="https://en.wikipedia.org/wiki/Lossy_compression" rel="noopener">lossy compression</a> algorithm, is processed again by the same algorithm. Image recompression is a useful tool in web performance because it reduces file size. That said, it can only be truly useful if we can also limit its detrimental effect on image quality.</p>
    <p>Understandably, Image recompression is a topic that has attracted its fair share of attention, but this time we're going to address it from a different angle and explain how you can recompress JPEGs to lossy WebP with a median savings of 17%, while also limiting quality loss.</p>
    <SubHeading>Limiting quality loss in lossy recompression</SubHeading>
    <p><a href="https://en.wikipedia.org/wiki/Generation_loss" rel="noopener">Generation loss</a> is what we want to limit when we recompress images. If you've ever copied a copy of a document, you've seen generation. You also know <a href="https://www.youtube.com/watch?v=jjhomJ04S18" rel="noopener">that it worsens</a> the more the cycle is repeated. Similarly, every time you re-encode a lossy image using a lossy encoding algorithm, you lose a bit more quality. Repeat this process enough, and you'll cross a line where the image's quality becomes unacceptable.</p>
    <figure>
      <picture>
        <source
          srcset="/img/blog/generation-loss-1544w.webp 1544w, /img/blog/generation-loss-1158w.webp 1158w, /img/blog/generation-loss-772w.webp 772w"
          type="image/webp"
        />
        <img
          srcset="/img/blog/generation-loss-1544w.png 1544w, /img/blog/generation-loss-1158w.png 1158w, /img/blog/generation-loss-772w.png 772w"
          src="/img/blog/generation-loss-772w.png"
          alt="A visual example of generation loss. The source is the image on the left, whereas the image on the right is the result of re-encoding a JPEG over a hundred times."
          width="772"
          height="288"
        />
      </picture>
      <figcaption>
        A visual example of generation loss. The source is the image on the left, whereas the image on the right is the result of re-encoding a JPEG over a hundred times.
      </figcaption>
    </figure>
    <p>Given the risk of generation loss, it's tempting to ask why we'd bother at all with image recompression, but a persuasive argument is that we don't always get to work with lossless sources as developers and designers. Sometimes you have to make do with what you've got. While you <em>could</em> eyeball every image you export from your favorite imaging software, that approach doesn't scale. It's feasible for a handful of images, sure, but effectively impossible when it comes to large image libraries. The solution here is automation, and such automation requires an image similarity scoring algorithm to ensure quality degradation is kept in check without having to personally examine every single image.</p>
    <p>For those who have never heard of image similarity scoring, it's when two images are compared to each other, and a score is given based on how they differ. Examples of these programs range from the relatively simplistic <a href="https://en.wikipedia.org/wiki/Peak_signal-to-noise_ratio" rel="noopener">PNSR method</a> to more advanced algorithms such as <a href="https://en.wikipedia.org/wiki/Structural_similarity" rel="noopener">SSIM</a> or <a href="https://github.com/kornelski/dssim" rel="noopener">DSSIM</a>.</p>
    <p>When we pair an image similarity scoring algorithm with a program that can analyze that algorithm's output, we have a solution for automating the lossy image recompression while limiting quality loss. We already have solutions that do this for JPEGs. For example, <a href="https://github.com/danielgtaylor/jpeg-archive#jpeg-recompress" rel="noopener">jpeg-recompress</a> uses SSIM (and other methods) to figure out which quality setting is best for recompressing an input JPEG.</p>
    <p>For WebP images, though, there's nothing so straightforward. Kraken.io offers <a href="https://kraken.io/docs/webp-compression" rel="noopener">a solution in their API</a> to recompress WebPs from JPEGs, and <a href="https://cloudinary.com/documentation/image_optimization#use_q_auto_automatic_quality_and_encoding" rel="noopener">Cloudinary's <code>q_auto</code> setting</a> does this as well. Yet, maybe you can't afford one of these solutions at a level which meets your business needs. Or maybe you don't want to be dependent on outside vendors. That's why I've been kicking around a Node.js program that does what jpeg-recompress does, but for WebP.</p>
    <SubHeading>Say hello to webp-recompress</SubHeading>
    <p><a href="https://github.com/malchata/webp-recompress" rel="noopener">webp-recompress</a>&mdash;not so subtly named after its inspiration&mdash;is a tool I've been tinkering with that takes an input JPEG and uses SSIMULACRA, an image similarity scoring algorithm created by <a href="https://cloudinary.com/blog/author/jon_sneyers" rel="noopener">Jon Sneyers</a> at Cloudinary. I won't get into why I chose SSIMULACRA over another solution, especially since <a href="https://cloudinary.com/blog/detecting_the_psychovisual_impact_of_compression_related_artifacts_using_ssimulacra" rel="noopener">Jon himself explains how it works so well</a>.</p>
    <p>If you're comfortable in the terminal, using SSIMULACRA should be similar to a lot of other command-line utilities you've used. The program takes a source image as its first argument, and a derivative image in the second argument like so:</p>
    <CodeBlock>{"ssimulacra original.jpg original-q75.jpg"}</CodeBlock>
    <p>Given this command, SSIMULACRA will provide a score between 0 and 1, where 0 means the image is identical to its source and 1 means the image is completely different. According to <a href="https://github.com/cloudinary/ssimulacra/blob/master/ssimulacra.cpp#L163-L166" rel="noopener">SSIMULACRA's help text</a>, images that score above 0.1 are likely to contain distortions which are “perceptible/annoying”. Using SSIMULACRA, webp-recompress adopts the following strategy:</p>
    <ol type="1">
      <li>It verifies that the input is a JPEG.</li>
      <li>Assuming the input is a JPEG, its quality is guessed.</li>
      <li>webp-recompress then undergoes several iterations of encoding lossy WebP images at various quality settings. It stops when it finds a WebP image candidate that is both smaller and within a certain SSIMULACRA scoring threshold.</li>
    </ol>
    <p>This is just an overview of what the program does, so if you're interested in knowing what's going on under the hood in detail, I recommend reading <a href="https://github.com/malchata/webp-recompress" rel="noopener">the webp-recompress documentation</a> and maybe even <a href="https://github.com/malchata/webp-recompress/tree/main/src" rel="noopener">the project's source code</a>.</p>
    <p>So, now that we basically know how webp-recompress works, how can we measure its effectiveness?</p>
    <SubHeading>Putting WebP recompression to the test</SubHeading>
    <p>In order to accurately measure how well webp-recompress works, we need an <em>image corpus</em>. An image corpus is a very large set of images which we can process and then compare the output to the original corpus. A large dataset means we can account for the effectiveness of our recompression strategy across a variety of image subjects.</p>
    <p>To examine how well webp-recompress performs, I gathered around 20,000 JPEGs from various websites. Most of these images are product and food photography, with a healthy chunk of stock photography, logos/line art, and miscellaneous subjects. If nothing else, this corpus would give us an idea how well recompressing JPEGs to lossy WebP works for typical web imagery, regardless of whether that imagery might be better suited to other formats. So, let's see how webp-recompress did.</p>
    <SubHeading level={3}>File size reduction</SubHeading>
    <p>Across the entire image corpus, webp-recompress was able to reduce file sizes by about 25.5%&mdash;or 41.6 KB&mdash;on average. While averages are easier to calculate, they don't convey the entire story. Across a large dataset such as our image corpus, percentiles provide a more nuanced picture of how well recompression works at various points. Below is a table that shows the effectiveness of webp-recompress at reducing file sizes, with percentiles calculated based on the output size of WebP images:</p>
    <div class="blog__content__table-wrapper">
      <table>
        <thead>
          <tr>
            <th aria-hidden>&nbsp;</th>
            <th><strong>JPEG (KiB)</strong></th>
            <th><strong>WebP (KiB)</strong></th>
            <th><strong>Difference</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>p0</strong></td>
            <td>0.73</td>
            <td>0.21</td>
            <td>70.67%</td>
          </tr>
          <tr>
            <td><strong>p5</strong></td>
            <td>5.25</td>
            <td>4.39</td>
            <td>16.35%</td>
          </tr>
          <tr>
            <td><strong>p10</strong></td>
            <td>6.61</td>
            <td>5.61</td>
            <td>15.22%</td>
          </tr>
          <tr>
            <td><strong>p15</strong></td>
            <td>8.29</td>
            <td>6.93</td>
            <td>16.47%</td>
          </tr>
          <tr>
            <td><strong>p20</strong></td>
            <td>11.38</td>
            <td>8.60</td>
            <td>24.43%</td>
          </tr>
          <tr>
            <td><strong>p25</strong></td>
            <td>16.08</td>
            <td>11.30</td>
            <td>29.73%</td>
          </tr>
          <tr>
            <td><strong>p30</strong></td>
            <td>21.21</td>
            <td>14.61</td>
            <td>31.11%</td>
          </tr>
          <tr>
            <td><strong>p35</strong></td>
            <td>26.42</td>
            <td>19.03</td>
            <td>27.98%</td>
          </tr>
          <tr>
            <td><strong>p40</strong></td>
            <td>32.07</td>
            <td>24.32</td>
            <td>24.16%</td>
          </tr>
          <tr>
            <td><strong>p45</strong></td>
            <td>36.89</td>
            <td>29.75</td>
            <td>19.34%</td>
          </tr>
          <tr>
            <td><strong>p50</strong></td>
            <td>42.03</td>
            <td>34.95</td>
            <td>16.85%</td>
          </tr>
          <tr>
            <td><strong>p55</strong></td>
            <td>47.12</td>
            <td>40.46</td>
            <td>14.13%</td>
          </tr>
          <tr>
            <td><strong>p60</strong></td>
            <td>53.43</td>
            <td>46.06</td>
            <td>13.79%</td>
          </tr>
          <tr>
            <td><strong>p65</strong></td>
            <td>60.05</td>
            <td>52.32</td>
            <td>12.88%</td>
          </tr>
          <tr>
            <td><strong>p70</strong></td>
            <td>68.49</td>
            <td>59.73</td>
            <td>12.79%</td>
          </tr>
          <tr>
            <td><strong>p75</strong></td>
            <td>79.27</td>
            <td>68.58</td>
            <td>13.49%</td>
          </tr>
          <tr>
            <td><strong>p80</strong></td>
            <td>92.88</td>
            <td>80.17</td>
            <td>13.69%</td>
          </tr>
          <tr>
            <td><strong>p85</strong></td>
            <td>111.91</td>
            <td>95.91</td>
            <td>14.30%</td>
          </tr>
          <tr>
            <td><strong>p90</strong></td>
            <td>159.76</td>
            <td>130.63</td>
            <td>18.23%</td>
          </tr>
          <tr>
            <td><strong>p95</strong></td>
            <td>644.40</td>
            <td>495.45</td>
            <td>23.11%</td>
          </tr>
          <tr>
            <td><strong>p100</strong></td>
            <td>15,380.55</td>
            <td>8,260.24</td>
            <td>46.29%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>When I look at percentiles for any dataset, I tend to focus on five in particular: the 10th, 25th, 50th, 75th, and 95th. In this situation, these data points don't provide just a broad sense of how well JPEG-to-lossy WebP recompression works in typical scenarios, but also how well it works in scenarios that are atypical, yet aren't exceedingly rare. Across all of the percentiles mentioned, we see anywhere from a 15% to 30% decrease in file size. The median reduction in file size is just shy of 17%.</p>
    <SubHeading level={3}>Quality loss</SubHeading>
    <p>File size reduction is just one half of effective lossy image recompression. Because webp-recompress uses SSIMULACRA to try and limit quality loss, we might expect that it would do a better job than if we merely converted the entire image corpus to WebP using a single quality setting. That's because with SSIMULACRA&mdash;or any image similarity scoring algorithm&mdash;we can limit quality loss in a way that's more informed than mere guesswork. Below is a table of SSIMULACRA scores which measure quality loss across the entire image corpus after it was converted to WebP using webp-recompress:</p>
    <div class="blog__content__table-wrapper">
      <table>
        <thead>
          <th aria-hidden>&nbsp;</th>
          <th><strong>SSIMULACRA Score</strong></th>
        </thead>
        <tbody>
          <tr>
            <td><strong>p0</strong></td>
            <td>0.000010930</td>
          </tr>
          <tr>
            <td><strong>p5</strong></td>
            <td>0.005768355</td>
          </tr>
          <tr>
            <td><strong>p10</strong></td>
            <td>0.006921302</td>
          </tr>
          <tr>
            <td><strong>p15</strong></td>
            <td>0.007605805</td>
          </tr>
          <tr>
            <td><strong>p20</strong></td>
            <td>0.008060998</td>
          </tr>
          <tr>
            <td><strong>p25</strong></td>
            <td>0.008415305</td>
          </tr>
          <tr>
            <td><strong>p30</strong></td>
            <td>0.008788276</td>
          </tr>
          <tr>
            <td><strong>p35</strong></td>
            <td>0.009694294</td>
          </tr>
          <tr>
            <td><strong>p40</strong></td>
            <td>0.010232326</td>
          </tr>
          <tr>
            <td><strong>p45</strong></td>
            <td>0.011263440</td>
          </tr>
          <tr>
            <td><strong>p50</strong></td>
            <td>0.012350500</td>
          </tr>
          <tr>
            <td><strong>p55</strong></td>
            <td>0.013401396</td>
          </tr>
          <tr>
            <td><strong>p60</strong></td>
            <td>0.014813082</td>
          </tr>
          <tr>
            <td><strong>p65</strong></td>
            <td>0.015886958</td>
          </tr>
          <tr>
            <td><strong>p70</strong></td>
            <td>0.016947072</td>
          </tr>
          <tr>
            <td><strong>p75</strong></td>
            <td>0.017903880</td>
          </tr>
          <tr>
            <td><strong>p80</strong></td>
            <td>0.018740144</td>
          </tr>
          <tr>
            <td><strong>p85</strong></td>
            <td>0.019494160</td>
          </tr>
          <tr>
            <td><strong>p90</strong></td>
            <td>0.020363478</td>
          </tr>
          <tr>
            <td><strong>p95</strong></td>
            <td>0.022965244</td>
          </tr>
          <tr>
            <td><strong>p100</strong></td>
            <td>0.079221900</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>When you remember that a score below 0.01 means that artifacts are likely to be imperceptible, this table should be very encouraging. Even so, I've personally observed that quality scores less than 0.05 can be acceptable&mdash;but that depends heavily on the image's content. Images with many intricate details&mdash;such as a forest with dense canopy, for example&mdash;may present with compression artifacts that are less perceptible.</p>
    <p>Given that every percentile except for the 100th is well beneath that threshold, webp-recompress seems to do a good job of recompressing images without obnoxious quality loss. Below are a few examples of some select comparisons of input JPEGs next to output WebP images recompressed by webp-recompress, first starting with an image that ranked the 25th percentile of SSIMULACRA scores:</p>
    <figure>
      <picture>
        <source
          srcset="/img/blog/webp-p25-1544w.webp 1544w, /img/blog/webp-p25-1158w.webp 1158w, /img/blog/webp-p25-772w.webp 772w"
          type="image/webp"
        />
        <img
          alt="A comparison of an input JPEG (left) and an output WebP generated by webp-recompress (right). The input JPEG is 67.75 KiB. The WebP output is 65.67 KiB, and its SSIMULACRA score is 0.00841487."
          src="/img/blog/webp-p25-772w.png"
          srcset="/img/blog/webp-p25-1544w.png 1544w, /img/blog/webp-p25-1158w.png 1158w, /img/blog/webp-p25-772w.png 772w"
          width="772"
          height="260"
          loading="lazy"
        />
      </picture>
      <figcaption>A comparison of an input JPEG (left) and an output WebP generated by webp-recompress (right). The input JPEG is 67.75 KiB. The WebP output is 65.67 KiB, and its SSIMULACRA score is 0.00841487.</figcaption>
    </figure>
    <p>Now for the image that ranked at the 50th percentile of SSIMULACRA scores:</p>
    <figure>
      <picture>
        <source
          srcset="/img/blog/webp-p50-1544w.webp 1544w, /img/blog/webp-p50-1158w.webp 1158w, /img/blog/webp-p50-772w.webp 772w"
          type="image/webp"
        />
        <img
          alt="A comparison of an input JPEG (left) and an output WebP generated by webp-recompress (right). The input JPEG is 80.51 KiB. The WebP output is 65.45 KiB, and its SSIMULACRA score is 0.0123513."
          src="/img/blog/webp-p50-772w.png"
          srcset="/img/blog/webp-p50-1544w.png 1544w, /img/blog/webp-p50-1158w.png 1158w, /img/blog/webp-p50-772w.png 772w"
          width="772"
          height="260"
          loading="lazy"
        />
      </picture>
      <figcaption>A comparison of an input JPEG (left) and an output WebP generated by webp-recompress (right). The input JPEG is 80.51 KiB. The WebP output is 65.45 KiB, and its SSIMULACRA score is 0.0123513.</figcaption>
    </figure>
    <p>And finally, the image that ranked at the 75th percentile:</p>
    <figure>
      <picture>
        <source
          srcset="/img/blog/webp-p75-1544w.webp 1544w, /img/blog/webp-p75-1158w.webp 1158w, /img/blog/webp-p75-772w.webp 772w"
          type="image/webp"
        />
        <img
          alt="A comparison of an input JPEG (left) and an output WebP generated by webp-recompress (right). The input JPEG is 107.06 KiB. The WebP output is 83.57 KiB, and its SSIMULACRA score is 0.01790066."
          src="/img/blog/webp-p75-772w.png"
          srcset="/img/blog/webp-p75-1544w.png 1544w, /img/blog/webp-p75-1158w.png 1158w, /img/blog/webp-p75-772w.png 772w"
          width="772"
          height="384"
          loading="lazy"
        />
      </picture>
      <figcaption>A comparison of an input JPEG (left) and an output WebP generated by webp-recompress (right). The input JPEG is 107.06 KiB. The WebP output is 83.57 KiB, and its SSIMULACRA score is 0.01790066.</figcaption>
    </figure>
    <p>These are reasonably acceptable outcomes. Most of the time, it seems like webp-recompress does anywhere from a good to a decent job of mitigating quality loss while delivering smaller file sizes. Yet, as always, there are exceptions.</p>
    <SubHeading>Outliers and caveats</SubHeading>
    <p>Every dataset has outliers. A handful of images in the corpus didn't respond well to WebP recompression. This may just be a limitation of the lossy WebP format in that some images may not be able to be encoded from lossy sources while providing both a reduction in file size and effective mitigation of quality loss. In particular, I've found that images with well-defined geometric patterns tend to suffer significant quality loss when processed by webp-recompress:</p>
    <figure>
      <picture>
        <source
          srcset="/img/blog/webp-distortion-1056w.webp 1056w, /img/blog/webp-distortion-792w.webp 792w, /img/blog/webp-distortion-528w.webp 528w"
          type="image/webp" />
        <img
          alt="A comparison of an input JPEG and an output WebP from webp-recompress showing extreme distortion. The input JPEG is 8.49 KiB. The WebP output is only smaller by less than a kilobyte, but its SSIMULACRA score is almost 0.08."
          src="/img/blog/webp-distortion-528w.png"
          srcset="/img/blog/webp-distortion-1056w.png 1056w, /img/blog/webp-distortion-792w.png 792w, /img/blog/webp-distortion-528w.png 528w"
          width="528"
          height="104"
          loading="lazy" />
      </picture>
      <figcaption>A comparison of an input JPEG and an output WebP from webp-recompress showing extreme distortion. The input JPEG is 8.49 KiB. The WebP output is only smaller by less than a kilobyte, but its SSIMULACRA score is almost 0.08.</figcaption>
    </figure>
    <p>It could be argued that SVG or a lossless format would be a much better fit for this type of imagery&mdash;and that argument would be correct&mdash;but it's also possible that some content authors might not know this. Ideally, content management systems should guide content authors toward making these kinds of decisions, but that's a topic wholly outside the scope of this article.</p>
    <p>Additionally, I make no claim that webp-recompress is ready for production. The wrapper around SSIMULACRA I put together that it depends on (<a href="https://www.npmjs.com/package/ssimulacra-bin" rel="noopener">ssimulacra-bin</a>) only works on macOS, and will require some work to ensure it can work on other operating systems. SSIMULACRA also requires <a href="https://opencv.org/" rel="noopener">OpenCV</a> to be installed.</p>
    <p>Furthermore, webp-recompress runs into issues in some edge cases where image sources that are in CMYK or greyscale color spaces can't be compared to the lossy WebP output after conversion. This is because <a href="https://developers.google.com/speed/webp/faq#what_color_spaces_does_the_webp_format_support" rel="noopener">WebP is limited in what color spaces it supports</a>.</p>
    <p>Still, I honestly believe that this test demonstrates the viability of WebP recompression when guided by structural similarity analysis. With some additional work and community help, I could see it being used in build pipelines to deliver images that are smaller <em>and</em> of sufficient quality.</p>
    <SubHeading>The future of image formats is bright</SubHeading>
    <p>The landscape of alternative image formats is evolving. It's equally true that WebP, while young as far as image formats go, has been around for a while. Given these realities, it's natural to wonder why we're saying <em>anything</em> about WebP in 2020 and not about newer or upcoming image formats such as <a href="https://en.wikipedia.org/wiki/AV1#AV1_Image_File_Format_(AVIF)" rel="noopener">AVIF</a> or <a href="https://jpeg.org/jpegxl/" rel="noopener">JPEG XL</a>. The reasoning for this is three-fold:</p>
    <ol type="1">
      <li><a href="https://caniuse.com/#search=avif" rel="noopener">AVIF is only supported in Firefox</a>, but behind a flag.</li>
      <li>JPEG XL is still in development, and its bitstream has not been frozen&mdash;though it will be soon. Even so, it will take time for operating systems and browsers to adopt it.</li>
      <li><a href="https://caniuse.com/#search=webp" rel="noopener">WebP currently has the best browser support of any alternative image format</a>.</li>
    </ol>
    <p>At the risk of pigeon-holing myself as the WebP Guy&mdash;which might be a foregone conclusion at this point&mdash;it's a matter of simple pragmatism. While I acknowledge that WebP has limitations&mdash;such as a lack of OS-level support that makes their use outside of web browsers difficult&mdash;it's a versatile format that combines the best aspects of established formats while delivering on smaller file sizes. With intelligent recompression, we can nick just a little bit more off of those image sizes without sacrificing too much in quality. <em>Most</em> of the time, anyway.</p>
    <p>While we're at it, who's to say that the techniques I've applied in webp-recompress couldn't be applied to another lossy format? JPEG XL will have the ability to losslessly transcode JPEGs at a smaller file size. That's a big deal, but we might also be able to apply this same recompression strategy to JPEG XL with more pronounced benefits for loading performance. I'm excited to see how far that could go.</p>
    <p>In the meantime, if you're new to WebP as a format, feel free to check out <a href="https://www.smashingmagazine.com/2018/07/webp-manual/" rel="noopener"><em>The WebP Manual</em></a>, a book that I'm quite proud to have written for Smashing Magazine. It covers a wide array of aspects regarding the format, including a fair amount of performance statistics that may dovetail well with this article.</p>
    <p><em>Thank you to <a href="https://rachelandrew.co.uk/" rel="noopener">Rachel Andrew</a> and <a href="https://ericportis.com/" rel="noopener">Eric Portis</a>, whose valuable input helped whip this article into fighting shape.</em></p>
  </Blog>
);
