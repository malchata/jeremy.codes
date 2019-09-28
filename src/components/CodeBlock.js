import { h, render } from "preact";

export default ({ children }) => (
  <div className="blog__code"><pre><code>
    {children}
  </code></pre></div>
);
