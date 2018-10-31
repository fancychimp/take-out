const express = require('express')
const takeOut = express()
const sampleFood = require('./src/sample-food')

takeOut.get('/dishes', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*'
    })
    res.status(200).send({
      dishes: sampleFood
    })
});

const PORT = 3001

takeOut.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});