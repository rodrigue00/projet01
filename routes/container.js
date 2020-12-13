const express = require('express');
const { body, validationResult } = require('express-validator');
const createHttpError = require('http-errors');
const router = new express.Router();

class Containers {
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

        const newItems = new Containers(location, drawer, id);
        container.push(newItems);
        console.log(container);
        res.redirect('/container/new');
    });

router.get('/location', (req, res, next) => {
    const allLocations = container.map(containers => containers.location);
    const uniqueLocations = [];
    allLocations.forEach(location => {
        if (uniqueLocations.indexOf(location) < 0) {
            uniqueLocations.push(location);

        }

    });
    uniqueLocations.sort();
    res.json(uniqueLocations);
});


router.get('/drawer', (req, res, next) => {
    const allDrawer = container.map(containers => containers.drawer);
    const uniqueDrawer = [];
    allDrawer.forEach(drawer => {
        if (uniqueDrawer.indexOf(drawer) < 0) {
            uniqueDrawer.push(drawer);

        }

    });
    uniqueDrawer.sort();
    res.json(uniqueDrawer);

});

module.exports = router;