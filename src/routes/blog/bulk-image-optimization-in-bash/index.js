import { h, render } from "preact";
import Blog from "../../../components/Blog";
import CodeBlock from "../../../components/CodeBlock";
import SubHeading from "../../../components/SubHeading";

export const Metadata = {
  title: "Bulk Image Optimization in Bash",
  date: "9 March, 2017",
  description: "Sometimes you need to optimize a whole lot of images at once. Learn how to do it offline with bash!",
  slug: "/blog/bulk-image-optimization-in-bash/"
};

export default () => (
  <Blog title={Metadata.title} date={Metadata.date}>
    <p>Have you ever needed to optimize a bunch of images in a folder on your computer, but you don't want to go through the hassle of writing an build system to take care of it? Then bash and your image optimization binary of choice are your best friends. I've had situations where I just needed to pull down files from a website already in production, optimize images, and re-upload everything. The exact syntax depends on the optimizer you use, but your workhorse will be the <code>{"find"}</code>command.</p>
    <p><code>{"find"}</code> is a command that, well, finds stuff. For example, if I wanted to find all files in the current directory and its subdirectories with a <code>{".jpg"}</code> extension, I could run this command:</p>
    <CodeBlock>{"find ./ -type f -name '*.jpg'"}</CodeBlock>
    <p>This will dump a list of files ending in the <code>{".jpg"}</code> extension to the terminal like so:</p>
    <CodeBlock>{`./images/george.jpg
./images/frank.jpg
./images/estelle.jpg`}</CodeBlock>
    <p>In the above example, <code>{"./"}</code> is the current directory, <code>{"-type f"}</code> means we only want to list files (not directories, which incidentally we could find with <code>{"-type d"}</code>) and the <code>{"-name"}</code> parameter is the search pattern.</p>
    <p>I was writing about image optimization in bash, right? Right, I was. Here comes the hook: The <code>{"find"}</code> command has an <code>{"-exec"}</code> parameter that you can use to pass file paths returned by <code>{"find"}</code> to other programs. What if you wanted to display the size of each JPEG file found by <code>{"find"}</code>?</p>
    <CodeBlock>{"find ./ -type f -name '*.jpg' -exec du -h {} \\;"}</CodeBlock>
    <p>This would return output like this:</p>
    <CodeBlock>{`196K    ./images/george.jpg
16K     ./images/frank.jpg
28K     ./images/estelle.jpg`}</CodeBlock>
    <p>The <code>{"-exec"}</code> parameter uses a placeholder of <code>{"{}"}</code> to represent the file that was found with <code>{"find"}</code>. We can feed this placeholder into a command such as an image optimizer, and terminate the command with an escaped semicolon (don't forget!). From here, the sky's the limit. Here's a some examples of using <code>{"find"}</code> with different optimizers to replace unoptimized images with optimized ones.</p>
    <SubHeading>Bulk JPEG optimization with jpeg-recompress</SubHeading>
    <p>Here's a simple example of using the <code>{"find"}</code> command to optimize JPEGs with <a href="https://github.com/imagemin/jpeg-recompress-bin" rel="noopener">jpeg-recompress</a>:</p>
    <CodeBlock>{"find ./ -type f -name '*.jpg' -exec jpeg-recompress {} {} \\;"}</CodeBlock>
    <p>This one will run jpeg-recompress with the default settings. You'll see some improvement, but if you want to get more aggressive with your optimizations, you could try the following:</p>
    <CodeBlock>{"find ./ -type f -name '*.jpg' -exec jpeg-recompress -n 30 -x 75 -l 128 -a -s -c {} {} \\;"}</CodeBlock>
    <p>This command will produce images with a JPEG quality between 30 (<code>{"-n 30"}</code>) and 75 (<code>{"-x 75"}</code>), loop over each image 128 times (<code>{"-l 128"}</code>), favor accuracy over speed (<code>{"-a"}</code>), strip metadata (<code>{"-s"}</code>), and then skip writing the output if no savings are realized (<code>{"-c"}</code>). Because of the amount of loops, this one could take some time, but if time is no object, then who cares?</p>
    <SubHeading>Bulk PNG optimization with OptiPNG</SubHeading>
    <p>For PNGs, I prefer <a href="http://optipng.sourceforge.net" rel="noopener">OptiPNG</a>. You can really go down the rabbit hole with all the options available, but the most effective (though it takes a lot of time) is this example:</p>
    <CodeBlock>{"find ./ -type f -name '*.png' -exec optipng -o7 {} \\;"}</CodeBlock>
    <p>The <code>{"-o7"}</code> flag will do 240 trials <em>per image</em> to see which is smallest. It's pretty ridiculous, but if you're doing this on your workstation (as opposed to on the fly in your web application) and you have time, why not? Run it overnight. If time is a factor, try the <code>{"-o4"}</code> or <code>{"-o5"}</code> setting, which only run 24 or 48 trials per image instead.</p>
    <SubHeading>Bulk SVG optimization with svgo</SubHeading>
    <p><a href="https://github.com/svg/svgo" rel="noopener">svgo</a> is <em>the</em> choice for SVG optimization. Using it with <code>{"find"}</code> to process a bunch of images is easy:</p>
    <CodeBlock>{"find ./ -type f -name '*.svg' -exec svgo {} \\;"}</CodeBlock>
    <p>Easy enough, right? svgo is very fast too. Unless you have an absurd amount of images, you probably won't have to go make a pot of coffee while it churns away. If you want to get aggressive, you could lower the precision and enable multipass:</p>
    <CodeBlock>{"find ./ -type f -name '*.svg' -exec svgo -p 1 --multipass {} \\;"}</CodeBlock>
    <p>If you decide to go to this extreme, I would <em>highly recommend</em> you examine the output. Lowering the precision of vector graphics isn't like lowering the quality setting of a raster image. If the precision of vector shapes is too low, they'll lose subtle (and sometimes not so subtle) details and look malformed.</p>
    <SubHeading>Conclusion</SubHeading>
    <p><code>{"find"}</code> is great for a lot of things, <em>especially</em> optimizing images. It's important, though, that you remember a couple things about these examples: One, they overwrite images in their place, essentially clobbering them. So back stuff up before you run anything. Two, you may want to take a look at some of the output after you run the optimizer. Anecdotally, I've had no problems with these methods. The optimizers shown do a great job of shaving off kilobytes without adversely affecting image quality. Give this a shot with your favorite optimizers and see how it goes!</p>
  </Blog>
);
