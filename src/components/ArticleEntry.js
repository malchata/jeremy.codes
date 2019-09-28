import { h, render } from "preact";

export default props => {
  let publication;

  if (props.publication && props.publicationLink) {
    publication = <a className="article__publication" href={props.publicationLink} rel="noopener">{props.publication}</a>;
  }

  return (
    <li className="article">
      <p className="article__date">{props.date}</p>
      <div className="article__meta">
        <a className="article__title" href={props.link} rel="noopener">{props.title}{props.coauthor ? <sup>&dagger;</sup> : ""}</a>
        {publication}
      </div>
    </li>
  );
};
