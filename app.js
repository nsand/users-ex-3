const express = require('express');
const path = require('path');

const app = express();

const port = process.env.USERS_PORT || 3096;

['bundles', 'styles'].forEach(folder => app.use(`/${folder}`, express.static(path.resolve(__dirname, folder))));

app.get('/*', (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
