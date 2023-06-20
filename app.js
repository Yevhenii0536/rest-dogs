const express = require('express');
const bodyParser = require('body-parser');
const pingRoute = require('./src/routes/ping');
const dogsRoute = require('./src/routes/dogs');

const app = express();

app.use(bodyParser.json());

app.use('/ping', pingRoute);
app.use('/dogs', dogsRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
