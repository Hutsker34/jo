const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//schema
const bioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Bio Model
const Bio = mongoose.model('bio', bioSchema);

Bio.get = function (callback, limit) {
    Bio.find(callback).limit(limit);
};

Bio.index = function (req, res) {
    Bio.get(function (err, bio) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Bio Successfully!",
            data: bio
        });
    });
};

Bio.getById = function (req, res) {
    // https://mongoosejs.com/docs/api.html#model_Model.findById
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Bio Details',
            data: bio
        });
    });
};

Bio.add = async function (req, res) {
    const bio = new Bio();
    bio.name = req.body.name ? req.body.name : bio.name;
    bio.email = req.body.email;
    bio.phone = req.body.phone;
    bio.address = req.body.address;
    bio.password = await bcrypt.hash(req.body.password, 10);

    //Save and check error
    bio.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Bio Added!",
            data: bio
        });
    });
};

Bio.update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        bio.name = req.body.name ? req.body.name : bio.name;
        bio.email = req.body.email;
        bio.phone = req.body.phone;
        bio.address = req.body.address;

        //save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Bio Updated Successfully",
                data: bio
            });
        });
    });
};

Bio.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Bio Deleted'
        });
    });
};

module.exports = Bio;
