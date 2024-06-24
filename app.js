"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schemas_1 = require("./models/Schemas");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = require("./middleware/logger");
const app = (0, express_1.default)();
const port = 8080;
app.use(logger_1.logger);
app.use(cors_1.default);
app.use(express_1.default.json());
const DB_URL = "mongodb+srv://jtyrrell:2dHDcyBe575fQIFf@bucket-list.5vkdir4.mongodb.net/?retryWrites=true&w=majority&appName=bucket-list";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(DB_URL);
        console.log("All Systems Nominal");
    });
}
app.get('/', (req, res) => {
    res.status(200);
    res.send('<h1>Hello World!</h1>');
});
app.get('/', (req, res) => {
    res.status(404);
    res.send('Error Not Found');
});
app.listen(port, () => {
    console.log('I can hear you');
});
app.get('/chars', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const charsFound = yield (Schemas_1.Char.find());
    res.status(200);
    res.json(charsFound);
}));
app.get('/chars/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CharFound = yield Schemas_1.Char.findOne({ name: req.params.name });
    res.status(200);
    res.json(CharFound);
}));
app.get('/locations/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const locationFound = yield Schemas_1.Location.findOne({ name: req.params.name });
    res.status(200);
    res.json(locationFound);
}));
app.patch('/chars/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Schemas_1.Char.findOneAndUpdate({ name: req.params.name }, req.body);
    const char = yield Schemas_1.Char.findOne({ name: req.params.name });
    res.json(char);
}));
app.patch('/location/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Schemas_1.Location.findOneAndUpdate({ name: req.params.name }, req.body);
    const location = yield Schemas_1.Location.findOne({ name: req.params.name });
    res.json(location);
}));
app.post('/chars', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newChar = new Schemas_1.Char(req.body);
    yield newChar.save();
    res.status(201);
    res.json(yield Schemas_1.Char.findOne({ name: (newChar.name) }));
}));
app.post('/locations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newLocation = new Schemas_1.Location(req.body);
    yield newLocation.save();
    res.status(201);
    res.json(yield Schemas_1.Location.findOne({ name: (newLocation.name) }));
}));
app.delete('/chars/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("1");
    yield Schemas_1.Char.findOneAndDelete({ name: req.params.name });
    console.log("2");
    res.sendStatus(204);
    console.log("3");
}));
app.delete('/locations/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Schemas_1.Location.findOneAndDelete({ name: req.params.name });
    res.sendStatus(204);
}));
main();
