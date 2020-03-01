/* eslint-disable prefer-arrow-callback */
import { Core } from 'clappr'
import SkeletonPlugin from './skeleton'

describe('Skeleton Plugin', function() {

  it('is loaded on core plugins array', function() {
    this.core = new Core({})
    this.plugin = new SkeletonPlugin(this.core)
    this.core.addPlugin(this.plugin)

    expect(this.core.getPlugin(this.plugin.name).name).toEqual('skeleton')
  })
})
