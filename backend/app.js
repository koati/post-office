const express = require('express')
const cors = require('cors')
const mails = require('./data.json')
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())
app.use(express.static('public'));
app.use('/list', express.static('public'));
app.use('/new', express.static('public'));
app.use('/search', express.static('public'));


app.get('/api/mails', (req, res) => {
  console.log(mails);
  res.json(mails)
})
app.get('/api/mails/:reference', (req, res) => {
  console.log(mails);
  res.json(mails.find(mail => mail.reference === parseInt(req.params.reference)))
})
app.post('/api/mails', (req, res) => {
  const refnum = parseInt(req.body.reference)
  if (mails.some(mail => mail.reference === refnum)) {
    res.status(400)
    return res.send('Reference number is in use.')
  }
  req.body.reference = refnum
  mails.push(req.body)
  res.status(201) // Created
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Post office app listening at http://localhost:${port}`)
})