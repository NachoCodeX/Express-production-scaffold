'use strict';var _express=require('express');var _express2=_interopRequireDefault(_express);var _path=require('path');var _path2=_interopRequireDefault(_path);var _api=require('./routes/api');var _api2=_interopRequireDefault(_api);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var app=(0,_express2.default)();app.use(_express2.default.static(_path2.default.join(__dirname,'public')));app.use(_express2.default.urlencoded({extended:false}));app.use(_express2.default.json());app.get('/',function(req,res){return res.sendFile(_path2.default.join(__dirname,'public'))});app.use('/api',_api2.default);// app.get('*',(req,res)=>{
//     return res.sendFile(path.join(__dirname,'public'));
// });
module.exports=app;
//# sourceMappingURL=app.js.map