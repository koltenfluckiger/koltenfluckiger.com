const express = require('express');
const app = express();

const routes = require('./routes');

app.use('/', routes);

// START SERVER //
app.listen(3001, () => {
  console.log('App listening on port 3001');
});
