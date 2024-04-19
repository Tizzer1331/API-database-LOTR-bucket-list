import mongoose from "mongoose"
import { Schema, model } from "mongoose"
const LocationSchema = new Schema({
    name: {type:String, unique:true, required:true},
    desc: String,
    danger: Number

})

const CharSchema = new Schema({
    name: {type:String, unique:true, required:true},
    LocationsVisited:[Number],
    LocationDesired: Number
})
const Location = model('Location', LocationSchema)
const Char = model ('Chars',CharSchema)
export {Location, Char}