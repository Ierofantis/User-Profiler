var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
 res.json({
        status: 'session cookie not set'
    });
});


module.exports = router;
