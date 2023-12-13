import {
  require_react_dom
} from "./chunk-DZXRV6RW.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS,
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React6 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format2) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format2, args);
            }
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn2, construct) {
          if (!fn2 || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn2);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn2, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn2.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn2();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn2.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn2.displayName);
                        }
                        {
                          if (typeof fn2 === "function") {
                            componentFrameCache.set(fn2, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn2 ? fn2.displayName || fn2.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn2 === "function") {
              componentFrameCache.set(fn2, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn2, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn2, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        var it2;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!b.has(i.value[0]))
              return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!equal(i.value[1], b.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!b.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual2(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning2 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format2, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format2.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
      warning2 = function(condition, format2, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format2 === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format2].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning2;
  }
});

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());

// node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
  var k, y2, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y2 = toVal(mix[k])) {
            str && (str += " ");
            str += y2;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x2, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x2 = toVal(tmp)) {
        str && (str += " ");
        str += x2;
      }
    }
  }
  return str;
}

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-popper/lib/esm/Popper.js
var React4 = __toESM(require_react());

// node_modules/react-popper/lib/esm/Manager.js
var React = __toESM(require_react());
var ManagerReferenceNodeContext = React.createContext();
var ManagerReferenceNodeSetterContext = React.createContext();

// node_modules/react-popper/lib/esm/utils.js
var React2 = __toESM(require_react());
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? React2.useLayoutEffect : React2.useEffect;

