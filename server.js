const express = require('express');
const compression = require('compression')
const path = require('path');

const app = express();

app.use(compression());

app.use(express.static('./dist/colabgasy'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/colabgasy/index.html'));
});

app.listen(process.env.PORT || 8080);
