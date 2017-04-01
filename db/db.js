const Sequelize = require( 'sequelize' );
const connectDB = process.env.DATABASE_URL || 'postgres://localhost/acme_sql';
const db = new Sequelize(connectDB, { logging: false });

module.exports = db;
