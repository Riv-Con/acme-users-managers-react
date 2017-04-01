const http = require( 'http' );
const app = require( './app' );
const db = require( './db' );
const server = http.createServer(app);

const port = process.env.PORT || 3000;


