'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _async = require('async');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

var server = _app2.default;

var tasks = [function (done) {
    // mongoose.connect(URI,MONGODB_CONFIG)
    // .then(()=>done())
    // .catch(e=>done(e))
    done();
}, function (done) {
    server.listen(_config.PORT, function (e) {
        if (e) return done(e);
        console.log('Server on port ' + _config.PORT);
        return done();
    });
}],
    resultCallback = function resultCallback(e, response) {
    console.log(e, response);
};
(0, _async.waterfall)(tasks, resultCallback);
//# sourceMappingURL=server.js.map