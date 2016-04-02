var express = require('express');
var router = express.Router();
var debug = require('debug')('allard:server');
var Dao = require("./../models/Dao");
var Article = require("./../models/Article");

/* GET home page. */
router.get('/:id', function(req, res, next) {
	Dao.use();
	var article = Dao.getById(Article, req.params.id);
	if(article == undefined || article == null)
		res.render('404');
	else 
 		res.render('article', { "article": article });
});

module.exports = router;
