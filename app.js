const express = require( 'express' );
const app = express();

const path = require( 'path' );
const routes = require( './routes' );
const bodyParser = require( 'body-parser' );

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

module.exports = app;
