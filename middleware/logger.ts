import { Request, Response, NextFunction } from "express"
import { time } from "console"
import express from "express"
function logger(req:Request,res:Response,next:NextFunction){
    const urlStamp = "URL: "+ req.url
    const timeStamp = "Time: "+ (new Date().toISOString())
    const methodStamp = "Method: "+ req.method
    console.log (timeStamp, methodStamp, urlStamp)
    next()
}

export {logger}