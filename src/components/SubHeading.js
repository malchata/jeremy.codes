import { h, Fragment, render } from "preact";

function createDeepLink (fragment) {
  return `${fragment.replace(/\s/ig, "-").replace(/(\'|\"|\,|\;|\:|\!|\?)/ig, "").toLowerCase()}`;
}

export default ({ children, level }) => {
  const headingLevel = level ? parseInt(level) : 2;
  const contents = (
    <>
      <a name={createDeepLink(children[0])}></a>
      <a className="subhead" href={`#${createDeepLink(children[0])}`}>{children}</a>
    </>
  );

  if (headingLevel === 2) {
    return (
      <h2 id={createDeepLink(children[0])}>
        {contents}
      </h2>
    );
  }

  if (headingLevel === 3) {
    return (
      <h3 id={createDeepLink(children[0])}>
        {contents}
      </h3>
    );
  }
};
