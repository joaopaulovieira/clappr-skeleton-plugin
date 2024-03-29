import { UICorePlugin, Events, Styler, template, version } from '@clappr/core'

import pluginStyle from './public/skeleton.scss'
import templateHtml from './public/skeleton.html'

export default class SkeletonPlugin extends UICorePlugin {
  get name() { return 'skeleton' }

  get supportedVersion() { return { min: version } }

  get attributes() { return { class: 'skeleton' } }

  get template() { return template(templateHtml) }

  get events() { return { click: 'onClick' } }

  constructor(core) {
    super(core)
    this.init()
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    const coreEventListenerData = [
      { object: this.core, event: Events.CORE_ACTIVE_CONTAINER_CHANGED, callback: this.onContainerChanged },
      { object: this.core, event: Events.CORE_RESIZE, callback: this.registerPlayerResize },
    ]

    coreEventListenerData.forEach(item => this.stopListening(item.object, item.event, item.callback))
    coreEventListenerData.forEach(item => this.listenTo(item.object, item.event, item.callback))
  }

  bindContainerEvents() {
    const containerEventListenerData = [
      { object: this.container, event: Events.CONTAINER_PAUSE, callback: this.hide },
      { object: this.container, event: Events.CONTAINER_PLAY, callback: this.show },
    ]
    this.container && containerEventListenerData.forEach(item => this.listenTo(item.object, item.event, item.callback))
  }

  registerPlayerResize(size) {
    if (!size.width || typeof size.width !== 'number') return
    this.playerSize = size
  }

  onContainerChanged() {
    this.container && this.stopListening(this.container)
    this.container = this.core.activeContainer
    this.bindContainerEvents()
  }

  destroy() {
    this.isRendered = false
    super.destroy()
  }

  onClick() {
    console.log('Skeleton plugin clicked!') // eslint-disable-line no-console
  }

  show() {
    this.$container.removeClass('skeleton-container--disabled')
  }

  hide() {
    this.$container.addClass('skeleton-container--disabled')
  }

  cacheElements() {
    this.$container = this.$el.find('.skeleton-container')
  }

  render() {
    if (this.isRendered) return
    this.$el.html(this.template({ options: this.options }))
    this.$el.append(Styler.getStyleFor(pluginStyle))
    this.core.$el[0].append(this.$el[0])
    this.cacheElements()
    this.isRendered = true
    return this
  }
}
