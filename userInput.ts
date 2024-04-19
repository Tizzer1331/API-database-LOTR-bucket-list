import mongoose from "mongoose";
import { Char,Location } from "./models/Schemas";

function inputLocation(){
const inputNewLocationName= prompt("Please enter the Name of the new Location")
const inputNewLocationDescript= prompt("Please enter the Description of the new Location")
const inputNewLocationDanger= prompt("Please enter the Danger of the new Location")
let newLocation= new Location({
    name:inputNewLocationName,
    desc:inputNewLocationDescript,
    danger:inputNewLocationDanger
})
return( newLocation)
}

function inputChar(){
    const inputNewCharName= prompt("Please enter the Name of the new Character")
    const inputNewLocationVisit= prompt("Please enter the Locations visited by " + inputNewCharName)
    const inputNewLocationDesired= prompt("Please enter the Dream location of " + inputNewCharName)
    let newChar= new Char({
        name:inputNewCharName,
        LocationsVisited:inputNewLocationVisit,
        LocationDesired:inputNewLocationDesired
    })
    return (newChar)
    }
export {inputLocation, inputChar}

