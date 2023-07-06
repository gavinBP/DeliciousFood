const express = require('express');
const path = require('path');

const app = express();
const sql = require('mssql');
const { connect } = require('http2');

const config = {
  server: 'fooditemssqldatabase.database.windows.net',
  port: 1433,
  user: 'fooditemsserverlogin',
  password: 'foodItemsPassword10',
  database: 'FoodItemsDB',
  options: {
    encrypt: true, // if your server requires encryption
  },
};

let connected = false;

async function azureConnectOpen() {
    try {
      await sql.connect(config);
      console.log('Connected!');
      connected = true;
  
      // Place your database queries or operations here
  
      // Close the database connection when finished
    //   await sql.close();
    } catch (err) {
      console.error('Error connecting to the database:', err);
    }
  }

  async function azureConnectClose() {
    try {
        if(connected) {
            await sql.close();
            console.log('Connetcion Closed');
            connected = false;
        }
        else {
            console.log('already not connected');
        }
    }
    catch (err) {
        console.error('Error in closing connection to azure database: ', err);
    }
  }
  azureConnectOpen();
  setTimeout(azureConnectClose, 5000);

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