'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fetchDatafile = require('./fetch-datafile');

var _fetchDatafile2 = _interopRequireDefault(_fetchDatafile);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentShellOptimizely = function (_React$Component) {
    _inherits(ComponentShellOptimizely, _React$Component);

    function ComponentShellOptimizely(props) {
        _classCallCheck(this, ComponentShellOptimizely);

        var _this = _possibleConstructorReturn(this, (ComponentShellOptimizely.__proto__ || Object.getPrototypeOf(ComponentShellOptimizely)).call(this, props));

        _this.component = null;
        _this.state = null;
        return _this;
    }

    _createClass(ComponentShellOptimizely, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                optimizely = _props.optimizely,
                uniqueId = _props.uniqueId,
                projectId = _props.projectId,
                experiment = _props.experiment,
                component = _props.component,
                properties = _objectWithoutProperties(_props, ['optimizely', 'uniqueId', 'projectId', 'experiment', 'component']);

            var url = 'https://cdn.optimizely.com/json/' + projectId + '.json';
            (0, _fetchDatafile2.default)(optimizely, uniqueId, url, experiment).then(function (response) {
                var props = properties || {};
                _this2.component = component;
                _this2.setState(function () {
                    props.variant = response.variation;
                    return props;
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.component || !this.state) {
                return null;
            }
            return _react2.default.createElement(this.component, this.state);
        }
    }]);

    return ComponentShellOptimizely;
}(_react2.default.Component);

ComponentShellOptimizely.propTypes = {
    optimizely: _propTypes2.default.object,
    uniqueId: _propTypes2.default.oneOf([_propTypes2.default.number, _propTypes2.default.string]),
    projectId: _propTypes2.default.oneOf([_propTypes2.default.number, _propTypes2.default.string]),
    experiment: _propTypes2.default.string,
    component: _propTypes2.default.object
};

exports.default = ComponentShellOptimizely;