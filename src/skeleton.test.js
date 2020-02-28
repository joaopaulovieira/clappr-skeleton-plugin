/* eslint-disable prefer-arrow-callback */
import { Player } from 'clappr'
import SkeletonPlugin from './skeleton'

describe('Skeleton Plugin', function() {
  beforeEach(function() {
    this.playerElement = document.getElementById('context')
  })

  afterEach(function() {
    this.player && this.player.destroy()
  })

  it('is loaded on core plugins array', function() {
    this.player = new Player({ source: 'test.mp4', plugins: [SkeletonPlugin] })
    this.player.attachTo(this.playerElement)

    expect(this.player.core.getPlugin(this.plugin.name).name).toEqual('skeleton')
  })
})
