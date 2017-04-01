const db = require( './db' );
const User = require( './User' );

const sync = () => db.sync({ force: true });

const addUsers = () => {
    const users = ['Moe', 'Larry', 'Curly', 'Shep', 'Vince'];
    const promiseArr = users.map( name => User.create({ name }));
    return Promise.all(promiseArr);
};

const seed = () => sync()
    .then(() => addUsers);

module.exports = { seed, sync, models: { User } };
