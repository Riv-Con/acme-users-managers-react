const express = require( 'express' );
const router = express.Router();
const db = require( '../db' );
const models = db.models;

router.get('/users', (req, res, next) => {
    models.User.userRecords()
        .then(users => {
            res.send(users);
        })
        .catch(err => console.log(err))
});

router.get('/api/managers', (req, res, next) => {
    let managers, teamMembers;
    models.User.managerRecords()
        .then(_managers => {
            managers = _managers;
        })
        .then(() => {
            return models.User.teamRecords()
        })
        .then(_teamMembers => {
            teamMembers = _teamMembers;
        })
        .then(() => {
            res.send({ managers, teamMembers });
        })
        .catch(err => console.log(err));
});

router.put('/api/managers/:id', (req, res, next) => {
    models.User.findUpdateMgrById(req.params.id)
        .then(() => {
            res.send();
        })
        .catch(err => console.log(err));
});

module.exports = router;
