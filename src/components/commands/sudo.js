import { h, render, Component } from "preact";
import wayne1x from "../../img/wayne-knight-1x.png";
import wayne2x from "../../img/wayne-knight-2x.png";
//import magicWord from "../../audio/magic-word.mp3";

export default () => {
  const context = new AudioContent();

  // fetch(magicWord).then(response => response.arrayBuffer())
  //   .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
  //   .then(audioBuffer => {
  //     const source = context.createBufferSource();
  //     source.buffer = audioBuffer;
  //     source.connect(context.destination);
  //     source.start();
  //   });

  return [
    <br />,
    <img src={wayne1x} srcset={`${wayne2x} 2x, ${wayne1x} 1x`} sizes="11.875rem" alt="Ah! Ah! Ah! You didn't say the magic word!" />
  ];
};
