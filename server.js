const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 8000

// const url = 'mongodb+srv://djsmacker01:Fabulous01@cluster0.dnlsvzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
//  const url = 'mongodb+srv://djsmacker01:<password>@cluster0.dnlsvzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const url = 'mongodb+srv://djsmacker:Fabulous01@cluster0.wkc3lvf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
async function connect() {
    try {
        await mongoose.connect(url);
        console.log('Connected to mongodb server')
    }
    catch (error) { 
        console.error(error)
    }
}
connect()
app.listen(PORT, () => {
    console.log('listening on port 8000')
})