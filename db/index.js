const db = require( './db' );
const User = require( './User' );

User.belongsTo(User, { as: 'manager' });
User.hasMany(User, { as: 'teamMember', foreignKey: 'managerId' });

const sync = () => db.sync({ force: true });

const addUsers = () => {
    const promiseArr = [];
    const user = ['Moe', 'Larry', 'Curly', 'Shep', 'Vince'];
    const mgr = [true, false, true, false, true];
    for (let i = 0; i < user.length; i++) {
        let name = user[i];
        let isMgr = mgr[i];
        // let managerId = mgrId[i];
        let managerId = null;        
        promiseArr.push(User.create({ name, isMgr }));
    }
    return Promise.all(promiseArr);
};

const seed = () => sync().then(() => addUsers())
    .then((userRecords) => {
        const [moe, larry, curly, shep, vince] = userRecords;
        return Promise.all([
            moe.addTeamMember(vince.id),
            moe.addTeamMember(larry.id),
            curly.addTeamMember(shep.id),
        ])
    });

module.exports = { seed, sync, models: { User } };
