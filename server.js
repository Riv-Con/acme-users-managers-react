const http = require( 'http' );
const app = require( './app' );
const db = require( './db' );
const server = http.createServer(app);

const port = process.env.PORT || 3000;

db.seed()
    .then(() => console.log('db is seeded'))
    .catch(err => console.log(err));

server.listen(port, () => console.log(`listening on ${port}`));
