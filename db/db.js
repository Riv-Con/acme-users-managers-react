const Sequelize = require( 'sequelize' );
const connectDB = process.env.DATABASE_URL || 'postgree://localhost/acme_sql';
const db = new Sequelize(connectDB, { logging: false });
