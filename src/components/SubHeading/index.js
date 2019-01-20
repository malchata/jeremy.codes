import { h, render } from "preact";

function createDeepLink (fragment) {
  return fragment.replace(/\s/ig, "-").replace(/(\'|\"|\,|\;|\:|\!|\?)/ig, "").toLowerCase();
}

export default props => (
  <h2 id={createDeepLink(props.children[0])}>
    <a name={createDeepLink(props.children[0])}></a>
    <a className="subhead" href={`#${createDeepLink(props.children[0])}`}>{props.children}</a>
  </h2>
);
