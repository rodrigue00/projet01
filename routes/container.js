const express = require('express');
const { body, validationResult } = require('express-validator');
const createHttpError = require('http-errors');
const router = new express.Router();

class containers {
    constructor(location, drawer, id) {
        this.location = location;
        this.drawer = drawer;
        this.id = id;
    }
}

const container = [];
/* GET home page. */
router.get('/new', (req, res, next) => {
    res.render('container_form', { title: 'Encodage d\'un conteneur' });
});

router.post('/',

    [
        body('location').not().isEmpty().trim().escape(),
        body('drawer').not().isEmpty().trim().escape(),
        body('id').not().isEmpty().trim().escape()
    ],

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(createHttpError(404));
        };


        const location = req.body.location;
        const drawer = req.body.drawer;
        const id = req.body.id;

        const newItems = new containers(location, drawer, id);
        container.push(newItems);
        console.log(container);
        res.redirect('/item/new');
    });


module.exports = router;