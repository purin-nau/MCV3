const sound = new Howl({
  src: 'sample.mp3'
});

const button = document.getElementById('btn').addEventListener('click', (e) => {
  if (sound.playing()) {
    sound.stop();
  } else {
    sound.play();
  }
});
