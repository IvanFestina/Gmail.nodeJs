const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World');
})
app.get('/sendMessage', function (req, res) {
    res.send('Hello World');
})

app.listen(3010, function () {
    console.log('Example app listening on port 3000')
})