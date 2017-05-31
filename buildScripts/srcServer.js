import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
const port = 3000
/* eslint-disable no-console */
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	puclicPath: config.output.publicPath
}))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/users', (req, res) => {
  res.json([
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
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
