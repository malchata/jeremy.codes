import { h, render } from "preact";

export default ({ publication, publicationLink, date, link, title, description, coauthor, archived }) => (
  <li className="article">
    <p className="article__date">{date}</p>
    <div className="article__meta">
      <h3 className="article__title">
        <a href={link} rel="noopener">{title}{coauthor ? <sup>&dagger;</sup> : ""}<span aria-hidden>&nbsp;</span>{archived ? <sup>&Dagger;</sup> : ""}</a>
      </h3>
      {publication && publicationLink ? <a className="article__publication" href={publicationLink} rel="noopener">{publication}</a> : ""}
      <p className="article__description">{description}</p>
    </div>
  </li>
);
