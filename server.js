const express = require('express')
const mongoose = require('mongoose')
const app = express()

const PORT = 8000
app.listen(PORT, () => {
    console.log('listening on port 8000')
})