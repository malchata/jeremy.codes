import { h, render } from "preact";

export default ({ title, date, children }) => (
  <main>
    <section className="blog__intro">
      <h1 className="blog__title">{title}</h1>
      <h3 className="blog__date">{date}</h3>
    </section>
    <article className="blog__content">
      {children}
      <p className="blog__footnote">Feel like reading more? Head on back to <a href="/writing/" rel="noopener">the article list</a>!</p>
    </article>
  </main>
);
