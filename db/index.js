const db = require( './db' );
const User = require( './User' );

User.belongsTo(User, { as: 'manager' });
User.hasMany(User, { as: 'teamMember', foreignKey: 'managerId' });

const sync = () => db.sync({ force: true });

const addUsersAsMgr = () => {
    const users = ['Moe', 'Larry', 'Curly'];
    const promiseArr = users.map( name => User.create({ name: name, isMgr: true }));
    return Promise.all(promiseArr);
};

const addUsers = () => {
    const users = ['Shep', 'Vince'];
    const promiseArr = users.map( name => User.create({ name }));
    return Promise.all(promiseArr);
};

const seed = () => sync()
    .then(() => addUsersAsMgr())
    .then(() => addUsers());

module.exports = { seed, sync, models: { User } };
