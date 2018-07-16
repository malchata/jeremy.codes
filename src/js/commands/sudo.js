import { h, render, Component } from "preact";
import wayne1x from "../../img/wayne-knight-1x.png";
import wayne2x from "../../img/wayne-knight-2x.png";
import playAudio from "../helpers/play-audio";
import magicWord from "../../audio/magic-word.mp3";

export default () => {
  playAudio(magicWord);

  return [
    <br />,
    <img src={wayne1x} srcset={`${wayne2x} 2x, ${wayne1x} 1x`} sizes="11.875rem" alt="Ah! Ah! Ah! You didn't say the magic word!" />
  ];
};
