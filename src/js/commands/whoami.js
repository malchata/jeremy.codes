import { h, render, Component } from "preact";
import Image from "../components/Image";
import mystery1x from "../../img/mystery-1x.png";
import mystery2x from "../../img/mystery-2x.png";
import playAudio from "../helpers/play-audio";
import ghost from "../../audio/ghost.mp3";

export default () => {
  playAudio(ghost);

  return [
    h("br"),
    h(Image, {
      src: mystery1x,
      srcset: `${mystery2x} 2x, ${mystery1x} 1x`,
      sizes: "11.875rem",
      alt: "it is a mystery"
    })
  ];
};
