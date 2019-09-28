import { h, render } from "preact";

export default () => (
  <main>
    <section className="subpage__intro subpage__intro--tertiary">
      <h1 className="subpage__header">Projects &amp; hobby horses</h1>
      <h4 className="subpage__subheader">Interested in working with me, or want to book me to speak at your event? Or maybe you just want to say &quot;hello&quot;? The form below will deliver your message to my inbox in no time.</h4>
    </section>
    <section className="projects">
      <h2 className="projects__category">Code</h2>
      <ul className="project-list">
        <li className="project">
          <h3 className="project__name">yall.js</h3>
          <p className="project__copy">
            I wrote a chapter about image optimization in <a rel="noopener" href="https://www.manning.com/books/web-performance-in-action?a_aid=webopt&a_bid=63c31090">my web performance book</a> in which I guided readers in writing their own lazy loader. After noodling around a bit, I decided to write my own. I called it yall, which stands for <strong>Y</strong>et <strong>A</strong>nother <strong>L</strong>azy <strong>L</strong>oader. This project endures for some reason I can't fathom, and stands as the most popular thing I ever bothered to slap up on Github. I suppose that's how these things go sometimes.
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://github.com/malchata/yall.js">Source</a> &mdash; <a rel="noopener" href="https://www.npmjs.com/package/yall-js">npm package</a>
          </p>
        </li>
        <li className="project">
          <h3 className="project__name">dnstradamus</h3>
          <p className="project__copy">
            DNS lookups can sometimes be slower than we want them to be. Because I'm always a stickler to keep things fast, I thought &quot;what if I could write a teeny script that would perform DNS lookups for outbound links on a page?&quot; Hence, dnstradamus was born. Powered by <code>IntersectionObserver</code> and named by <a rel="noopener" href="https://github.com/flipty">flipty</a>, dnstradamus is available to help your site's users get to their outbound destination just a <em>little</em> bit faster.
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://github.com/malchata/dnstradamus">Source</a> &mdash; <a rel="noopener" href="https://www.npmjs.com/package/dnstradamus">npm package</a>
          </p>
        </li>
        <li className="project">
          <h3 className="project__name">preconnect</h3>
          <p className="project__copy">
            The <a rel="noopener" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content">preconnect resource hint</a> is <em>super</em> useful for establishing connections to servers before the browser otherwise would in due course. Its shortcoming, however, is that you need to declare it in your HTML or in an HTTP header, so it's often only used statically at load time rather than programmatically. To make programmatic preconnects easier, I made a teeny tiny Node module that gives you a nice, clean way to programmatically preconnect to cross-origins whenever <em>you</em> decide.
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://github.com/malchata/preconnect">Source</a> &mdash; <a rel="noopener" href="https://www.npmjs.com/package/preconnect">npm package</a>
          </p>
        </li>
        <li className="project">
          <h3 className="project__name">Tundra Sunrise Atom Theme</h3>
          <p className="project__copy">
            One of the biggest reasons I love the <a rel="noopener" href="https://atom.io/">Atom text editor</a> is because its appearance is totally hackable with CSS. Because I never seem to like any themes that ship with <em>any</em> text editor, I decided to go ahead and make one that's right for me, and that is how Tundra Sunrise was born. If you like dark themes with boldly cold colors, this theme might be a fit for you, too.
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://github.com/malchata/tundra-sunrise-syntax">Source</a> &mdash; <a rel="noopener" href="https://atom.io/packages/tundra-sunrise-syntax">apm package</a>
          </p>
        </li>
        <li className="project">
          <h3 className="project__name">Paintlets</h3>
          <p className="project__copy">
            Ever since I discovered <a rel="noopener" href="https://generativeartistry.com/">generative artistry</a> by <a rel="noopener" href="">Tim Holman</a>, I've been intrigued by just how (pseudo)randomly beautiful JavaScript-generated 2D art can be. The <a rel="noopener" href="https://css-tricks.com/the-css-paint-api/">CSS Paint API</a> allows for some fantastic opportunities to not only generate and embed 2D generated art in CSS, but it also allows you to change that artwork with custom CSS properties. This lets you adapt your generated art to various contexts with ease in a way the Canvas API couldn't. As an homage to how much I love the intersection of weird and practical, I developed a site called Paintlets which showcases various CSS Paint API worklets for your perusal and personal use&mdash;should the moment strike you. <em><strong>Attention:</strong> This site requires Chrome, or a Chromium-based browser!</em>
          </p>
          <p className="project__links">
            <a rel="noopener" href="https://github.com/malchata/paintlets">Source</a> &mdash; <a rel="noopener" href="https://paintlets.herokuapp.com/">Site</a>
          </p>
        </li>
      </ul>
    </section>
  </main>
);
