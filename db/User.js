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
                include: [
                    { model: this,
                        as: 'manager',
                        foreignKey: 'managerId'
                    }
                ],
                order: [
                    ['name', 'ASC']
                ]
            })
        },
        findById: function (userID) {
            return this.findOne({
                where: {id: userID}
            })
        },
        changeManager: function(userID, managerID){
            return this.findById(userID)
                .then(user => {
                    user.managerId = managerID;
                    return user.save();
                })
                .then(() => this.userRecords());
        }
    }

};

const User = acmeDB.define('user', defineAttr, defineMethods);

module.exports = User;
