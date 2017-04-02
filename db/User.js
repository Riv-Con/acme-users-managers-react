const acmeDB = require( './db' );

const defineAttr = {
    name: {
        type: acmeDB.Sequelize.STRING,
        allowNull: false
    },
    isMgr: {
        type: acmeDB.Sequelize.BOOLEAN,
        defaultValue: false
    }
};

const defineMethods = {
    classMethods: {
        userRecords: function() {
            return this.findAll({
                order: [
                    ['name', 'ASC']
                ]
            })
        }
    }
};

// const defineMethods = {
//     classMethods: {
//         managerRecords: function() {
//             return this.findAll({ 
//                 where: {isMgr: true },
//                 include: [
//                     { model: this,
//                         as: 'teamMember'
//                     }
//                 ],
//                 order: [
//                     ['name', 'ASC']
//                 ]
//             })
//         },
//         teamRecords: function() {
//             return this.findAll({
//                 order: [
//                     ['name', 'ASC']
//                 ]
//             })
//         },
//         findRemMgrId: function (selectedId) {
//             return this.findAll({
//                 where: {managerId: selectedId}
//             })
//             .then(_users => {
//                 _users.forEach(_user => {
//                     _user.managerId = null;
//                     _user.save();
//                 })
//             })
//         },
//         findById: function (selectedId) {
//             return this.findOne({
//                 where: {id: selectedId}
//             })
//         },
//         findUpdateMgrById: function (selectedId) {
//             let mgrId;
//             return this.findById(selectedId)
//                 .then(_mgr => {
//                     mgrId = _mgr.id;
//                     _mgr.isMgr = !_mgr.isMgr;
//                     return _mgr.save();
//                 })
//                 .then(() => {
//                     return this.findRemMgrId(mgrId)
//                 })
//         },
//         assignMgr: function(selectedId, mgrId) {
//             return this.findById(selectedId)
//                 .then(_mgr => {
//                     _mgr.managerId = mgrId;
//                     return _mgr.save();
//                 })
//         }
//     }
// };

const User = acmeDB.define('user', defineAttr, defineMethods);

module.exports = User;
