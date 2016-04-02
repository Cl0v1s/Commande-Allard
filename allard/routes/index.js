var express = require('express');
var router = express.Router();
var Dao = require("./../models/Dao");
var Article = require("./../models/Article");

/* GET home page. */
router.get('/', function(req, res, next) {
	Dao.use();
	var articles = Dao.getAll(Article);


 	res.render('index', { "articles": articles });
});

module.exports = router;
