const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();

const api = require('./api')

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// Routing to API handler
app.use('/api', api);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
