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

router.put('/users/edit', (req, res, next) => {
    models.User.changeManager(req.body.userID, req.body.managerID)
        .then(users => {
            res.send(users);
        })
        .catch(err => console.log(err));
});

module.exports = router;
