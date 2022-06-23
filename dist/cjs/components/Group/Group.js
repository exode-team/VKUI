"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _getClassName = require("../../helpers/getClassName");

var _classNames = require("../../lib/classNames");

var _usePlatform = require("../../hooks/usePlatform");

var _Separator = require("../Separator/Separator");

var _utils = require("../../lib/utils");

var _Caption = require("../Typography/Caption/Caption");

var _withAdaptivity = require("../../hoc/withAdaptivity");

var _ModalRootContext = require("../ModalRoot/ModalRootContext");

var _excluded = ["header", "description", "children", "separator", "getRootRef", "mode", "sizeX"];

var GroupComponent = function GroupComponent(props) {
  var header = props.header,
      description = props.description,
      children = props.children,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? "auto" : _props$separator,
      getRootRef = props.getRootRef,
      mode = props.mode,
      sizeX = props.sizeX,
      restProps = (0, _objectWithoutProperties2.default)(props, _excluded);

  var _React$useContext = React.useContext(_ModalRootContext.ModalRootContext),
      isInsideModal = _React$useContext.isInsideModal;

  var platform = (0, _usePlatform.usePlatform)();
  var computedMode = mode;

  if (!mode) {
    computedMode = sizeX === _withAdaptivity.SizeType.COMPACT || isInsideModal ? "plain" : "card";
  }

  return (0, _jsxRuntime.createScopedElement)("section", (0, _extends2.default)({}, restProps, {
    ref: getRootRef,
    vkuiClass: (0, _classNames.classNames)((0, _getClassName.getClassName)("Group", platform), "Group--sizeX-".concat(sizeX), "Group--".concat(computedMode))
  }), (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "Group__inner"
  }, header, children, (0, _utils.hasReactNode)(description) && (0, _jsxRuntime.createScopedElement)(_Caption.Caption, {
    vkuiClass: "Group__description"
  }, description)), separator !== "hide" && (0, _jsxRuntime.createScopedElement)(_Separator.Separator // eslint-disable-next-line vkui/no-object-expression-in-arguments
  , {
    vkuiClass: (0, _classNames.classNames)("Group__separator", {
      "Group__separator--force": separator === "show"
    }),
    expanded: computedMode === "card"
  }));
};
/**
 * @see https://vkcom.github.io/VKUI/#/Group
 */


var Group = (0, _withAdaptivity.withAdaptivity)(GroupComponent, {
  sizeX: true
});
exports.Group = Group;
Group.displayName = "Group";
//# sourceMappingURL=Group.js.map