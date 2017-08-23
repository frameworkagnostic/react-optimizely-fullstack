'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fetchCache;

var _basil = require('basil.js');

var _basil2 = _interopRequireDefault(_basil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchCache(namespace) {
    if (!namespace) {
        throw new Error('namespace is required');
    }
    return new _basil2.default({
        namespace: namespace,
        storages: ['local', 'session', 'memory'],
        expireDays: 31,
        keyDelimiter: '.'
    });
}