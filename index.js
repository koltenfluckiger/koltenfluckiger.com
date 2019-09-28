const Express = require('express');
const path = require('path');
const app = Express();

const routes = require('./routes');

const projectPath = path.join(__dirname , 'react-koltenfluckiger.com', 'build');

app.use('/', routes);
app.use(Express.static(projectPath));

app.get('/*', (req, res) => {
   res.sendFile(projectPath + '/index.html');
 });

// START SERVER //
app.listen(3001);
