const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

const iphones = JSON.parse(fs.readFileSync(`${__dirname}/data/phone-base.json`))

const getAllPhones = (req, res) => {
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