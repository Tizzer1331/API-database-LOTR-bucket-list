"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Char = exports.Location = void 0;
const mongoose_1 = require("mongoose");
const LocationSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, required: true },
    desc: String,
    danger: Number
});
const CharSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, required: true },
    LocationsVisited: [Number],
    LocationDesired: Number
});
const Location = (0, mongoose_1.model)('Location', LocationSchema);
exports.Location = Location;
const Char = (0, mongoose_1.model)('Chars', CharSchema);
exports.Char = Char;
