
const express = require('express')
const nodeMailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())

let transporter = nodeMailer.createTransport({
        tls: {
        rejectUnauthorized: false
        },
        service: "gmail",
        auth: {
            user: "ivanfestina@gmail.com",
            pass: "vawuzcnvmguzgbku"
        }
    })

app.get('/', function (req, res) {
    res.send('Hello World');
})
app.post('/sendMessage',  function (req, res) {
    transporter.sendMail({
    from: "Ivan Account",
    to: "ivanfestina@gmail.com",
    subject: "Hello form node.js",
    html: `<div>Hi from myself</div>`
    });
    res.send('something happened!');
});

app.listen(3010, function () {
    console.log('Example app listening on port 3010')
});

