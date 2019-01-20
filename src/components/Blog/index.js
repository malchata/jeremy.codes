import { h, render } from "preact";

export default props => (
  <main>
    <section className="blog__intro">
      <h1 className="blog__title">{props.title}</h1>
      <h3 className="blog__date">{props.date}</h3>
    </section>
    <section className="blog__content">
      {props.children}
      <p className="blog__footnote">Feel like reading more? Head on back to <a href="/writing/" rel="noopener">the article list</a>!</p>
    </section>
  </main>
);
