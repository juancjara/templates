'use strict'

let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', (req, res) => {
  res.render('index');
});

const port = process.env.PORT || 1234;

app.listen(port);
console.log(`Express server listening on port ${port}`);
