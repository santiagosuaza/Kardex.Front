const express = require('express')
const app = express()
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.get('/', (req, res) => {
     res.send ({'text': 'this text send server'})
  });

  app.listen(port, ()=> {
      console.lor('servidor activado')
  });