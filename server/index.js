// REQUIRE DEPENDENCIES
// ============================================================
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./../config');
// CONTROLLERS
// ============================================================
const applicationCtrl = require('./controllers/application.server.controller');
const userCtrl = require('./controllers/user.server.controller');
const emailCtrl = require('./controllers/email.server.controller');
// INITILIZE APP
// ============================================================
const app = express();
// INITILIZE DEPENDENCIES
// ============================================================
// app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + './../dist'));
// ENDPOINTS
// ============================================================
// APPLICATION ENDPOINTS
app.get('/api/application', applicationCtrl.read);
app.post('/api/application', applicationCtrl.create);
app.put('/api/application/:id', applicationCtrl.update);
app.delete('/api/application/:id', applicationCtrl.delete);

// USER ENDPOINTS
app.get('/api/user', userCtrl.read);
app.post('/api/user', userCtrl.create);
app.put('/api/user/:id', userCtrl.update);
app.delete('/api/user/:id', userCtrl.delete);

// EMAIL ENDPOINTS
app.post('/api/email-approval', emailCtrl.sendApprovedEmail);
app.post('/api/email-denial', emailCtrl.sendDeclinedEmail);

// VARIABLES
// ============================================================
const port = config.port;
const mongoURI = config.mongoURI;
// MONGO CONNECTION
// ============================================================
// mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to mongo at: ', mongoURI);
  });
// LISTEN
// ============================================================
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
