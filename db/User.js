const acmeDB = require( './db' );

const defineAttr = {
    name: {
        type: acmeDB.Sequelize.STRING,
        allowNull: false
    }
};

const defineMethods = {

};

const User = acmeDB.define('user', defineAttr, defineMethods);

module.exports = User;
