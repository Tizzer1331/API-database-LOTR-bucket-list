"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = logger;
function logger(req, res, next) {
    const urlStamp = "URL: " + req.url;
    const timeStamp = "Time: " + (new Date().toISOString());
    const methodStamp = "Method: " + req.method;
    console.log(timeStamp, methodStamp, urlStamp);
    next();
}
