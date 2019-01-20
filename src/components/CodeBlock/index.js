import { h, render } from "preact";

export default props => (
  <div className="blog__code"><pre><code>
    {props.children}
  </code></pre></div>
);