// node_modules/react-popper/lib/esm/usePopper.js
var React3 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x2 = _ref.x, y2 = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/react-popper/lib/esm/usePopper.js
var import_react_fast_compare = __toESM(require_react_fast_compare());
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = React3.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = React3.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = React3.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn2(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        ReactDOM.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = React3.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if ((0, import_react_fast_compare.default)(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React3.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper4 = options.createPopper || createPopper3;
    var popperInstance = createPopper4(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

// node_modules/react-popper/lib/esm/Reference.js
var React5 = __toESM(require_react());
var import_warning = __toESM(require_warning());

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var o = document.createElement("style");
      o.appendChild(document.createTextNode(".dropdown-menu .active:not(.form-control){color:#16181b;background-color:#eee}.dropdown-menu [data-active=true] a.dropdown-item,.dropdown-menu .dropdown-item:focus,.dropdown-menu li:focus .dropdown-item :not(.disabled){color:#16181b;background-color:#eee}.dropdown-menu li:focus{outline:none}.dropdown-menu.dropdown-menu-dark [data-active=true] a.dropdown-item,.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item{color:#fff;background-color:#1266f1}.btn-group.dropstart>.dropdown-menu{right:0!important}")), document.head.appendChild(o);
    }
  } catch (d) {
    console.error("vite-plugin-css-injected-by-js", d);
  }
})();
var $e = import_react.default.forwardRef(
  ({ breakpoint: e, fluid: t, children: s, className: r, tag: n = "div", ...a }, c) => {
    const o = clsx_m_default(`${t ? "container-fluid" : `container${e ? "-" + e : ""}`}`, r);
    return (0, import_jsx_runtime.jsx)(n, { className: o, ...a, ref: c, children: s });
  }
);
$e.displayName = "MDBContainer";
var Ee = import_react.default.forwardRef(
  ({
    center: e,
    children: t,
    className: s,
    end: r,
    lg: n,
    md: a,
    offsetLg: c,
    offsetMd: o,
    offsetSm: i,
    order: u,
    size: d,
    sm: p,
    start: m,
    tag: g = "div",
    xl: h,
    xxl: v,
    xs: b,
    ...T
  }, R) => {
    const N = clsx_m_default(
      d && `col-${d}`,
      b && `col-xs-${b}`,
      p && `col-sm-${p}`,
      a && `col-md-${a}`,
      n && `col-lg-${n}`,
      h && `col-xl-${h}`,
      v && `col-xxl-${v}`,
      !d && !b && !p && !a && !n && !h && !v ? "col" : "",
      u && `order-${u}`,
      m && "align-self-start",
      e && "align-self-center",
      r && "align-self-end",
      i && `offset-sm-${i}`,
      o && `offset-md-${o}`,
      c && `offset-lg-${c}`,
      s
    );
    return (0, import_jsx_runtime.jsx)(g, { className: N, ref: R, ...T, children: t });
  }
);
Ee.displayName = "MDBCol";
var Ie = import_react.default.forwardRef(
  ({ className: e, color: t = "primary", pill: s, light: r, dot: n, tag: a = "span", children: c, notification: o, ...i }, u) => {
    const d = clsx_m_default(
      "badge",
      r ? t && `badge-${t}` : t && `bg-${t}`,
      n && "badge-dot",
      s && "rounded-pill",
      o && "badge-notification",
      e
    );
    return (0, import_jsx_runtime.jsx)(a, { className: d, ref: u, ...i, children: c });
  }
);
Ie.displayName = "MDBBadge";
var Le = ({ ...e }) => {
  const [t, s] = (0, import_react.useState)(false), r = clsx_m_default("ripple-wave", t && "active");
  return (0, import_react.useEffect)(() => {
    const n = setTimeout(() => {
      s(true);
    }, 50);
    return () => {
      clearTimeout(n);
    };
  }, []), (0, import_jsx_runtime.jsx)("div", { className: r, ...e });
};
var xe = (...e) => {
  const t = import_react.default.useRef();
  return import_react.default.useEffect(() => {
    e.forEach((s) => {
      s && (typeof s == "function" ? s(t.current) : s.current = t.current);
    });
  }, [e]), t;
};
var ye = import_react.default.forwardRef(
  ({
    className: e,
    rippleTag: t = "div",
    rippleCentered: s,
    rippleDuration: r = 500,
    rippleUnbound: n,
    rippleRadius: a = 0,
    rippleColor: c = "dark",
    children: o,
    onMouseDown: i,
    ...u
  }, d) => {
    const p = (0, import_react.useRef)(null), m = xe(d, p), g = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", h = [0, 0, 0], v = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"], [b, T] = (0, import_react.useState)([]), [R, N] = (0, import_react.useState)(false), k = clsx_m_default(
      "ripple",
      "ripple-surface",
      n && "ripple-surface-unbound",
      R && `ripple-surface-${c}`,
      e
    ), D = () => {
      if (v.find((L) => L === (c == null ? void 0 : c.toLowerCase())))
        return N(true);
      {
        const L = S(c).join(",");
        return `radial-gradient(circle, ${g.split("{{color}}").join(`${L}`)})`;
      }
    }, S = (w) => {
      const L = ($) => ($.length < 7 && ($ = `#${$[1]}${$[1]}${$[2]}${$[2]}${$[3]}${$[3]}`), [parseInt($.substr(1, 2), 16), parseInt($.substr(3, 2), 16), parseInt($.substr(5, 2), 16)]), I = ($) => {
        const C = document.body.appendChild(document.createElement("fictum")), H = "rgb(1, 2, 3)";
        return C.style.color = H, C.style.color !== H || (C.style.color = $, C.style.color === H || C.style.color === "") ? h : ($ = getComputedStyle(C).color, document.body.removeChild(C), $);
      }, O = ($) => ($ = $.match(/[.\d]+/g).map((C) => +Number(C)), $.length = 3, $);
      return w.toLowerCase() === "transparent" ? h : w[0] === "#" ? L(w) : (w.indexOf("rgb") === -1 && (w = I(w)), w.indexOf("rgb") === 0 ? O(w) : h);
    }, E = (w) => {
      const { offsetX: L, offsetY: I, height: O, width: $ } = w, C = I <= O / 2, H = L <= $ / 2, P = (Y, Q) => Math.sqrt(Y ** 2 + Q ** 2), X = I === O / 2 && L === $ / 2, G = {
        first: C === true && H === false,
        second: C === true && H === true,
        third: C === false && H === true,
        fourth: C === false && H === false
      }, _ = {
        topLeft: P(L, I),
        topRight: P($ - L, I),
        bottomLeft: P(L, O - I),
        bottomRight: P($ - L, O - I)
      };
      let J = 0;
      return X || G.fourth ? J = _.topLeft : G.third ? J = _.topRight : G.second ? J = _.bottomRight : G.first && (J = _.bottomLeft), J * 2;
    }, F = (w) => {
      var J;
      const L = (J = m.current) == null ? void 0 : J.getBoundingClientRect(), I = w.clientX - L.left, O = w.clientY - L.top, $ = L.height, C = L.width, H = {
        offsetX: s ? $ / 2 : I,
        offsetY: s ? C / 2 : O,
        height: $,
        width: C
      }, P = {
        delay: r && r * 0.5,
        duration: r && r - r * 0.5
      }, X = E(H), G = a || X / 2, _ = {
        left: s ? `${C / 2 - G}px` : `${I - G}px`,
        top: s ? `${$ / 2 - G}px` : `${O - G}px`,
        height: a ? `${a * 2}px` : `${X}px`,
        width: a ? `${a * 2}px` : `${X}px`,
        transitionDelay: `0s, ${P.delay}ms`,
        transitionDuration: `${r}ms, ${P.duration}ms`
      };
      return R ? _ : { ..._, backgroundImage: `${D()}` };
    }, W = (w) => {
      const L = F(w), I = b.concat(L);
      T(I), i && i(w);
    };
    return (0, import_react.useEffect)(() => {
      const w = setTimeout(() => {
        b.length > 0 && T(b.splice(1, b.length - 1));
      }, r);
      return () => {
        clearTimeout(w);
      };
    }, [r, b]), (0, import_jsx_runtime.jsxs)(t, { className: k, onMouseDown: (w) => W(w), ref: m, ...u, children: [
      o,
      b.map((w, L) => (0, import_jsx_runtime.jsx)(Le, { style: w }, L))
    ] });
  }
);
ye.displayName = "MDBRipple";
var le = import_react.default.forwardRef(
  ({
    className: e,
    color: t = "primary",
    outline: s,
    children: r,
    rounded: n,
    disabled: a,
    floating: c,
    size: o,
    href: i,
    block: u,
    active: d,
    toggle: p,
    noRipple: m,
    tag: g = "button",
    role: h = "button",
    ...v
  }, b) => {
    const [T, R] = (0, import_react.useState)(d || false);
    let N;
    const k = t && ["light", "link"].includes(t) || s ? "dark" : "light";
    t !== "none" ? s ? t ? N = `btn-outline-${t}` : N = "btn-outline-primary" : t ? N = `btn-${t}` : N = "btn-primary" : N = "";
    const D = clsx_m_default(
      t !== "none" && "btn",
      N,
      n && "btn-rounded",
      c && "btn-floating",
      o && `btn-${o}`,
      `${(i || g !== "button") && a ? "disabled" : ""}`,
      u && "btn-block",
      T && "active",
      e
    );
    return i && g !== "a" && (g = "a"), ["hr", "img", "input"].includes(g) || m ? (0, import_jsx_runtime.jsx)(
      g,
      {
        className: D,
        onClick: p ? () => {
          R(!T);
        } : void 0,
        disabled: a && g === "button" ? true : void 0,
        href: i,
        ref: b,
        role: h,
        ...v,
        children: r
      }
    ) : (0, import_jsx_runtime.jsx)(
      ye,
      {
        rippleTag: g,
        rippleColor: k,
        className: D,
        onClick: p ? () => {
          R(!T);
        } : void 0,
        disabled: a && g === "button" ? true : void 0,
        href: i,
        ref: b,
        role: h,
        ...v,
        children: r
      }
    );
  }
);
le.displayName = "MDBBtn";
var ke = import_react.default.forwardRef(
  ({ className: e, children: t, shadow: s, toolbar: r, size: n, vertical: a, tag: c = "div", role: o = "group", ...i }, u) => {
    let d;
    r ? d = "btn-toolbar" : a ? d = "btn-group-vertical" : d = "btn-group";
    const p = clsx_m_default(d, s && `shadow-${s}`, n && `btn-group-${n}`, e);
    return (0, import_jsx_runtime.jsx)(c, { className: p, ref: u, role: o, ...i, children: t });
  }
);
ke.displayName = "MDBBtnGroup";
var Se = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", color: r, grow: n, size: a, ...c }, o) => {
    const i = clsx_m_default(
      `${n ? "spinner-grow" : "spinner-border"}`,
      r && `text-${r}`,
      `${a ? n ? "spinner-grow-" + a : "spinner-border-" + a : ""}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(s, { className: i, ref: o, ...c, children: t });
  }
);
Se.displayName = "MDBSpinner";
var Ce = import_react.default.forwardRef(
  ({ className: e, children: t, border: s, background: r, tag: n = "div", shadow: a, alignment: c, ...o }, i) => {
    const u = clsx_m_default(
      "card",
      s && `border border-${s}`,
      r && `bg-${r}`,
      a && `shadow-${a}`,
      c && `text-${c}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(n, { className: u, ref: i, ...o, children: t });
  }
);
Ce.displayName = "MDBCard";
var Ae = import_react.default.forwardRef(
  ({ className: e, children: t, border: s, background: r, tag: n = "div", ...a }, c) => {
    const o = clsx_m_default("card-header", s && `border-${s}`, r && `bg-${r}`, e);
    return (0, import_jsx_runtime.jsx)(n, { className: o, ...a, ref: c, children: t });
  }
);
Ae.displayName = "MDBCardHeader";
var Pe = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "p", ...r }, n) => {
    const a = clsx_m_default("card-subtitle", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
Pe.displayName = "MDBCardSubTitle";
var Fe = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "h5", ...r }, n) => {
    const a = clsx_m_default("card-title", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
Fe.displayName = "MDBCardTitle";
var Oe = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "p", ...r }, n) => {
    const a = clsx_m_default("card-text", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
Oe.displayName = "MDBCardText";
var He = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...r }, n) => {
    const a = clsx_m_default("card-body", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
He.displayName = "MDBCardBody";
var We = import_react.default.forwardRef(
  ({ className: e, children: t, border: s, background: r, tag: n = "div", ...a }, c) => {
    const o = clsx_m_default("card-footer", s && `border-${s}`, r && `bg-${r}`, e);
    return (0, import_jsx_runtime.jsx)(n, { className: o, ...a, ref: c, children: t });
  }
);
We.displayName = "MDBCardFooter";
var Qt = ({ className: e, children: t, overlay: s, position: r, fluid: n, ...a }) => {
  const c = clsx_m_default(r && `card-img-${r}`, n && "img-fluid", s && "card-img", e);
  return (0, import_jsx_runtime.jsx)("img", { className: c, ...a, children: t });
};
var Xe = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...r }, n) => {
    const a = clsx_m_default("card-img-overlay", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
Xe.displayName = "MDBCardOverlay";
var Zt = ({ className: e, children: t, ...s }) => {
  const r = clsx_m_default("card-link", e);
  return (0, import_jsx_runtime.jsx)("a", { className: r, ...s, children: t });
};
var _e = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...r }, n) => {
    const a = clsx_m_default("card-group", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
_e.displayName = "MDBCardGroup";
var je = import_react.default.forwardRef(
  ({ className: e, tag: t = "ul", horizontal: s, horizontalSize: r, light: n, numbered: a, children: c, small: o, ...i }, u) => {
    const d = clsx_m_default(
      "list-group",
      s && (r ? `list-group-horizontal-${r}` : "list-group-horizontal"),
      n && "list-group-light",
      a && "list-group-numbered",
      o && "list-group-small",
      e
    );
    return (0, import_jsx_runtime.jsx)(t, { className: d, ref: u, ...i, children: c });
  }
);
je.displayName = "MDBListGroup";
var Ge = import_react.default.forwardRef(
  ({ className: e, tag: t = "li", active: s, disabled: r, action: n, color: a, children: c, noBorders: o, ...i }, u) => {
    const d = t === "button", p = clsx_m_default(
      "list-group-item",
      s && "active",
      r && !d && "disabled",
      n && "list-group-item-action",
      a && `list-group-item-${a}`,
      o && "border-0",
      e
    );
    return (0, import_jsx_runtime.jsx)(t, { className: p, disabled: d && r, ref: u, ...i, children: c });
  }
);
Ge.displayName = "MDBListGroupItem";
var zt = ({
  className: e,
  children: t,
  disableMouseDown: s,
  tag: r = le,
  tooltipTag: n = "div",
  options: a,
  placement: c = "top",
  title: o,
  wrapperProps: i,
  wrapperClass: u,
  onOpen: d,
  onClose: p,
  onMouseEnter: m,
  onMouseLeave: g,
  ...h
}) => {
  const [v, b] = (0, import_react.useState)(null), [T, R] = (0, import_react.useState)(null), [N, k] = (0, import_react.useState)(false), [D, S] = (0, import_react.useState)(false), [E, F] = (0, import_react.useState)(false), [W, w] = (0, import_react.useState)(false), L = clsx_m_default("tooltip", E && "show", "fade", e), { styles: I, attributes: O } = usePopper(v, T, {
    placement: c,
    ...a
  });
  (0, import_react.useEffect)(() => {
    let P, X;
    return N || D ? (w(true), P = setTimeout(() => {
      F(true);
    }, 4)) : (F(false), X = setTimeout(() => {
      w(false);
    }, 300)), () => {
      clearTimeout(P), clearTimeout(X);
    };
  }, [N, D]);
  const $ = (P) => {
    d == null || d(P), !P.defaultPrevented && k(true), m == null || m(P);
  }, C = (P) => {
    p == null || p(P), !P.defaultPrevented && k(false), g == null || g(P);
  }, H = (0, import_react.useCallback)(
    (P) => {
      P.target === v ? S(true) : S(false);
    },
    [v]
  );
  return (0, import_react.useEffect)(() => {
    if (!s)
      return document.addEventListener("mousedown", H), () => {
        document.removeEventListener("mousedown", H);
      };
  }, [H, s]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(
      r,
      {
        className: u,
        onMouseEnter: $,
        onMouseLeave: C,
        ref: b,
        ...i,
        children: t
      }
    ),
    W && import_react_dom.default.createPortal(
      (0, import_jsx_runtime.jsx)(
        n,
        {
          ref: R,
          className: L,
          style: I.popper,
          ...O.popper,
          role: "tooltip",
          ...h,
          children: (0, import_jsx_runtime.jsx)("div", { className: "tooltip-inner", children: o })
        }
      ),
      document.body
    )
  ] });
};
var Ye = import_react.default.forwardRef(
  ({
    around: e,
    between: t,
    bottom: s,
    center: r,
    children: n,
    className: a,
    evenly: c,
    end: o,
    middle: i,
    start: u,
    tag: d = "div",
    top: p,
    ...m
  }, g) => {
    const h = clsx_m_default(
      "row",
      e && "justify-content-around",
      t && "justify-content-between",
      s && "align-self-end",
      r && "justify-content-center",
      c && "justifty-content-evenly",
      o && "justify-content-end",
      i && "align-self-center",
      u && "justify-content-start",
      p && "align-self-start",
      a
    );
    return (0, import_jsx_runtime.jsx)(d, { className: h, ...m, ref: g, children: n });
  }
);
Ye.displayName = "MDBRow";
var es = ({
  animate: e,
  className: t,
  icon: s,
  fab: r,
  fas: n,
  fal: a,
  far: c,
  flag: o,
  spin: i,
  fixed: u,
  flip: d,
  list: p,
  size: m,
  pull: g,
  pulse: h,
  color: v,
  border: b,
  rotate: T,
  inverse: R,
  stack: N,
  iconType: k,
  children: D,
  ...S
}) => {
  let E;
  o ? E = "flag" : r ? E = "fab" : n ? E = "fas" : c ? E = "far" : a ? E = "fal" : E = "fa";
  const F = clsx_m_default(
    k ? `fa-${k}` : E,
    e && `fa-${e}`,
    o ? `flag-${o}` : s && `fa-${s}`,
    m && `fa-${m}`,
    v && `text-${v}`,
    b && "fa-border",
    T && `fa-rotate-${T}`,
    g && `fa-pull-${g}`,
    i && !e && "fa-spin",
    p && "fa-li",
    u && "fa-fw",
    h && !e && "fa-pulse",
    R && "fa-inverse",
    d && `fa-flip-${d}`,
    N && `fa-stack-${N}`,
    t
  );
  return (0, import_jsx_runtime.jsx)("i", { className: F, ...S, children: D });
};
var Ve = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    tag: s = "p",
    variant: r,
    color: n,
    blockquote: a,
    note: c,
    noteColor: o,
    listUnStyled: i,
    listInLine: u,
    ...d
  }, p) => {
    const m = clsx_m_default(
      r && r,
      a && "blockquote",
      c && "note",
      n && `text-${n}`,
      o && `note-${o}`,
      i && "list-unstyled",
      u && "list-inline",
      e
    );
    return a && (s = "blockquote"), (i || u) && (s = "ul"), (0, import_jsx_runtime.jsx)(s, { className: m, ref: p, ...d, children: t });
  }
);
Ve.displayName = "MDBTypography";
var qe = import_react.default.forwardRef(
  ({ className: e, color: t, uppercase: s, bold: r, children: n, ...a }, c) => {
    const o = clsx_m_default(
      "breadcrumb",
      r && "font-weight-bold",
      t && `text-${t}`,
      s && "text-uppercase",
      e
    );
    return (0, import_jsx_runtime.jsx)("nav", { "aria-label": "breadcrumb", children: (0, import_jsx_runtime.jsx)("ol", { className: o, ref: c, ...a, children: n }) });
  }
);
qe.displayName = "MDBBreadcrumb";
var Ke = import_react.default.forwardRef(
  ({ className: e, active: t, current: s = "page", children: r, ...n }, a) => {
    const c = clsx_m_default("breadcrumb-item", t && "active", e);
    return (0, import_jsx_runtime.jsx)("li", { className: c, ref: a, "aria-current": t && s, ...n, children: r });
  }
);
Ke.displayName = "MDBBreadcrumbItem";
var Ue = (e) => {
  if (e !== false)
    return `navbar-expand-${e}`;
};
var Je = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    light: s,
    dark: r,
    scrolling: n,
    fixed: a,
    sticky: c,
    scrollingNavbarOffset: o,
    color: i,
    transparent: u,
    expand: d,
    tag: p = "nav",
    bgColor: m,
    ...g
  }, h) => {
    const [v, b] = (0, import_react.useState)(false), T = clsx_m_default(
      {
        "navbar-light": s,
        "navbar-dark": r,
        "scrolling-navbar": n || o,
        "top-nav-collapse": v,
        [`text-${i}`]: i && u ? v : i
      },
      a && `fixed-${a}`,
      c && "sticky-top",
      "navbar",
      d && Ue(d),
      m && `bg-${m}`,
      e
    ), R = (0, import_react.useCallback)(() => {
      o && window.pageYOffset > o ? b(true) : b(false);
    }, [o]);
    return (0, import_react.useEffect)(() => ((n || o) && window.addEventListener("scroll", R), () => {
      window.removeEventListener("scroll", R);
    }), [R, n, o]), (0, import_jsx_runtime.jsx)(p, { className: T, role: "navigation", ...g, ref: h, children: t });
  }
);
Je.displayName = "MDBNavbar";
var Qe = import_react.default.forwardRef(
  ({ children: e, className: t = "", disabled: s = false, active: r = false, tag: n = "a", ...a }, c) => {
    const o = clsx_m_default("nav-link", s ? "disabled" : r ? "active" : "", t);
    return (0, import_jsx_runtime.jsx)(n, { "data-test": "nav-link", className: o, style: { cursor: "pointer" }, ref: c, ...a, children: e });
  }
);
Qe.displayName = "MDBNavbarLink";
var Ze = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "a", ...r }, n) => {
    const a = clsx_m_default("navbar-brand", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ref: n, ...r, children: t });
  }
);
Ze.displayName = "MDBNavbarBrand";
var ze = import_react.default.forwardRef(
  ({ children: e, className: t, active: s, text: r, tag: n = "li", ...a }, c) => {
    const o = clsx_m_default("nav-item", s && "active", r && "navbar-text", t);
    return (0, import_jsx_runtime.jsx)(n, { ...a, className: o, ref: c, children: e });
  }
);
ze.displayName = "MDBNavbarItem";
var et = import_react.default.forwardRef(
  ({ children: e, className: t, right: s, fullWidth: r = true, left: n, tag: a = "ul", ...c }, o) => {
    const i = clsx_m_default("navbar-nav", r && "w-100", s && "ms-auto", n && "me-auto", t);
    return (0, import_jsx_runtime.jsx)(a, { className: i, ref: o, ...c, children: e });
  }
);
et.displayName = "MDBNavbarNav";
var tt = import_react.default.forwardRef(
  ({ children: e, className: t, tag: s = "button", ...r }, n) => {
    const a = clsx_m_default("navbar-toggler", t);
    return (0, import_jsx_runtime.jsx)(s, { ...r, className: a, ref: n, children: e });
  }
);
tt.displayName = "MDBNavbarToggler";
var st = import_react.default.forwardRef(
  ({ children: e, bgColor: t, color: s, className: r, ...n }, a) => {
    const c = clsx_m_default(t && `bg-${t}`, s && `text-${s}`, r);
    return (0, import_jsx_runtime.jsx)("footer", { className: c, ...n, ref: a, children: e });
  }
);
st.displayName = "MDBFooter";
var rt = import_react.default.forwardRef(
  ({ children: e, size: t, circle: s, center: r, end: n, start: a, className: c, ...o }, i) => {
    const u = clsx_m_default(
      "pagination",
      r && "justify-content-center",
      s && "pagination-circle",
      n && "justify-content-end",
      t && `pagination-${t}`,
      a && "justify-content-start",
      c
    );
    return (0, import_jsx_runtime.jsx)("ul", { className: u, ...o, ref: i, children: e });
  }
);
rt.displayName = "MDBPagination";
var nt = import_react.default.forwardRef(
  ({ children: e, className: t, tag: s = "a", ...r }, n) => {
    const a = clsx_m_default("page-link", t);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: e });
  }
);
nt.displayName = "MDBPaginationLink";
var at = import_react.default.forwardRef(
  ({ children: e, className: t, active: s, disabled: r, ...n }, a) => {
    const c = clsx_m_default("page-item", s && "active", r && "disabled", t);
    return (0, import_jsx_runtime.jsx)("li", { className: c, ...n, ref: a, children: e });
  }
);
at.displayName = "MDBPaginationItem";
var ts = ({
  className: e,
  classNameResponsive: t,
  responsive: s,
  align: r,
  borderColor: n,
  bordered: a,
  borderless: c,
  children: o,
  color: i,
  hover: u,
  small: d,
  striped: p,
  ...m
}) => {
  const g = clsx_m_default(
    "table",
    r && `align-${r}`,
    n && `border-${n}`,
    a && "table-bordered",
    c && "table-borderless",
    i && `table-${i}`,
    u && "table-hover",
    d && "table-sm",
    p && "table-striped",
    e
  ), h = (0, import_react.useMemo)(() => (0, import_jsx_runtime.jsx)("table", { className: g, ...m, children: o }), [o, g, m]);
  if (s) {
    const v = clsx_m_default(
      typeof s == "string" ? `table-responsive-${s}` : "table-responsive",
      t
    );
    return (0, import_jsx_runtime.jsx)("div", { className: v, children: h });
  } else
    return h;
};
var ss = ({ className: e, children: t, dark: s, light: r, ...n }) => {
  const a = clsx_m_default(s && "table-dark", r && "table-light", e);
  return (0, import_jsx_runtime.jsx)("thead", { className: a, ...n, children: t });
};
var rs = ({ className: e, children: t, ...s }) => {
  const r = clsx_m_default(e);
  return (0, import_jsx_runtime.jsx)("tbody", { className: r, ...s, children: t });
};
var Ne = import_react.default.forwardRef(
  ({
    animated: e,
    children: t,
    className: s,
    style: r,
    tag: n = "div",
    valuenow: a,
    valuemax: c,
    striped: o,
    bgColor: i,
    valuemin: u,
    width: d,
    ...p
  }, m) => {
    const g = clsx_m_default(
      "progress-bar",
      i && `bg-${i}`,
      o && "progress-bar-striped",
      e && "progress-bar-animated",
      s
    ), h = { width: `${d}%`, ...r };
    return (0, import_jsx_runtime.jsx)(
      n,
      {
        className: g,
        style: h,
        ref: m,
        role: "progressbar",
        ...p,
        "aria-valuenow": Number(d) ?? a,
        "aria-valuemin": Number(u),
        "aria-valuemax": Number(c),
        children: t
      }
    );
  }
);
Ne.displayName = "MDBProgressBar";
var ot = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", height: r, style: n, ...a }, c) => {
    const o = clsx_m_default("progress", e), i = { height: `${r}px`, ...n };
    return (0, import_jsx_runtime.jsx)(s, { className: o, ref: c, style: i, ...a, children: import_react.default.Children.map(t, (u) => {
      if (!import_react.default.isValidElement(u) || u.type !== Ne) {
        console.error("Progress component only allows ProgressBar as child");
        return;
      } else
        return u;
    }) });
  }
);
ot.displayName = "MDBProgress";
var ct = (e) => {
  const [t, s] = (0, import_react.useState)(false), r = (0, import_react.useMemo)(() => new IntersectionObserver(([n]) => {
    s(n.isIntersecting);
  }), []);
  return (0, import_react.useEffect)(() => {
    if (e.current)
      return r.observe(e.current), () => r.disconnect();
  }, [r, e]), t;
};
var lt = (e, t) => (0, import_react.useMemo)(() => t !== void 0 ? t : e, [t, e]);
var it = import_react.default.forwardRef(
  ({
    className: e,
    size: t,
    contrast: s,
    value: r,
    defaultValue: n,
    id: a,
    labelClass: c,
    wrapperClass: o,
    wrapperStyle: i,
    wrapperTag: u = "div",
    label: d,
    onChange: p,
    children: m,
    labelRef: g,
    labelStyle: h,
    type: v,
    onBlur: b,
    readonly: T = false,
    showCounter: R = false,
    ...N
  }, k) => {
    var Q, Z;
    const [D, S] = (0, import_react.useState)(r || n), [E, F] = (0, import_react.useState)(0), [W, w] = (0, import_react.useState)(false), [L, I] = (0, import_react.useState)(0), O = (0, import_react.useRef)(null), $ = ct(O);
    (0, import_react.useImperativeHandle)(k, () => O.current);
    const C = (0, import_react.useRef)(null), H = g || C, P = clsx_m_default("form-outline", s && "form-white", o), X = clsx_m_default(
      "form-control",
      W && "active",
      v === "date" && "active",
      t && `form-control-${t}`,
      e
    ), G = clsx_m_default("form-label", c);
    (0, import_react.useEffect)(() => {
      if (!O.current)
        return;
      const { value: M } = O.current;
      M != "" ? w(true) : w(false);
    }, [(Q = O.current) == null ? void 0 : Q.value]), (0, import_react.useEffect)(() => {
      r !== void 0 && (r != "" ? w(true) : w(false));
    }, [r]), (0, import_react.useEffect)(() => {
      n !== void 0 && (n != "" ? w(true) : w(false));
    }, [n]);
    const _ = (0, import_react.useCallback)(() => {
      var M;
      (M = H.current) != null && M.clientWidth && F(H.current.clientWidth * 0.8 + 8);
    }, [H]);
    (0, import_react.useEffect)(() => {
      _();
    }, [(Z = H.current) == null ? void 0 : Z.clientWidth, _, $]);
    const J = (M) => {
      S(M.target.value), R && I(M.target.value.length), p == null || p(M);
    }, Y = (0, import_react.useCallback)(
      (M) => {
        O.current && (D !== void 0 && D != "" || r !== void 0 && r != "" || O.current.value != "" ? w(true) : w(false), b && b(M));
      },
      [D, r, b]
    );
    return (0, import_jsx_runtime.jsxs)(u, { className: P, style: i, children: [
      (0, import_jsx_runtime.jsx)(
        "input",
        {
          type: v,
          readOnly: T,
          className: X,
          onBlur: Y,
          onChange: J,
          onFocus: _,
          value: r,
          defaultValue: n,
          id: a,
          ref: O,
          ...N
        }
      ),
      d && (0, import_jsx_runtime.jsx)("label", { className: G, style: h, htmlFor: a, ref: H, children: d }),
      (0, import_jsx_runtime.jsxs)("div", { className: "form-notch", children: [
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-leading" }),
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-middle", style: { width: E } }),
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-trailing" })
      ] }),
      m,
      R && N.maxLength && (0, import_jsx_runtime.jsx)("div", { className: "form-helper", children: (0, import_jsx_runtime.jsx)("div", { className: "form-counter", children: `${L}/${N.maxLength}` }) })
    ] });
  }
);
it.displayName = "MDBInput";
var ue = ({
  className: e,
  inputRef: t,
  labelClass: s,
  wrapperClass: r,
  labelStyle: n,
  wrapperTag: a = "div",
  wrapperStyle: c,
  label: o,
  inline: i,
  btn: u,
  id: d,
  btnColor: p,
  disableWrapper: m,
  toggleSwitch: g,
  ...h
}) => {
  let v = "form-check-input", b = "form-check-label";
  u && (v = "btn-check", p ? b = `btn btn-${p}` : b = "btn btn-primary");
  const T = clsx_m_default(
    o && !u && "form-check",
    i && !u && "form-check-inline",
    g && "form-switch",
    r
  ), R = clsx_m_default(v, e), N = clsx_m_default(b, s), k = (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)("input", { className: R, id: d, ref: t, ...h }),
    o && (0, import_jsx_runtime.jsx)("label", { className: N, style: n, htmlFor: d, children: o })
  ] });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: m ? k : (0, import_jsx_runtime.jsx)(a, { style: c, className: T, children: k }) });
};
var ns = ({ ...e }) => (0, import_jsx_runtime.jsx)(ue, { type: "checkbox", ...e });
var as = ({ ...e }) => (0, import_jsx_runtime.jsx)(ue, { type: "radio", ...e });
var dt = ({
  className: e,
  children: t,
  open: s = false,
  id: r,
  navbar: n,
  tag: a = "div",
  collapseRef: c,
  style: o,
  onOpen: i,
  onClose: u,
  ...d
}) => {
  const [p, m] = (0, import_react.useState)(false), [g, h] = (0, import_react.useState)(void 0), [v, b] = (0, import_react.useState)(false), T = clsx_m_default(
    v ? "collapsing" : "collapse",
    !v && p && "show",
    n && "navbar-collapse",
    e
  ), R = (0, import_react.useRef)(null), N = c ?? R, k = (0, import_react.useCallback)(() => {
    p && h(void 0);
  }, [p]);
  return (0, import_react.useEffect)(() => {
    var D;
    g === void 0 && p && h((D = N == null ? void 0 : N.current) == null ? void 0 : D.scrollHeight);
  }, [g, p, N]), (0, import_react.useEffect)(() => {
    p !== s && (s ? i == null || i() : u == null || u(), m(s)), p && b(true);
    const D = setTimeout(() => {
      b(false);
    }, 350);
    return () => {
      clearTimeout(D);
    };
  }, [s, p, i, u]), (0, import_react.useEffect)(() => {
    var D;
    h(p ? (D = N == null ? void 0 : N.current) == null ? void 0 : D.scrollHeight : 0);
  }, [p, N, t]), (0, import_react.useEffect)(() => (window.addEventListener("resize", k), () => {
    window.removeEventListener("resize", k);
  }), [k]), (0, import_jsx_runtime.jsx)(a, { style: { height: g, ...o }, id: r, className: T, ...d, ref: N, children: t });
};
var we = (0, import_react.createContext)(null);
var ut = ({
  children: e,
  isOpen: t = false,
  options: s,
  animation: r = true,
  dropup: n,
  dropright: a,
  dropleft: c,
  onClose: o,
  onOpen: i
}) => {
  const [u, d] = (0, import_react.useState)(t), [p, m] = (0, import_react.useState)(null), [g, h] = (0, import_react.useState)(null), [v, b] = (0, import_react.useState)(-1);
  return (0, import_jsx_runtime.jsx)(
    we.Provider,
    {
      value: {
        animation: r,
        activeIndex: v,
        isOpenState: u,
        setReferenceElement: m,
        setPopperElement: h,
        setActiveIndex: b,
        popperElement: g,
        setIsOpenState: d,
        referenceElement: p,
        onClose: o,
        onOpen: i,
        dropup: n,
        options: s,
        dropright: a,
        dropleft: c
      },
      children: e
    }
  );
};
var mt = (e) => e instanceof HTMLElement;
var ft = (e) => e instanceof Node;
var re = () => {
  const e = (0, import_react.useContext)(we);
  if (!e)
    throw new Error("Missing context data");
  return e;
};
var pt = () => {
  const { isOpenState: e, setIsOpenState: t, setActiveIndex: s, popperElement: r, referenceElement: n, onClose: a } = re(), c = (0, import_react.useCallback)(
    (o) => {
      e && (a == null || a(o)), !(!e || !ft(o.target) || r && r.contains(o.target) || n && n.contains(o.target) || o.defaultPrevented) && (t(false), setTimeout(() => s(-1), 300));
    },
    [e, t, s, r, n, a]
  );
  (0, import_react.useEffect)(() => (document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c)), [c]);
};
var gt = ({
  className: e,
  tag: t = "div",
  group: s,
  children: r,
  dropup: n,
  dropright: a,
  dropleft: c,
  ...o
}) => {
  pt();
  const i = clsx_m_default(
    s ? "btn-group" : "dropdown",
    n && "dropup",
    a && "dropend",
    c && "dropstart",
    e
  );
  return (0, import_jsx_runtime.jsx)(t, { className: i, ...o, children: r });
};
var os = ({ animation: e, onClose: t, onOpen: s, ...r }) => (0, import_jsx_runtime.jsx)(ut, { animation: e, onClose: t, onOpen: s, ...r, children: (0, import_jsx_runtime.jsx)(gt, { ...r }) });
var ht = ({
  childTag: e,
  children: t,
  disabled: s,
  link: r,
  divider: n,
  header: a,
  href: c = "#"
}) => {
  const o = clsx_m_default("dropdown-item", s && "disabled");
  return r ? e ? (0, import_jsx_runtime.jsx)(e, { className: o, children: t }) : (0, import_jsx_runtime.jsx)("a", { href: c, className: o, children: t }) : n ? e ? (0, import_jsx_runtime.jsx)(e, { className: "dropdown-divider", children: t }) : (0, import_jsx_runtime.jsx)("hr", { className: "dropdown-divider" }) : a ? e ? (0, import_jsx_runtime.jsx)(e, { className: "dropdown-header", children: t }) : (0, import_jsx_runtime.jsx)("h6", { className: "dropdown-header", children: t }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t });
};
var cs = ({
  onClick: e,
  tag: t = "li",
  childTag: s,
  children: r,
  style: n,
  link: a,
  divider: c,
  header: o,
  disabled: i,
  href: u,
  preventCloseOnClick: d,
  ...p
}) => {
  const { setIsOpenState: m, onClose: g, setActiveIndex: h } = re();
  return (0, import_jsx_runtime.jsx)(t, { style: n, onClick: (b) => {
    g == null || g(b), e == null || e(b), !(i || d || b.defaultPrevented) && (setTimeout(() => h(-1), 300), m(false));
  }, ...p, children: (0, import_jsx_runtime.jsx)(
    ht,
    {
      link: a,
      divider: c,
      header: o,
      disabled: i,
      href: u,
      childTag: s,
      children: r
    }
  ) });
};
var ge = (e, t, s) => s === "up" ? e <= 0 ? t[t.length - 1].props.divider === true || t[t.length - 1].props.disabled === true : t[e - 1].props.divider === true || t[e - 1].props.disabled === true : e === t.length - 1 ? t[0].props.divider === true || t[0].props.disabled === true : t[e + 1].props.divider === true || t[e + 1].props.disabled === true;
var bt = (e) => {
  const { activeIndex: t, isOpenState: s, setIsOpenState: r, setActiveIndex: n, onClose: a } = re(), c = (0, import_react.useCallback)(
    (o) => {
      const i = ["ArrowUp", "ArrowDown", "Tab", "Enter", "Escape"];
      if (!(!Array.isArray(e) || !i.includes(o.key))) {
        if (mt(document.activeElement) && document.activeElement.blur(), o.key === "ArrowUp") {
          o.preventDefault();
          const u = ge(t, e, "up");
          if (t === 1) {
            n(u ? e.length - 1 : 0);
            return;
          }
          if (t <= 0) {
            n(u ? e.length - 2 : e.length - 1);
            return;
          }
          n((d) => u ? d - 2 : d - 1);
        }
        if (o.key === "ArrowDown" || o.key === "Tab") {
          o.preventDefault();
          const u = ge(t, e, "down");
          if (t === e.length - 2) {
            n((d) => u ? 0 : d + 1);
            return;
          }
          if (t === e.length - 1) {
            n(u ? 1 : 0);
            return;
          }
          n((d) => u ? d + 2 : d + 1);
        }
        if (o.key === "Enter") {
          const u = document.querySelector('[data-active="true"]'), d = u == null ? void 0 : u.firstElementChild;
          if (d)
            return d.click();
          if (a == null || a(o), o.defaultPrevented)
            return;
          r(false), setTimeout(() => n(-1), 300);
        }
        if (o.key === "Escape") {
          if (a == null || a(o), o.defaultPrevented)
            return;
          r(false), setTimeout(() => n(-1), 300);
        }
      }
    },
    [e, r, n, t, a]
  );
  (0, import_react.useEffect)(() => (s && document.addEventListener("keydown", c), () => {
    s && document.removeEventListener("keydown", c);
  }), [s, c]), (0, import_react.useEffect)(() => {
    const o = document.querySelector('[data-active="true"]'), i = o == null ? void 0 : o.firstElementChild;
    return i == null || i.focus(), () => i == null ? void 0 : i.blur();
  }, [t]);
};
var vt = () => {
  const { isOpenState: e } = re(), [t, s] = (0, import_react.useState)(false), [r, n] = (0, import_react.useState)(false), [a, c] = (0, import_react.useState)(e);
  return (0, import_react.useEffect)(() => {
    let o;
    return e || (n(true), s(false), o = setTimeout(() => {
      n(false), c(false);
    }, 300)), e && (s(true), n(false), c(true), o = setTimeout(() => {
      s(false);
    }, 300)), () => clearTimeout(o);
  }, [e]), { open: a, isFadeIn: t, isFadeOut: r };
};
var ls = ({
  className: e,
  tag: t = "ul",
  children: s,
  style: r,
  dark: n,
  responsive: a = "",
  appendToBody: c = false,
  alwaysOpen: o,
  ...i
}) => {
  const {
    activeIndex: u,
    setPopperElement: d,
    isOpenState: p,
    animation: m,
    referenceElement: g,
    popperElement: h,
    options: v,
    dropleft: b,
    dropup: T,
    dropright: R
  } = re(), { open: N, isFadeIn: k, isFadeOut: D } = vt();
  bt(s);
  const S = () => {
    if (R)
      return "right-start";
    if (b)
      return "left-start";
    const w = h && getComputedStyle(h).getPropertyValue("--mdb-position").trim() === "end";
    return T ? w ? "top-end" : "top-start" : w ? "bottom-end" : "bottom-start";
  }, { styles: E } = usePopper(g, h, {
    placement: S(),
    modifiers: [flip_default],
    ...v
  }), F = clsx_m_default(
    "dropdown-menu",
    n && "dropdown-menu-dark",
    p && "show",
    m && "animation",
    k && "fade-in",
    D && "fade-out",
    a && `dropdown-menu-${a}`,
    e
  );
  if (!N && !o)
    return null;
  const W = (0, import_jsx_runtime.jsx)(
    t,
    {
      className: F,
      style: { position: "absolute", zIndex: 1e3, ...E.popper, ...r },
      ref: d,
      ...i,
      children: import_react.Children.map(
        s,
        (w, L) => (0, import_react.cloneElement)(w, {
          tabIndex: 1,
          "data-active": u === L && true,
          className: clsx_m_default(u === L ? "active" : "", w.props.className)
        })
      )
    }
  );
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: c ? (0, import_react_dom.createPortal)(W, document.body) : W });
};
var is = ({
  className: e,
  tag: t = le,
  children: s,
  onClick: r,
  split: n,
  ...a
}) => {
  const { setIsOpenState: c, setReferenceElement: o, isOpenState: i, setActiveIndex: u, onClose: d, onOpen: p } = re(), m = clsx_m_default("dropdown-toggle", n && "dropdown-toggle-split", e);
  return (0, import_jsx_runtime.jsx)(
    t,
    {
      onClick: (h) => {
        r == null || r(h), i ? d == null || d(h) : p == null || p(h), !h.defaultPrevented && (c((v) => !v), setTimeout(() => u(-1), 300));
      },
      ref: o,
      className: m,
      "aria-expanded": !!i,
      ...a,
      children: s
    }
  );
};
var ds = ({
  className: e,
  btnClassName: t,
  btnChildren: s,
  children: r,
  tag: n = le,
  onOpen: a,
  onClose: c,
  popperTag: o = "div",
  open: i,
  placement: u = "bottom",
  dismiss: d,
  options: p,
  poperStyle: m,
  onClick: g,
  ...h
}) => {
  const [v, b] = (0, import_react.useState)(), [T, R] = (0, import_react.useState)(), { styles: N, attributes: k } = usePopper(v, T, { placement: u, ...p }), [D, S] = (0, import_react.useState)(i ?? false), E = lt(D, i), [F, W] = (0, import_react.useState)(false), [w, L] = (0, import_react.useState)(false), I = clsx_m_default("popover fade", F && E && "show", e), O = (C) => {
    E && !d ? c == null || c() : E || a == null || a(), d ? (L(true), S(true)) : S(!E), g && g(C);
  }, $ = (0, import_react.useCallback)(
    (C) => {
      w && T && E && v && !v.contains(C.target) && (S(false), c == null || c());
    },
    [w, E, T, v, c]
  );
  return (0, import_react.useEffect)(() => {
    const C = setTimeout(() => {
      W(E);
    }, 150);
    return () => {
      clearTimeout(C);
    };
  }, [E]), (0, import_react.useEffect)(() => (E && document.addEventListener("mousedown", $), () => {
    document.removeEventListener("mousedown", $);
  }), [$, E]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(n, { onClick: O, className: t, ...h, ref: b, children: s }),
    (F || E) && import_react_dom.default.createPortal(
      (0, import_jsx_runtime.jsx)(
        o,
        {
          className: I,
          ref: R,
          style: { ...N.popper, ...m },
          ...k.popper,
          children: r
        }
      ),
      document.body
    )
  ] });
};
var us = ({
  className: e,
  children: t,
  tag: s = "div",
  ...r
}) => {
  const n = clsx_m_default("popover-body", e);
  return (0, import_jsx_runtime.jsx)(s, { className: n, ...r, children: t });
};
var ms = ({
  className: e,
  children: t,
  tag: s = "h3",
  ...r
}) => {
  const n = clsx_m_default("popover-header", e);
  return (0, import_jsx_runtime.jsx)(s, { className: n, ...r, children: t });
};
var fs = ({
  animationDirection: e,
  appendToBody: t,
  backdrop: s = true,
  children: r,
  className: n,
  closeOnEsc: a = true,
  setOpen: c,
  leaveHiddenModal: o = true,
  modalRef: i,
  onClose: u,
  onClosePrevented: d,
  onOpen: p,
  open: m,
  staticBackdrop: g,
  nonInvasive: h = false,
  tag: v = "div",
  ...b
}) => {
  const [T, R] = (0, import_react.useState)(m), [N, k] = (0, import_react.useState)(m), [D, S] = (0, import_react.useState)(m), [E, F] = (0, import_react.useState)(false), [W, w] = (0, import_react.useState)(0), [L, I] = (0, import_react.useState)([]), O = (0, import_react.useRef)(null), $ = i || O, C = clsx_m_default(
    "modal",
    E && "modal-static",
    e,
    "fade",
    N && "show",
    T && h && "modal-non-invasive-show",
    n
  ), H = clsx_m_default("modal-backdrop", "fade", T && "show"), P = (0, import_react.useCallback)(() => {
    k((Y) => (Y && (u == null || u()), false)), setTimeout(() => {
      R(false), c == null || c(false);
    }, 150), setTimeout(() => {
      S(false);
    }, 350);
  }, [u, c]), X = (0, import_react.useCallback)(
    (Y) => {
      h || N && Y.target === $.current && (g ? (F(true), d == null || d(), setTimeout(() => {
        F(false);
      }, 300)) : P());
    },
    [N, $, g, P, d, h]
  ), G = (0, import_react.useCallback)(
    (Y) => {
      N && Y.key === "Tab" && (Y.preventDefault(), w(W + 1)), a && N && Y.key === "Escape" && (g ? (F(true), d == null || d(), setTimeout(() => {
        F(false);
      }, 300)) : P());
    },
    [N, a, W, g, P, d]
  );
  (0, import_react.useEffect)(() => {
    var Z;
    const Y = (Z = $.current) == null ? void 0 : Z.querySelectorAll(
      "button, a, input, select, textarea, [tabindex]"
    ), Q = Array.from(Y).filter((M) => M.tabIndex !== -1).sort((M, A) => M.tabIndex === A.tabIndex ? 0 : A.tabIndex === null ? -1 : M.tabIndex === null ? 1 : M.tabIndex - A.tabIndex);
    I(Q), w(Q.length - 1);
  }, [$]), (0, import_react.useEffect)(() => {
    L && L.length > 0 && (W === L.length ? (L[0].focus(), w(0)) : L[W].focus());
  }, [W, L]), (0, import_react.useEffect)(() => {
    const Y = () => {
      const Z = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - Z);
    }, Q = window.innerWidth > document.documentElement.clientWidth && window.innerWidth >= 576;
    if (D && Q && !h) {
      const Z = Y();
      document.body.classList.add("modal-open"), document.body.style.overflow = "hidden", document.body.style.paddingRight = `${Z}px`;
    } else
      document.body.classList.remove("modal-open"), document.body.style.overflow = "", document.body.style.paddingRight = "";
    return () => {
      document.body.classList.remove("modal-open"), document.body.style.overflow = "", document.body.style.paddingRight = "";
    };
  }, [D, h]), (0, import_react.useEffect)(() => {
    m ? (p == null || p(), S(true), setTimeout(() => {
      R(true);
    }, 0), setTimeout(() => {
      k(true), c == null || c(true);
    }, 150)) : P();
  }, [m, P, c, p]), (0, import_react.useEffect)(() => {
    const Y = (Q) => {
      Q.target.closest(".modal-dialog") || window.addEventListener("mouseup", X, { once: true });
    };
    return window.addEventListener("mousedown", Y), window.addEventListener("keydown", G), () => {
      window.removeEventListener("mousedown", Y), window.removeEventListener("keydown", G);
    };
  }, [G, X]);
  const _ = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (o || m || D) && import_react_dom.default.createPortal(
    (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      (0, import_jsx_runtime.jsx)(
        v,
        {
          className: C,
          ref: $,
          style: { display: D || m ? "block" : "none", pointerEvents: h ? "none" : "initial" },
          ...b,
          children: r
        }
      ),
      import_react_dom.default.createPortal(
        s && D && !h && (0, import_jsx_runtime.jsx)("div", { className: H }),
        document.body
      )
    ] }),
    document.body
  ) }), J = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (o || m || D) && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(
      v,
      {
        className: C,
        ref: $,
        style: { display: D || m ? "block" : "none", pointerEvents: h ? "none" : "initial" },
        ...b,
        children: r
      }
    ),
    import_react_dom.default.createPortal(
      s && D && !h && (0, import_jsx_runtime.jsx)("div", { onClick: P, className: H }),
      document.body
    )
  ] }) });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t ? _ : J });
};
var yt = import_react.default.forwardRef(
  ({ className: e, centered: t, children: s, size: r, scrollable: n, tag: a = "div", ...c }, o) => {
    const i = clsx_m_default(
      "modal-dialog",
      n && "modal-dialog-scrollable",
      t && "modal-dialog-centered",
      r && `modal-${r}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(a, { className: i, ...c, ref: o, children: s });
  }
);
yt.displayName = "MDBModalDialog";
var Nt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...r }, n) => {
    const a = clsx_m_default("modal-content", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
Nt.displayName = "MDBModalContent";
var wt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...r }, n) => {
    const a = clsx_m_default("modal-header", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
wt.displayName = "MDBModalHeader";
var Bt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "h5", ...r }, n) => {
    const a = clsx_m_default("modal-title", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
Bt.displayName = "MDBModalTitle";
var Mt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...r }, n) => {
    const a = clsx_m_default("modal-body", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
Mt.displayName = "MDBModalBody";
var Dt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...r }, n) => {
    const a = clsx_m_default("modal-footer", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...r, ref: n, children: t });
  }
);
Dt.displayName = "MDBModalFooter";
var me = import_react.default.createContext({
  activeElement: null,
  setTargets: null
});
var ps = ({
  container: e = typeof window !== void 0 ? window : null,
  className: t,
  children: s,
  offset: r = 10,
  ...n
}) => {
  const a = clsx_m_default("sticky-top", t), [c, o] = (0, import_react.useState)(null), [i, u] = (0, import_react.useState)([]), d = e instanceof Window, p = (0, import_react.useCallback)(() => {
    var T, R, N;
    if (!i.length)
      return;
    const m = d ? window.pageYOffset : (T = e == null ? void 0 : e.current) == null ? void 0 : T.scrollTop, g = Number(r), h = (R = i[i.length - 1]) == null ? void 0 : R.current, v = (N = i[0]) == null ? void 0 : N.current;
    m + g < v.offsetTop && o(null), i.forEach((k, D) => {
      var W;
      const S = (W = i[D + 1]) == null ? void 0 : W.current, E = k.current;
      if (m > E.offsetTop - g && m < (S == null ? void 0 : S.offsetTop) - g) {
        o(E);
        return;
      }
    }), m > h.offsetTop - g && o(h);
  }, [r, i, d, e]);
  return (0, import_react.useEffect)(() => {
    const m = d ? e : e == null ? void 0 : e.current;
    return p(), m == null || m.addEventListener("scroll", p), () => {
      m == null || m.removeEventListener("scroll", p);
    };
  }, [p, e, d]), (0, import_jsx_runtime.jsx)("div", { className: a, ...n, children: (0, import_jsx_runtime.jsx)("ul", { className: "nav flex-column nav-pills menu-sidebar", children: (0, import_jsx_runtime.jsx)(me.Provider, { value: { activeElement: c, setTargets: u }, children: s }) }) });
};
var gs = ({
  className: e,
  collapsible: t,
  targetRef: s,
  children: r,
  subsections: n,
  onClick: a,
  onActivate: c,
  ...o
}) => {
  var v;
  const { activeElement: i, setTargets: u } = (0, import_react.useContext)(me), d = () => n == null ? void 0 : n.some((b) => b.current.id === (i == null ? void 0 : i.id)), p = (i == null ? void 0 : i.id) === ((v = s.current) == null ? void 0 : v.id), m = p || d();
  p && (c == null || c(i == null ? void 0 : i.id));
  const g = clsx_m_default("nav-link", t && "collapsible-scrollspy", m && "active", e), h = (b) => {
    const T = s == null ? void 0 : s.current;
    T == null || T.scrollIntoView({ behavior: "smooth" }), a == null || a(b);
  };
  return (0, import_react.useEffect)(() => {
    u((b) => [...b, s]);
  }, [u, s]), (0, import_jsx_runtime.jsx)("li", { className: "nav-item", style: { cursor: "pointer" }, children: (0, import_jsx_runtime.jsx)("a", { className: g, onClick: h, ...o, children: r }) });
};
var hs = ({
  collapsible: e,
  className: t,
  children: s,
  style: r,
  ...n
}) => {
  const [a, c] = (0, import_react.useState)("0px"), { activeElement: o } = (0, import_react.useContext)(me), i = clsx_m_default("nav flex-column", t), u = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const p = () => e == null ? void 0 : e.some((g) => g.current.id === (o == null ? void 0 : o.id)), m = u.current;
    p() ? c(`${m == null ? void 0 : m.scrollHeight}px`) : c("0px");
  }, [o, e]);
  const d = {
    overflow: "hidden",
    height: a,
    transition: "height .5s ease",
    flexWrap: "nowrap",
    ...r
  };
  return (0, import_jsx_runtime.jsx)("ul", { className: i, ref: u, style: e ? d : r, ...n, children: s });
};
var bs = ({ ...e }) => (0, import_jsx_runtime.jsx)(ue, { type: "checkbox", toggleSwitch: true, ...e });
var Tt = ({ value: e, min: t = "0", max: s = "100", showThumb: r }) => {
  const n = Number(e), [a, c] = (0, import_react.useState)(
    (n || 0 - Number(t)) * 100 / (Number(s) - Number(t))
  ), o = clsx_m_default("thumb", r && "thumb-active");
  return (0, import_react.useEffect)(() => {
    c((Number(e) - Number(t)) * 100 / (Number(s) - Number(t)));
  }, [e, s, t]), (0, import_jsx_runtime.jsx)("span", { className: o, style: { left: `calc(${a}% + (${8 - a * 0.15}px))` }, children: (0, import_jsx_runtime.jsx)("span", { className: "thumb-value", children: e }) });
};
var vs = ({
  className: e,
  defaultValue: t = 0,
  disableTooltip: s,
  labelId: r,
  max: n,
  min: a,
  onMouseDown: c,
  onMouseUp: o,
  onTouchStart: i,
  onTouchEnd: u,
  onChange: d,
  labelClass: p,
  value: m,
  label: g,
  id: h,
  inputRef: v,
  ...b
}) => {
  const [T, R] = (0, import_react.useState)(t), [N, k] = (0, import_react.useState)(false), D = clsx_m_default("form-range", e), S = clsx_m_default("form-label", p);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    g && (0, import_jsx_runtime.jsx)("label", { className: S, id: r, htmlFor: h, children: g }),
    (0, import_jsx_runtime.jsxs)("div", { className: "range", children: [
      (0, import_jsx_runtime.jsx)(
        "input",
        {
          type: "range",
          onMouseDown: (I) => {
            k(true), c && c(I);
          },
          onMouseUp: (I) => {
            k(false), o && o(I);
          },
          onTouchStart: (I) => {
            k(true), i && i(I);
          },
          onTouchEnd: (I) => {
            k(false), u && u(I);
          },
          onChange: (I) => {
            R(I.target.value), d && d(I);
          },
          className: D,
          value: m || T,
          id: h,
          min: a,
          max: n,
          ref: v,
          ...b
        }
      ),
      !s && (0, import_jsx_runtime.jsx)(Tt, { value: m || T, showThumb: N, min: a, max: n })
    ] })
  ] });
};
var ys = ({ className: e, labelClass: t, labelStyle: s, inputRef: r, size: n, label: a, id: c, ...o }) => {
  const i = clsx_m_default("form-control", `form-control-${n}`, e), u = clsx_m_default("form-label", t);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    a && (0, import_jsx_runtime.jsx)("label", { className: u, style: s, htmlFor: c, children: a }),
    (0, import_jsx_runtime.jsx)("input", { className: i, type: "file", id: c, ref: r, ...o })
  ] });
};
var Rt = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    noBorder: s,
    textBefore: r,
    textAfter: n,
    noWrap: a,
    tag: c = "div",
    textTag: o = "span",
    textClass: i,
    size: u,
    textProps: d,
    ...p
  }, m) => {
    const g = clsx_m_default("input-group", a && "flex-nowrap", u && `input-group-${u}`, e), h = clsx_m_default("input-group-text", s && "border-0", i), v = (b) => (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: b && Array.isArray(b) ? b.map((T, R) => (0, import_jsx_runtime.jsx)(o, { className: h, ...d, children: T }, R)) : (0, import_jsx_runtime.jsx)(o, { className: h, ...d, children: b }) });
    return (0, import_jsx_runtime.jsxs)(c, { className: g, ref: m, ...p, children: [
      r && v(r),
      t,
      n && v(n)
    ] });
  }
);
Rt.displayName = "MDBInputGroup";
var $t = import_react.default.forwardRef(
  ({ className: e, children: t, isValidated: s = false, onReset: r, onSubmit: n, noValidate: a = true, ...c }, o) => {
    const [i, u] = (0, import_react.useState)(s), d = clsx_m_default("needs-validation", i && "was-validated", e), p = (g) => {
      g.preventDefault(), u(true), n && n(g);
    }, m = (g) => {
      g.preventDefault(), u(false), r && r(g);
    };
    return (0, import_react.useEffect)(() => {
      u(s);
    }, [s]), (0, import_jsx_runtime.jsx)(
      "form",
      {
        className: d,
        onSubmit: p,
        onReset: m,
        ref: o,
        noValidate: a,
        ...c,
        children: t
      }
    );
  }
);
$t.displayName = "MDBValidation";
var Et = import_react.default.forwardRef(
  ({ className: e, fill: t, pills: s, justify: r, children: n, ...a }, c) => {
    const o = clsx_m_default(
      "nav",
      s ? "nav-pills" : "nav-tabs",
      t && "nav-fill",
      r && "nav-justified",
      e
    );
    return (0, import_jsx_runtime.jsx)("ul", { className: o, ref: c, ...a, children: n });
  }
);
Et.displayName = "MDBTabs";
var It = import_react.default.forwardRef(
  ({ className: e, children: t, style: s, tag: r = "li", ...n }, a) => {
    const c = clsx_m_default("nav-item", e);
    return (0, import_jsx_runtime.jsx)(r, { className: c, style: { cursor: "pointer", ...s }, role: "presentation", ref: a, ...n, children: t });
  }
);
It.displayName = "MDBTabsItem";
var Lt = import_react.default.forwardRef(
  ({ className: e, color: t, active: s, onOpen: r, onClose: n, children: a, ...c }, o) => {
    const i = clsx_m_default("nav-link", s && "active", t && `bg-${t}`, e);
    return (0, import_react.useEffect)(() => {
      s ? r == null || r() : n == null || n();
    }, [s]), (0, import_jsx_runtime.jsx)("a", { className: i, ref: o, ...c, children: a });
  }
);
Lt.displayName = "MDBTabsLink";
var xt = import_react.default.forwardRef(
  ({ className: e, tag: t = "div", children: s, ...r }, n) => {
    const a = clsx_m_default("tab-content", e);
    return (0, import_jsx_runtime.jsx)(t, { className: a, ref: n, ...r, children: s });
  }
);
xt.displayName = "MDBTabsContent";
var kt = import_react.default.forwardRef(
  ({ className: e, tag: t = "div", open: s, children: r, ...n }, a) => {
    const [c, o] = (0, import_react.useState)(false), i = clsx_m_default("tab-pane", "fade", c && "show", s && "active", e);
    return (0, import_react.useEffect)(() => {
      let u;
      return s ? u = setTimeout(() => {
        o(true);
      }, 100) : o(false), () => {
        clearTimeout(u);
      };
    }, [s]), (0, import_jsx_runtime.jsx)(t, { className: i, role: "tabpanel", ref: a, ...n, children: r });
  }
);
kt.displayName = "MDBTabsPane";
var fe = (0, import_react.createContext)({
  active: 0
});
var St = ({ imagesCount: e, to: t }) => {
  const { active: s } = (0, import_react.useContext)(fe);
  return (0, import_jsx_runtime.jsx)("ol", { className: "carousel-indicators", children: Array.from(Array(e)).map((r, n) => (0, import_jsx_runtime.jsx)("li", { "data-mdb-target": n, className: clsx_m_default(s === n && "active"), onClick: () => t(n) }, n)) });
};
var Ct = ({ move: e }) => (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
  (0, import_jsx_runtime.jsxs)("a", { role: "button", className: "carousel-control-prev", onClick: () => e("prev"), children: [
    (0, import_jsx_runtime.jsx)("span", { className: "carousel-control-prev-icon" }),
    (0, import_jsx_runtime.jsx)("span", { className: "visually-hidden", children: "Previous" })
  ] }),
  (0, import_jsx_runtime.jsxs)("a", { role: "button", className: "carousel-control-next", onClick: () => e("next"), children: [
    (0, import_jsx_runtime.jsx)("span", { className: "carousel-control-next-icon" }),
    (0, import_jsx_runtime.jsx)("span", { className: "visually-hidden", children: "Next" })
  ] })
] });
var At = (e) => {
  const t = getComputedStyle(e), s = getComputedStyle(e == null ? void 0 : e.parentNode);
  return t.display !== "none" && s.display !== "none" && t.visibility !== "hidden";
};
var Pt = (e) => Array.from(e == null ? void 0 : e.querySelectorAll(".carousel-item"));
var Ft = (e) => e.offsetHeight;
var Ot = (e, t, s = true) => {
  if (!s) {
    he(e);
    return;
  }
  const r = Ht(t);
  t.addEventListener("transitionend", () => he(e), { once: true }), Xt(t, r);
};
var he = (e) => {
  typeof e == "function" && e();
};
var Ht = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: s } = window.getComputedStyle(e);
  const r = Number.parseFloat(t), n = Number.parseFloat(s);
  return !r && !n ? 0 : (t = t.split(",")[0], s = s.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(s)) * 1e3);
};
var Wt = (e) => {
  e.dispatchEvent(new Event("transitionend"));
};
var Xt = (e, t) => {
  let s = false;
  const n = t + 5;
  function a() {
    s = true, e.removeEventListener("transitionend", a);
  }
  e.addEventListener("transitionend", a), setTimeout(() => {
    s || Wt(e);
  }, n);
};
var Ns = ({
  fade: e = false,
  className: t,
  carouselInnerClassName: s,
  dark: r,
  children: n,
  interval: a = 5e3,
  keyboard: c = false,
  touch: o = true,
  showControls: i,
  showIndicators: u,
  onSlide: d,
  ...p
}) => {
  const m = (0, import_react.useRef)([]), g = (0, import_react.useRef)(null), h = (0, import_react.useRef)(0), v = (0, import_react.useRef)(false), [b, T] = (0, import_react.useState)(0), [R, N] = (0, import_react.useState)(0), [k, D] = (0, import_react.useState)({ initialX: 0, initialY: 0 }), [S, E] = (0, import_react.useState)(false), F = (0, import_react.useRef)(null), W = clsx_m_default("carousel", "slide", e && "carousel-fade", r && "carousel-dark", t), w = clsx_m_default("carousel-inner", s), L = (0, import_react.useCallback)(
    (M, A) => {
      if (A !== void 0)
        h.current = A, T(A);
      else {
        const K = b === R - 1 ? 0 : b + 1, ee = b === 0 ? R - 1 : b - 1;
        h.current = M === "next" ? K : ee, T(M === "next" ? K : ee);
      }
    },
    [b, R]
  ), I = (0, import_react.useCallback)(() => {
    g.current && (clearInterval(g.current), g.current = null);
  }, []), O = (0, import_react.useCallback)(
    (M, A, K) => {
      var pe;
      if (!m.current || m.current.length < 2)
        return;
      E(true);
      const z = m.current[b], te = Boolean(g.current), oe = M === "next", ce = oe ? "carousel-item-start" : "carousel-item-end", ie = oe ? "carousel-item-next" : "carousel-item-prev";
      if (A.classList.contains("active")) {
        v.current = false;
        return;
      }
      L(M, K), !(!z || !A) && (v.current = true, te && I(), (pe = F.current) != null && pe.classList.contains("slide") ? (A.classList.add(ie), Ft(A), z.classList.add(ce), A.classList.add(ce), Ot(() => {
        E(false), A.classList.remove(ce, ie), A.classList.add("active"), z.classList.remove("active", ie, ce), v.current = false;
      }, z, true)) : (z.classList.remove("active"), A.classList.add("active"), v.current = false));
    },
    [F, b, L, I]
  ), $ = (M) => {
    v.current || (v.current = true, setTimeout(() => {
      v.current = false;
    }, M));
  }, C = (0, import_react.useCallback)(
    (M) => {
      const A = M === "prev", z = (h.current + (A ? -1 : 1)) % R, te = m.current;
      return z === -1 ? te[R - 1] : te[z];
    },
    [R]
  ), H = (M) => {
    const A = h.current, K = M > A ? "next" : "prev", ee = m.current;
    return { direction: K, nextElement: ee[M] };
  }, P = (M) => {
    if (v.current || ($(700), M > R - 1 || M < 0))
      return;
    const { direction: A, nextElement: K } = H(M);
    O(A, K, M);
  }, X = (0, import_react.useCallback)(
    (M) => {
      if (v.current)
        return;
      $(600);
      const A = C(M);
      O(M, A);
    },
    [C, O]
  ), G = (0, import_react.useCallback)(() => {
    const { visibilityState: M, hidden: A } = document;
    if (M)
      return A || !At(F.current) ? void 0 : X("next");
    X("next");
  }, [F, X]), _ = (0, import_react.useCallback)(() => {
    var A, K;
    const M = (K = (A = n == null ? void 0 : n[b]) == null ? void 0 : A.props) == null ? void 0 : K.interval;
    g.current && (clearInterval(g.current), g.current = null), g.current = setInterval(G, M || a);
  }, [G, a, n, b]), J = (M) => {
    o && D({ initialX: M.touches[0].clientX, initialY: M.touches[0].clientY });
  }, Y = (M) => {
    v.current = true;
    const { initialX: A, initialY: K } = k;
    if (!A || !K)
      return;
    const ee = M.touches[0].clientX, z = M.touches[0].clientY, te = A - ee, oe = K - z;
    Math.abs(te) > Math.abs(oe) && (te > 0 ? X("prev") : X("next")), D({ initialX: 0, initialY: 0 });
  }, Q = () => {
    v.current = false;
  }, Z = (0, import_react.useCallback)(
    (M) => {
      switch (M.key) {
        case "ArrowLeft":
          M.preventDefault(), X("prev");
          break;
        case "ArrowRight":
          M.preventDefault(), X("next");
          break;
      }
    },
    [X]
  );
  return (0, import_react.useEffect)(() => {
    if (c)
      return window.addEventListener("keydown", Z), () => {
        window.removeEventListener("keydown", Z);
      };
  }, [Z, c]), (0, import_react.useEffect)(() => {
    const M = F.current, A = Pt(M);
    m.current = A, N(A.length);
  }, [F]), (0, import_react.useEffect)(() => {
    S && (d == null || d());
  }, [S, d]), (0, import_react.useEffect)(() => (_(), () => {
    I();
  }), [_, I]), (0, import_jsx_runtime.jsx)(
    "div",
    {
      onTouchStart: J,
      onTouchMove: Y,
      onTouchEnd: Q,
      onMouseEnter: I,
      onMouseLeave: _,
      className: W,
      ref: F,
      ...p,
      children: (0, import_jsx_runtime.jsx)("div", { className: w, children: (0, import_jsx_runtime.jsxs)(fe.Provider, { value: { active: b }, children: [
        u && (0, import_jsx_runtime.jsx)(St, { to: P, imagesCount: R }),
        n,
        i && (0, import_jsx_runtime.jsx)(Ct, { move: X })
      ] }) })
    }
  );
};
var ws = ({ className: e, children: t, itemId: s, ...r }) => {
  const { active: n } = (0, import_react.useContext)(fe), a = (0, import_react.useRef)(true), c = (0, import_react.useRef)(null), o = clsx_m_default("carousel-item", e);
  return (0, import_react.useEffect)(() => {
    if (a.current && n === s - 1) {
      const i = c.current;
      i == null || i.classList.add("active");
    }
    a.current = false;
  }, [n, s]), (0, import_jsx_runtime.jsx)("div", { className: o, ref: c, ...r, children: t });
};
var Bs = ({ className: e, children: t, ...s }) => {
  const r = clsx_m_default("carousel-caption d-none d-md-block", e);
  return (0, import_jsx_runtime.jsx)("div", { className: r, ...s, children: t });
};
var Be = import_react.default.createContext({
  activeItem: 0,
  setActiveItem: null,
  alwaysOpen: false,
  initialActive: 0
});
var _t = import_react.default.forwardRef(
  ({
    alwaysOpen: e,
    borderless: t,
    className: s,
    flush: r,
    active: n,
    initialActive: a = 0,
    tag: c = "div",
    children: o,
    onChange: i,
    ...u
  }, d) => {
    const p = (0, import_react.useMemo)(() => typeof n < "u", [n]), m = clsx_m_default("accordion", r && "accordion-flush", t && "accordion-borderless", s), [g, h] = (0, import_react.useState)(a);
    return (0, import_jsx_runtime.jsx)(c, { className: m, ref: d, ...u, children: (0, import_jsx_runtime.jsx)(
      Be.Provider,
      {
        value: { activeItem: p ? n : g, setActiveItem: h, alwaysOpen: e, initialActive: a, onChange: i },
        children: o
      }
    ) });
  }
);
_t.displayName = "MDBAccordion";
var jt = import_react.default.forwardRef(
  ({
    className: e,
    bodyClassName: t,
    bodyStyle: s,
    headerClassName: r,
    collapseId: n,
    headerTitle: a,
    headerStyle: c,
    btnClassName: o,
    tag: i = "div",
    children: u,
    ...d
  }, p) => {
    const { activeItem: m, setActiveItem: g, alwaysOpen: h, onChange: v } = (0, import_react.useContext)(Be), b = (0, import_react.useMemo)(() => Array.isArray(m) ? m.includes(n) : m === n, [m, n]), T = clsx_m_default("accordion-item", e), R = clsx_m_default("accordion-header", r), N = clsx_m_default("accordion-body", t), k = clsx_m_default("accordion-button", !b && "collapsed", o), D = (0, import_react.useCallback)(
      (S) => {
        let E = S;
        Array.isArray(m) ? m.includes(S) ? E = m.filter((W) => W !== S) : E = h ? [...m, S] : [S] : (E = m === S ? 0 : S, h && (E = [E])), v == null || v(E), g(E);
      },
      [v, m, g, h]
    );
    return (0, import_jsx_runtime.jsxs)(i, { className: T, ref: p, ...d, children: [
      (0, import_jsx_runtime.jsx)("h2", { className: R, style: c, children: (0, import_jsx_runtime.jsx)("button", { onClick: () => D(n), className: k, type: "button", children: a }) }),
      (0, import_jsx_runtime.jsx)(dt, { id: n.toString(), open: b, children: (0, import_jsx_runtime.jsx)("div", { className: N, style: s, children: u }) })
    ] });
  }
);
jt.displayName = "MDBAccordionItem";
var Ms = ({
  className: e,
  size: t,
  contrast: s,
  value: r,
  defaultValue: n,
  id: a,
  labelClass: c,
  wrapperClass: o,
  wrapperStyle: i,
  wrapperTag: u = "div",
  label: d,
  onChange: p,
  children: m,
  labelRef: g,
  labelStyle: h,
  inputRef: v,
  onBlur: b,
  readonly: T = false,
  ...R
}) => {
  var G;
  const N = (0, import_react.useRef)(null), k = (0, import_react.useRef)(null), D = g || N, S = v || k, [E, F] = (0, import_react.useState)(r || n), [W, w] = (0, import_react.useState)(0), [L, I] = (0, import_react.useState)(
    r !== void 0 && r.length > 0 || n !== void 0 && n.length > 0
  ), O = clsx_m_default("form-outline", s && "form-white", o), $ = clsx_m_default("form-control", L && "active", t && `form-control-${t}`, e), C = clsx_m_default("form-label", c);
  (0, import_react.useEffect)(() => {
    var _;
    D.current && ((_ = D.current) == null ? void 0 : _.clientWidth) !== 0 && w(D.current.clientWidth * 0.8 + 8);
  }, [D, (G = D.current) == null ? void 0 : G.clientWidth]);
  const H = () => {
    D.current && w(D.current.clientWidth * 0.8 + 8);
  };
  (0, import_react.useEffect)(() => {
    r !== void 0 && (r.length > 0 ? I(true) : I(false));
  }, [r]), (0, import_react.useEffect)(() => {
    n !== void 0 && (n.length > 0 ? I(true) : I(false));
  }, [n]);
  const P = (_) => {
    F(_.currentTarget.value), p && p(_);
  }, X = (0, import_react.useCallback)(
    (_) => {
      E !== void 0 && E.length > 0 || r !== void 0 && r.length > 0 ? I(true) : I(false), b && b(_);
    },
    [E, r, b]
  );
  return (0, import_jsx_runtime.jsxs)(u, { className: O, style: { ...i }, children: [
    (0, import_jsx_runtime.jsx)(
      "textarea",
      {
        readOnly: T,
        className: $,
        onBlur: X,
        onChange: P,
        onFocus: H,
        defaultValue: n,
        value: r,
        id: a,
        ref: S,
        ...R
      }
    ),
    d && (0, import_jsx_runtime.jsx)("label", { className: C, style: h, htmlFor: a, ref: D, children: d }),
    (0, import_jsx_runtime.jsxs)("div", { className: "form-notch", children: [
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-leading" }),
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-middle", style: { width: W } }),
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-trailing" })
    ] }),
    m
  ] });
};
var Ds = ({
  children: e,
  invalid: t,
  feedback: s = "Looks good!",
  tooltip: r,
  tag: n = "div",
  ...a
}) => {
  const [c, o] = (0, import_react.useState)(null), i = (0, import_react.useRef)(null), u = clsx_m_default(
    t ? `invalid-${r ? "tooltip" : "feedback"}` : `valid-${r ? "tooltip" : "feedback"}`
  );
  return (0, import_react.useEffect)(() => {
    var p, m;
    const d = (m = (p = i.current) == null ? void 0 : p.querySelector("input, textarea")) == null ? void 0 : m.parentElement;
    d && o(d);
  }, []), (0, import_jsx_runtime.jsxs)(n, { ref: i, ...a, children: [
    c && (0, import_react_dom.createPortal)((0, import_jsx_runtime.jsx)("div", { className: u, children: s }), c),
    e
  ] });
};
export {
  _t as MDBAccordion,
  jt as MDBAccordionItem,
  Ie as MDBBadge,
  qe as MDBBreadcrumb,
  Ke as MDBBreadcrumbItem,
  le as MDBBtn,
  ke as MDBBtnGroup,
  Ce as MDBCard,
  He as MDBCardBody,
  We as MDBCardFooter,
  _e as MDBCardGroup,
  Ae as MDBCardHeader,
  Qt as MDBCardImage,
  Zt as MDBCardLink,
  Xe as MDBCardOverlay,
  Pe as MDBCardSubTitle,
  Oe as MDBCardText,
  Fe as MDBCardTitle,
  Ns as MDBCarousel,
  Bs as MDBCarouselCaption,
  ws as MDBCarouselItem,
  ns as MDBCheckbox,
  Ee as MDBCol,
  dt as MDBCollapse,
  $e as MDBContainer,
  os as MDBDropdown,
  cs as MDBDropdownItem,
  ls as MDBDropdownMenu,
  is as MDBDropdownToggle,
  ys as MDBFile,
  st as MDBFooter,
  es as MDBIcon,
  it as MDBInput,
  Rt as MDBInputGroup,
  je as MDBListGroup,
  Ge as MDBListGroupItem,
  fs as MDBModal,
  Mt as MDBModalBody,
  Nt as MDBModalContent,
  yt as MDBModalDialog,
  Dt as MDBModalFooter,
  wt as MDBModalHeader,
  Bt as MDBModalTitle,
  Je as MDBNavbar,
  Ze as MDBNavbarBrand,
  ze as MDBNavbarItem,
  Qe as MDBNavbarLink,
  et as MDBNavbarNav,
  tt as MDBNavbarToggler,
  rt as MDBPagination,
  at as MDBPaginationItem,
  nt as MDBPaginationLink,
  ds as MDBPopover,
  us as MDBPopoverBody,
  ms as MDBPopoverHeader,
  ot as MDBProgress,
  Ne as MDBProgressBar,
  as as MDBRadio,
  vs as MDBRange,
  ye as MDBRipple,
  Ye as MDBRow,
  ps as MDBScrollspy,
  gs as MDBScrollspyLink,
  hs as MDBScrollspySubList,
  Se as MDBSpinner,
  bs as MDBSwitch,
  ts as MDBTable,
  rs as MDBTableBody,
  ss as MDBTableHead,
  Et as MDBTabs,
  xt as MDBTabsContent,
  It as MDBTabsItem,
  Lt as MDBTabsLink,
  kt as MDBTabsPane,
  Ms as MDBTextArea,
  zt as MDBTooltip,
  Ve as MDBTypography,
  $t as MDBValidation,
  Ds as MDBValidationItem
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=mdb-react-ui-kit.js.map
