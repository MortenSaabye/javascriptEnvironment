import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'
const port = 3000
/* eslint-disable no-console */
const app = express()
app.use(compression())
app.use(express.static('dist'))


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})



app.get('/users', (req, res) => {
  res.json([
    {
      "id": 1,
      "name": "Leanne Graham",
      "userName": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "userName": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "userName": "Samantha",
      "email": "Nathan@yesenia.net",
    }
  ])
})

app.listen(port, (err) => {
  if(err){
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})
