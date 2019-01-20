import { h, render } from "preact";

export default props => (
  <main>
    <section className="blog__intro">
      <h1 className="blog__title">{props.title}</h1>
      <h3 className="blog__date">{props.date}</h3>
    </section>
    <section className="blog__content">
      {props.children}
    </section>
  </main>
);
