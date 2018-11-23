import { h, render, Component } from "preact";

export default props => h("img", {
  src: props.src,
  srcset: props.srcset,
  sizes: props.sizes,
  alt: props.alt,
  onload: window.scrollTo(0, document.body.scrollHeight)
});
