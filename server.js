const express = require('express');
const morgan = require('morgan');
const path = require('path');

const DEFAULT_PORT = process.env.PORT || 6420;

// initialize express.
const app = express();

// Initialize variables.
let port = DEFAULT_PORT;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Setup app folders.
app.use(express.static('App'));

// Set up a route for index.html

app.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname + '/App/about.html'));
});
app.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/App/contact.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});



// Start the server.
app.listen(port);
console.log(`Listening on port ${port}...`);