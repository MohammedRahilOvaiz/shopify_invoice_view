var express = require('express');
var app = express();
const session = require('express-session');
var bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
app.use(bodyParser.json());
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));

//DB connection
require('./app/database/connection');
// const db = require('./app/config/db.config.js');

// // force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });
app.set('view engine','ejs');
require('./app/route/shop.route.js')(app);

// Create a Server
var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})