import { h, render } from "preact";

export default () => (
  <main>
    <section className="subpage__intro subpage__intro--tertiary">
      <h1 className="subpage__header">Projects &amp; hobby horses</h1>
      <h4 className="subpage__subheader">I've made a thing or three, sometimes even a thing that people like to use every now and then! Below is a list of my projects for your perusal. Some of it is code. Some of it is, well, something else entirely.</h4>
    </section>
    <section className="projects">
      <h2 className="projects__category">Code</h2>
      <ul className="project-list">
        <li className="project">
          <h3 className="project__name">yall.js</h3>
          <p className="project__copy">
            I wrote a chapter about image optimization in <a rel="noopener" href="https://www.manning.com/books/web-performance-in-action?a_aid=webopt&a_bid=63c31090">my web performance book</a> where I showed readers how to write their own lazy loader. After a bit of extra effort, I came up with something I felt was worth putting on npm.
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://github.com/malchata/yall.js">Source</a> <span aria-hidden>::</span> <a rel="noopener" href="https://www.npmjs.com/package/yall-js">npm package</a>
          </p>
        </li>
        <li className="project">
          <h3 className="project__name">dnstradamus</h3>
          <p className="project__copy">
            DNS lookups can sometimes be slower than we want them to be. Because I'm always a stickler to keep things fast, I thought &quot;what if I could write a teeny script that would perform DNS lookups for outbound links on a page before the user ever clicks on them?&quot; Hence, dnstradamus was born. Use it if you'd like to help your site's users get to their outbound destination just a <em>little</em> faster.
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://github.com/malchata/dnstradamus">Source</a>
          </p>
        </li>
        <li className="project">
          <h3 className="project__name">preconnect</h3>
          <p className="project__copy">
            The <a rel="noopener" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content">preconnect resource hint</a> is <em>super</em> useful for establishing connections to servers before the browser otherwise would in due course. In order for it to work, though, you need to declare it in your HTML or in an HTTP header up front. Because of this, it's often only used statically at load time rather than programmatically. To make programmatic preconnects easier, I made a teeny tiny npm package (258 bytes compressed!) that gives you a nice, clean way to programmatically preconnect to cross-origins whenever is best for the people who use your site.
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://github.com/malchata/preconnect">Source</a> <span aria-hidden>::</span> <a rel="noopener" href="https://www.npmjs.com/package/preconnect">npm package</a>
          </p>
        </li>
        <li className="project">
          <h3 className="project__name">Tundra Sunrise Atom Theme</h3>
          <p className="project__copy">
            <a rel="noopener" href="https://atom.io/">Atom</a> is my favorite text editor in part because its appearance is stylable with CSS. Because I never seem to like any themes that ship with <em>any</em> text editor, I decided to go ahead and make one that's just right for me. Thus, Tundra Sunrise was born. If you like dark themes with cold, bold colors, this theme might be a fit for you, too.
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://github.com/malchata/tundra-sunrise-syntax">Source</a> <span aria-hidden>::</span> <a rel="noopener" href="https://atom.io/packages/tundra-sunrise-syntax">apm package</a>
          </p>
        </li>
        <li className="project">
          <h3 className="project__name">Paintlets</h3>
          <p className="project__copy">
            Ever since I discovered <a rel="noopener" href="https://generativeartistry.com/">generative art</a> via <a rel="noopener" href="">Tim Holman</a>, I've been intrigued by just how (pseudo)randomly beautiful JavaScript-generated 2D art can be. The <a rel="noopener" href="https://css-tricks.com/the-css-paint-api/">CSS Paint API</a> allows for some fantastic opportunities to not only generate and embed 2D generated art in CSS, but it also allows you to change that artwork with custom CSS properties. This lets you adapt your generated art to various contexts with ease in a way the Canvas API couldn't. As an homage to how much I love the intersection of weird and practical, I developed a site called Paintlets which showcases various CSS Paint API worklets for your perusal and personal use<span aria-hidden>::</span>should the moment strike you. <em><strong>Attention:</strong> This site requires Chrome, or a Chromium-based browser!</em>
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://github.com/malchata/paintlets">Source</a> <span aria-hidden>::</span> <a rel="noopener" href="https://paintlets.herokuapp.com/">Site</a>
          </p>
        </li>
      </ul>
      <h2 className="projects__category">Music</h2>
      <ul className="project-list">
        <li className="project">
          <h3 className="project__name">The Royal Veil &mdash; Self-titled EP</h3>
          <p className="project__copy">
            A long while back, a few friends of mine and I worked on a music project we called <em>The Royal Veil</em>. The initial release of this effort was a four song EP of both conventional and trippy tracks inspired by a number of our favorite progressive rock and metal artists. While the band later went on without me to write <a rel="noopener" href="https://theroyalveil.bandcamp.com/album/king-of-the-ocean-2">further phenomenal material</a>, I still like this little bit of music we made together.
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://theroyalveil.bandcamp.com/album/the-royal-veil">Bandcamp</a>
          </p>
        </li>
        <li className="project">
          <h3 className="project__name">Astride the Line &mdash; Fallow Fields</h3>
          <p className="project__copy">
            After I left <em>The Royal Veil</em>, I decided to try my hand at a hard rock/punk project which I called <em>Astride the Line</em>. The result of that effort was an album called <em>Fallow Fields</em>. In retrospect, I should have cut this down to a four or five track EP with just the good stuff, but you can't change what's been done. Even so, I think it has its moments.
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://astridetheline.bandcamp.com/">Bandcamp</a>
          </p>
        </li>
      </ul>
    </section>
  </main>
);
