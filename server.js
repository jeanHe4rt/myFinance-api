const { Router } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();
const users = require('./data');
const UserRouter = require('./api/routes/UserRoutes');

const port = process.env.PORT;
app.use(express.json());
app.use('/Users', UserRouter);

app.listen(port,() =>{
  console.log('My Finance RESTful API server started on: ' + port);
});
