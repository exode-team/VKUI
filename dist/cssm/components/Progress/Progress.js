import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["value", "getRootRef", "children"];
import { createScopedElement } from "../../lib/jsxRuntime";
import "./Progress.css";
var PROGRESS_MIN_VALUE = 0;
var PROGRESS_MAX_VALUE = 100;

/**
 * @see https://vkcom.github.io/VKUI/#/Progress
 */
export var Progress = function Progress(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? 0 : _ref$value,
    getRootRef = _ref.getRootRef,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var progress = Math.max(PROGRESS_MIN_VALUE, Math.min(value, PROGRESS_MAX_VALUE));
  return createScopedElement("div", _extends({
    "aria-valuenow": value
  }, restProps, {
    role: "progressbar",
    "aria-valuemin": PROGRESS_MIN_VALUE,
    "aria-valuemax": PROGRESS_MAX_VALUE,
    ref: getRootRef,
    vkuiClass: "Progress"
  }), createScopedElement("div", {
    vkuiClass: "Progress__in",
    style: {
      width: "".concat(progress, "%")
    },
    "aria-hidden": true
  }, children));
};
//# sourceMappingURL=Progress.js.map