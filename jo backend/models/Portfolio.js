const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//schema
const portfolioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type : String,
        require: true
    },
    block_number: {
        type : Number,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Portfolio Model
const Portfolio = mongoose.model('portfolio', portfolioSchema);

Portfolio.get = function (callback, limit) {
    Portfolio.find(callback).limit(limit);
};

Portfolio.index = function (req, res) {
    Portfolio.get(function (err, portfolio) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Portfolio Successfully!",
            data: portfolio
        });
    });
};

Portfolio.getById = function (req, res) {
    // https://mongoosejs.com/docs/api.html#model_Model.findById
    Portfolio.findById(req.params.bio_id, function (err, portfolio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Portfolio Details',
            data: portfolio
        });
    });
};

Portfolio.add = async function (req, res) {
    const portfolio = new Portfolio();
    portfolio.name = req.body.name ? req.body.name : portfolio.name;
    portfolio.picture = req.body.picture ? req.body.picture : portfolio.picture;

    //Save and check error
    portfolio.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Portfolio Added!",
            data: portfolio
        });
    });
};



module.exports = Portfolio;
