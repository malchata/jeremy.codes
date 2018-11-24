import { h, render, Component } from "preact";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.handleOnLoad = this.handleOnLoad.bind(this);
  }

  handleOnLoad(event) {
    window.scrollTo(0, document.body.scrollHeight);
  }

  render() {
    return (
      h("img", {
        src: this.props.src,
        srcset: this.props.srcset,
        sizes: this.props.sizes,
        alt: this.props.alt,
        onload: this.handleOnLoad
      })
    );
  }
}
