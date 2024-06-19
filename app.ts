import { NextFunction } from "connect"
import { time } from "console"
import {Location, Char} from "./models/Schemas"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import {logger} from "./middleware/logger"

const app = express()
const port = 8080
app.use(logger)
app.use(cors)
app.use(express.json());
const DB_URL="mongodb://127.0.0.1:27017/bucket-list"

async function main(){
    await mongoose.connect(DB_URL)
    console.log("All Systems Nominal")
}


app.get('/', (req,res)=>{
    res.status(200)
    res.send('<h1>Hello World!</h1>')
})

app.get('/', (req,res)=>{
    res.status(404)
    res.send('Error Not Found')
})
app.listen(port, ()=>{
    console.log('I can hear you')
})

app.get('/chars',async (req,res)=>{
    const charsFound= await (Char.find())
    res.status(200)
    res.json(charsFound)
})

app.get('/chars/:name',async (req,res)=>{
    const CharFound= await Char.findOne({name: req.params.name})
    res.status(200)
    res.json(CharFound)
})

app.get('/locations/:name',async (req,res)=>{
    const locationFound= await Location.findOne({name: req.params.name})
    res.status(200)
    res.json(locationFound)
})

app.patch('/chars/:name',async (req,res)=>{
    await Char.findOneAndUpdate({name:req.params.name}, req.body)
    const char = await Char.findOne({name:req.params.name})  
    res.json(char)  
})

app.patch('/location/:name',async (req,res)=>{
    await Location.findOneAndUpdate({name:req.params.name}, req.body)
    const location = await Location.findOne({name:req.params.name})  
    res.json(location)  
    })

app.post ('/chars',async (req,res)=>{
    const newChar= new Char (req.body)
    await newChar.save()
    res.status(201)
    res.json (await Char.findOne({name:(newChar.name)}))
    })

app.post ('/locations',async (req,res)=>{
    const newLocation= new Location (req.body)
    await newLocation.save()
    res.status(201)
    res.json (await Location.findOne({name:(newLocation.name)}))
    })

app.delete ('/chars/:name', async (req,res)=>{
    await Char.findOneAndDelete({name:req.params.name})
    res.sendStatus(204)
})
app.delete ('/locations/:name', async (req,res)=>{
    await Location.findOneAndDelete({name:req.params.name})
    res.sendStatus(204)
})


main()

