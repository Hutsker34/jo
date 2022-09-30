//initialize express router
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { get } = require('../models/Portfolio');

//set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Portfolio Controller
const portfolioController = require('../models/Portfolio');

// Portfolio routes
router.route('/bio')
    .get(portfolioController.index)
    .post(portfolioController.add);

router.route('/bio/:bio_id')
    .get(portfolioController.getById);


/**
 * https://dev.to/eidorianavi/authentication-and-jwt-in-node-js-4i13
 */
router.post('/login', async (req, res) => {
    const user = await portfolioController.findOne({name: req.body.name});

    try {
        const match = await bcrypt.compare(req.body.password, user.password);
        const accessToken = jwt.sign(JSON.stringify(user), `${process.env.TOKEN_SECRET}`);
        if (match) {
            await res.json({accessToken: accessToken});
        } else {
            await res.json({message: "Invalid Credentials"});
        }
    } catch (e) {
        console.log(e)
    }
});

//Export API routes
module.exports = router;
