
const express = require('express')
const nodeMailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()


let smtp_login = process.env.SMPT_LOGIN
let smtp_password = process.env.SMPT_PASSWORD
let smtp_urlhost = process.env.SMPT_URLHOST
app.use(cors({origin: smtp_urlhost}))
//app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let transporter = nodeMailer.createTransport({
        tls: {
        rejectUnauthorized: false
        },
        service: "gmail",
        auth: {
            user: 'ivanfestina@gmail.com',
            pass: 'vawuzcnvmguzgbku'
        }
    })

app.get('/', function (req, res) {
    res.send('Hello World');
})
app.post('/sendMessages',  async function (req, res) {

console.log('we are in a post request')
    let {message, email, name} = req.body;
    console.log(req.body)

    let info = await transporter.sendMail({
    from: "From my portfolio page",
    to: "ivanfestina@gmail.com",
    subject: "From my portfolio page",
    html: `<div>Message from your portfolio page</div>
            <div>${message}</div>
            <div>${email}</div>
            <div>${name}</div>`
    });
    res.send('ok');
});

let port = process.env.PORT || 3010;

app.listen(port, function () {
    console.log('Example app listening on port 3010')
});

