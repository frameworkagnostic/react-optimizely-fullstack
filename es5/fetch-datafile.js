'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = FetchDataFile;

var _fetchCacheStorage = require('./fetch-cache-storage');

var _fetchCacheStorage2 = _interopRequireDefault(_fetchCacheStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FetchDataFile(optimizely, id, url) {
    var cache = (0, _fetchCacheStorage2.default)(url.replace(/[^a-zA-Z0-9]/g, '_'));

    function parser(datafile) {
        var optimizelyClientInstance = optimizely.createInstance({ datafile: datafile });
        var variation = optimizelyClientInstance.activate('Exp_PS_Number_of_Cards', id);
        cache.set('datafile', datafile);
        return {
            datafile: datafile,
            variation: variation
        };
    }

    var datafile = cache.get('datafile');

    if (datafile) {
        return Promise.resolve(parser(datafile));
    }

    return fetch(url).then(function response(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(parser);
}