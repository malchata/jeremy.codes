import { h, render } from "preact";

function createDeepLink (fragment) {
  return `#${fragment.replace(/\s/ig, "-").replace(/(\'|\"|\,|\;|\:|\!|\?)/ig, "").toLowerCase()}`;
}

export default ({ children }) => (
  <h2 id={createDeepLink(children[0])}>
    <a name={createDeepLink(children[0])}></a>
    <a className="subhead" href={createDeepLink(children[0])}>{children}</a>
  </h2>
);
