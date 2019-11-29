import { h, render } from "preact";

export default ({ publication, publicationLink, date, link, title, coauthor }) => (
  <li className="article">
    <p className="article__date">{date}</p>
    <div className="article__meta">
      <a className="article__title" href={link} rel="noopener">{title}{coauthor ? <sup>&dagger;</sup> : ""}</a>
      {publication && publicationLink ? <a className="article__publication" href={publicationLink} rel="noopener">{publication}</a> : ""}
    </div>
  </li>
);
