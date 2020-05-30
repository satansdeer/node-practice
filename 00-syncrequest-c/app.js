const fs = require('fs')
const {promisify} = require('util')
const express = require('express')
const app = express()
const port = 3000

const readFileAsync = promisify(fs.readFile); // (A)

const getAllPhones = async (req, res) => {
    const iphonesData = await readFileAsync(`${__dirname}/data/phone-base.json`)
    const iphones = JSON.parse(iphonesData)
    res.status(200).json({
        status: 'success',
        results: iphones.length,
        data: {
            iphones
        }
    })
}

app.route('/api/v1/iphones').get(getAllPhones)

app.listen(port, () =>{
    console.log(`Server start listen port`)
})