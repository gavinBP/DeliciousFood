const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());


app.get('/test', (req, res) => {
    res.json('if you are seeing this then everything is working fine');
})



app.get('/*', (req, res) => {
    res.redirect('/'); 
  });

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

  app.listen(3000, () => console.log('Express Server listening to 3000   --------------------------'));