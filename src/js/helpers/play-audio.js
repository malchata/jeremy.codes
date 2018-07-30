export default (sourceUrl) => {
  if ("AudioContext" in window === true) {
    const context = new AudioContext();

    fetch(sourceUrl).then(response => response.arrayBuffer())
      .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
      });
  }
};
