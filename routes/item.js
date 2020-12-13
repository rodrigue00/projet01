const express = require('express');
const { body, validationResult } = require('express-validator');
const createHttpError = require('http-errors');
const router = new express.Router();

class item {
    constructor(description) {
        this.description = description;
    }
}

const catalog = [];
/* GET home page. */
router.get('/new', (req, res, next) => {
    res.render('item_form', { title: 'Encodage d\'un article' });
});

router.post('/',

    [body('description').not().isEmpty().trim().escape()],

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(createHttpError(404));
        };


        const description = req.body.description;
        const newItems = new item(description);
        catalog.push(newItems);
        console.log(catalog);
        res.redirect('/item/new');
    });


module.exports = router;