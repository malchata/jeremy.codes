import { h } from "preact";

export default () => (
  <footer className="footer">
    <div className="footer__links">
      &copy; 2019 Jeremy Wagner<span aria-hidden="true">&nbsp;&mdash;&nbsp;</span><a className="footer__link" href="/rss.xml" rel="noopener">RSS</a><span aria-hidden="true">&nbsp;|&nbsp;</span><a className="footer__link" href="https://devmode.jeremy.codes/" rel="noopener">Admin</a>
    </div>
  </footer>
);
