import { version, template, Events, Styler, UICorePlugin } from '@clappr/core';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".skeleton-container {\n  position: absolute;\n  height: 5%;\n  width: 20%;\n  z-index: 999;\n  background-color: black;\n  color: white;\n  line-height: 1.15 !important; }\n";
styleInject(css_248z);

var templateHtml = "<p class=\"skeleton-container\"> Skeleton Plugin</p>\n";

var SkeletonPlugin = /*#__PURE__*/function (_UICorePlugin) {
  _inherits(SkeletonPlugin, _UICorePlugin);

  _createClass(SkeletonPlugin, [{
    key: "name",
    get: function get() {
      return 'skeleton';
    }
  }, {
    key: "supportedVersion",
    get: function get() {
      return {
        min: version
      };
    }
  }, {
    key: "attributes",
    get: function get() {
      return {
        "class": 'skeleton'
      };
    }
  }, {
    key: "template",
    get: function get() {
      return template(templateHtml);
    }
  }, {
    key: "events",
    get: function get() {
      var events = {
        click: 'onClick'
      };
      return events;
    }
  }]);

  function SkeletonPlugin(core) {
    var _this;

    _classCallCheck(this, SkeletonPlugin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SkeletonPlugin).call(this, core));

    _this.init();

    return _this;
  }

  _createClass(SkeletonPlugin, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      var coreEventListenerData = [{
        object: this.core,
        event: Events.CORE_ACTIVE_CONTAINER_CHANGED,
        callback: this.onContainerChanged
      }, {
        object: this.core,
        event: Events.CORE_RESIZE,
        callback: this.registerPlayerResize
      }];
      coreEventListenerData.forEach(function (item) {
        return _this2.stopListening(item.object, item.event, item.callback);
      });
      coreEventListenerData.forEach(function (item) {
        return _this2.listenTo(item.object, item.event, item.callback);
      });
    }
  }, {
    key: "bindContainerEvents",
    value: function bindContainerEvents() {
      var _this3 = this;

      var containerEventListenerData = [{
        object: this.container,
        event: Events.CONTAINER_CLICK,
        callback: this.hide
      }];
      if (this.container) containerEventListenerData.forEach(function (item) {
        return _this3.listenTo(item.object, item.event, item.callback);
      });
    }
  }, {
    key: "registerPlayerResize",
    value: function registerPlayerResize(size) {
      if (!size.width || typeof size.width !== 'number') return;
      this.playerSize = size;
    }
  }, {
    key: "onContainerChanged",
    value: function onContainerChanged() {
      this.container && this.stopListening(this.container);
      this.container = this.core.activeContainer;
      this.bindContainerEvents();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.isRendered = false;

      _get(_getPrototypeOf(SkeletonPlugin.prototype), "destroy", this).call(this);
    }
  }, {
    key: "onClick",
    value: function onClick() {
      console.log('Skeleton plugin clicked!'); // eslint-disable-line no-console
    }
  }, {
    key: "show",
    value: function show() {
      this.$el.show();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$el.hide();
    }
  }, {
    key: "cacheElements",
    value: function cacheElements() {
      this.$container = this.$el.find('.skeleton-container');
    }
  }, {
    key: "render",
    value: function render() {
      if (this.isRendered) return;
      this.$el.html(this.template({
        options: this.options
      }));
      this.$el.append(Styler.getStyleFor(css_248z));
      this.core.$el[0].append(this.$el[0]);
      this.cacheElements();
      this.isRendered = true;
      return this;
    }
  }]);

  return SkeletonPlugin;
}(UICorePlugin);

export default SkeletonPlugin;
