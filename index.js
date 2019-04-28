
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const google = require("./googlesheetapi")

const port = process.env.PORT || 4000;

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/', (req, res) => {
    google.writeAnswers(req.body);
    return res.send('submitted');
})

app.get('/', (req, res) => {
    return res.send('sWelcome to the AppBpo Server!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));