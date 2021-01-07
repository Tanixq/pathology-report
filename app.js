const express = require('express')
const bodyParser = require('body-parser')
// const routes = require('./src/routes')
const { SERVER_PORT } = require('./config/config')

// Connect to mongodb
require('./db')

// Connect to redis
// require('./src/common/helpers/redisClient') // review later

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/ping', (req, res) => {
    res.json({
        msg: 'success'
    })
})
// app.use('/api', routes)
app.listen(SERVER_PORT, (err) => {
    if (err) {
        console.error(err) // eslint-disable-line no-console
        return
    }
    console.log(`App is running on port ${SERVER_PORT}`) // eslint-disable-line no-console
})

module.exports = app
