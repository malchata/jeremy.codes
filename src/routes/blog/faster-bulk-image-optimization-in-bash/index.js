import { h, render } from "preact";
import Blog from "../../../components/Blog";
import CodeBlock from "../../../components/CodeBlock";

export const Metadata = {
  title: "Faster Bulk Image Optimization in Bash",
  date: "20 April, 2017",
  description: "Continuing on from an earlier post on optimizing batches of images in bash, I show you how to do it even faster with xargs.",
  slug: "/blog/faster-bulk-image-optimization-in-bash/"
};

export default () => (
  <Blog title={Metadata.title} date={Metadata.date}>
    <p><a href="/blog/bulk-image-optimization-in-bash" rel="noopener">In an earlier post</a>, I talked about how you could use the <code>{"find"}</code> command in bash to find all files of a specific extension and pass them along to the image optimizer of your choosing. In instances where I don't have time to automate this task with a tool such as gulp, this has proved incredibly valuable.</p>
    <p>Lately I've had to convert large batches of images for various projects. The <code>{"find"}</code> command, while serviceable in its own right with the <code>{"-exec"}</code> flag, only allows for serial processing of the files it finds. This is where <code>{"xargs"}</code> came in handy. With <code>{"xargs"}</code> I had a way of doing this work in parallel. I recently optimized a batch of about 500 JPEGs using jpeg-recompress. Below was the non-<code>{"xargs"}</code> way of accomplishing this task:</p>
    <CodeBlock>{"find ./ -type f -name '*.jpg' -exec jpeg-recompress --min 30 --max 70 --method smallfry --accurate --strip {} {} \\;"}</CodeBlock>
    <p>If you're not sure of all the parameters in this command, run jpeg-recompress with the <code>{"--help"}</code> flag and read <a href="/blog/bulk-image-optimization-in-bash">my earlier post</a> for some context. All I'm doing is passing files found by <code>{"find"}</code> one by one to jpeg-recompress with the <code>{"-exec"}</code> flag. The <code>{"{}"}</code> placeholders are file references. In my testing, the above command took roughly <strong>2 minutes and 10 seconds</strong> to complete. Now what about <code>{"xargs"}</code>? Let's first see how it's used in conjunction with <code>{"find"}</code>:</p>
    <CodeBlock>{"find ./ -type f -name '*.jpg' | xargs -P 32 -I {} jpeg-recompress --min 30 --max 70 --method smallfry --accurate --strip {} {}"}</CodeBlock>
    <p>This command is identical to the first, up until the point that we pipe the output from <code>{"find"}</code> to <code>{"xargs"}</code> (in lieu of <code>{"find"}</code>'s <code>{"-exec"}</code> flag). The <code>{"-P 32"}</code> argument is the important bit here: It represents the number of simultaneous processes. The <code>{"-I {}"}</code> bit allows us to read the name of the file provided by <code>{"find"}</code> from standard input. The rest of the command is pretty much the same as before, but it works quite a bit faster. Using <code>{"xargs"}</code> cuts the total processing time down to <strong>1 minute and 10 seconds</strong>. Not too bad. Of course, your mileage may vary depending on your hardware.</p>
    <p>Keep in mind: Don't set the number of concurrent processes too high, as you'll likely see diminishing returns. Furthermore, you might consume too many resources and potentially make your system unresponsive. Using <code>{"xargs"}</code> may not prove much more useful than serialized processing for small batches, but it really shines when you're optimizing a large batch of images with a CPU-intensive encoder like <a href="https://davidwalsh.name/jpeg-compression-guetzli" rel="noopener">Guetzli</a>. On a batch of approximately 500 images, I was able to reduce processing time with Guetzli from 150 minutes down to about 80. Definitely worth the trouble.</p>
    <p>Here's hoping you can find some use for <code>{"xargs"}</code>, be it for image optimization or something else altogether. I hope this article helps!</p>
  </Blog>
);
