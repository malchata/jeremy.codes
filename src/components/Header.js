import { h, render } from "preact";

export default ({ slug }) => (
  <header className="header">
    <div className="header__container">
      <a href="/" className="header__site-name" rel="noopener"><span aria-hidden="true">&gt;&nbsp;</span>Jeremy Wagner</a>
      <nav className="header__nav">
        <a className={`header__nav-link ${slug === "writing" || slug === "blog" ? "header__nav-link--on" : ""}`} href="/writing/" rel="noopener">Writing</a>
        <span className="header__nav-separator" aria-hidden="true">::</span>
        <a className="header__nav-link" href="https://speaking.jeremy.codes/" rel="noopener">Speaking</a>
        <span className="header__nav-separator" aria-hidden="true">::</span>
        <a className={`header__nav-link ${slug === "projects" ? "header__nav-link--on" : ""}`} href="/projects/" rel="noopener">Projects</a>
      </nav>
    </div>
  </header>
);
