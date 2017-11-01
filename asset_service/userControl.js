'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('userProfile');

exports.list_all_user = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.read_a_user = function (req, res) {
    User.find({
        uname: req.params.uname
    }, function (err, user) {
        if (err) res.send(err);
        if (!user[0]) {
            var outputJson={
                profile_image:""
            }
        }
        else var outputJson={
            //uname:user[0].uname,
            profile_image:user[0].profile_image
        }
        res.json(outputJson);
    });
};