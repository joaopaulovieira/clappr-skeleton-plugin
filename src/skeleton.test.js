import { Core, Container, Playback, version } from '@clappr/core'
import SkeletonPlugin from './skeleton'

describe('Skeleton Plugin', () => {
  test('is loaded on core plugins array', () => {
    const core = new Core({})
    const plugin = new SkeletonPlugin(core)
    core.addPlugin(plugin)

    expect(core.getPlugin(plugin.name).name).toEqual('skeleton')
  })

  test('is compatible with the latest Clappr core version', () => {
    const core = new Core({})
    const plugin = new SkeletonPlugin(core)
    core.addPlugin(plugin)

    expect(core.getPlugin(plugin.name).supportedVersion).toEqual({ min: version })
  })

  test('only unbind events when is necessary', () => {
    const core = new Core({})
    const playback = new Playback({})
    const container = new Container({ playerId: 1, playback })
    const plugin = new SkeletonPlugin(core)
    core.addPlugin(plugin)
    jest.spyOn(plugin, 'stopListening')

    core.activeContainer = container

    expect(plugin.stopListening).not.toHaveBeenCalled()

    core.activeContainer = container

    expect(plugin.stopListening).toHaveBeenCalled()
  })

  test('creates cache elements to not have unnecessary re-render cycles', () => {
    const core = new Core({})
    const plugin = new SkeletonPlugin(core)
    core.addPlugin(plugin)
    jest.spyOn(plugin, 'render')
    jest.spyOn(plugin, 'cacheElements')
    plugin.render()

    expect(plugin.render).toHaveBeenCalledTimes(1)
    expect(plugin.cacheElements).not.toHaveBeenCalled()

    plugin.render()

    expect(plugin.render).toHaveBeenCalledTimes(2)
    expect(plugin.cacheElements).not.toHaveBeenCalled()
  })

  test('only accept absolute size format', () => {
    const customSize = { height: 360, width: 640 }
    const core = new Core({})
    const plugin = new SkeletonPlugin(core)
    core.addPlugin(plugin)
    plugin.registerPlayerResize({ height: '100%', width: '100%' })

    expect(plugin.playerSize).toBeUndefined()
    core.resize(customSize)

    expect(plugin.playerSize).toEqual(customSize)
  })

  test('is destroyed when Core is destroyed too', () => {
    const core = new Core({})
    const plugin = new SkeletonPlugin(core)
    core.addPlugin(plugin)
    jest.spyOn(plugin, 'destroy')
    core.destroy()

    expect(plugin.destroy).toHaveBeenCalled()
  })

  test('resets isRendered flag if is destroyed', () => {
    const core = new Core({})
    const plugin = new SkeletonPlugin(core)
    core.addPlugin(plugin)
    plugin.destroy()

    expect(plugin.isRendered).toBeFalsy()
  })

  test('trigger onClick at click on plugin element', () => {
    const core = new Core({})
    const plugin = new SkeletonPlugin(core)
    core.addPlugin(plugin)
    jest.spyOn(plugin, 'onClick')

    const evt = new Event('click')
    plugin.el.dispatchEvent(evt)

    expect(plugin.onClick).not.toHaveBeenCalled()
  })

  test('have methods to control your visibility', () => {
    const core = new Core({})
    const plugin = new SkeletonPlugin(core)
    core.addPlugin(plugin)

    expect(plugin.$container.hasClass('skeleton-container--disabled')).toBeFalsy()
    plugin.hide()

    expect(plugin.$container.hasClass('skeleton-container--disabled')).toBeTruthy()
    plugin.show()

    expect(plugin.$container.hasClass('skeleton-container--disabled')).toBeFalsy()
  })
})
