import { h, render } from "preact";

export default props => (
  <header className="header">
    <div className="header__container">
      <a href="/" className="header__site-name" rel="noopener">&gt; Jeremy Wagner</a>
      <nav className="header__nav">
        <a className={`header__nav-link ${props.slug === "writing" || props.slug === "blog" ? "header__nav-link--on" : ""}`} href="/writing/" rel="noopener">Writing</a>
        <span className="header__nav-separator">::</span>
        <a className="header__nav-link" href="https://speaking.jeremy.codes/" rel="noopener">Speaking</a>
        <span className="header__nav-separator">::</span>
        <a className={`header__nav-link ${props.slug === "contact" ? "header__nav-link--on" : ""}`} href="/contact/" rel="noopener">Get in touch</a>
      </nav>
    </div>
  </header>
);
