import SkeletonPlugin from '/src/skeleton.js'

const playerElement = document.getElementById('player-wrapper')

const player = new Clappr.Player({
  source: 'http://clappr.io/highline.mp4',
  poster: 'http://clappr.io/poster.png',
  playback: { controls: true },
  plugins: [SkeletonPlugin],
})

player.attachTo(playerElement)


if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => player.destroy())
}