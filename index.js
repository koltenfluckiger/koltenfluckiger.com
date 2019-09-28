const Express = require('express');
const Path = require('path');
const App = Express();

const Routes = require('./routes');

const projectPath = Path.join(__dirname , 'react-koltenfluckiger.com', 'build');

App.use('/', Routes);
App.use(Express.static(projectPath));

App.get('/*', (req, res) => {
   res.sendFile(projectPath + '/index.html');
 });

// START SERVER //
App.listen(3001);
