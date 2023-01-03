"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// init project
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use((0, cors_1.default)({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
// http://expressjs.com/en/starter/static-files.html
app.use(express_1.default.static('public'));
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (_req, res) {
    res.sendFile(path_1.default.join(__dirname, '../views/index.html'));
});
// your first API endpoint...
app.get('/api/hello', function (_req, res) {
    res.json({ greeting: 'hello API' });
});
// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
    var _a, _b;
    console.log('Your app is listening on port ' + ((_b = (_a = listener === null || listener === void 0 ? void 0 : listener.address()) === null || _a === void 0 ? void 0 : _a.port) !== null && _b !== void 0 ? _b : ''));
});
