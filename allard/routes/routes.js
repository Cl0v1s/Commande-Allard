var express = require('express');
var router = express.Router();
var debug = require('debug')('allard:server');
var Dao = require("./../models/Dao");
var Article = require("./../models/Article");
var Author = require("./../models/Author");
var HallEntry = require("./../models/HallEntry");

/**
 * Paramétrage de la gestion de l'authentification
 */
var auth = require('http-auth');
var basic = auth.basic({
	realm: "StarCraft",
	file: __dirname + "./../models/Users.json" // gevorg:gpass, Sarah:testpass ... 
});

/**
 * Route vers la page d'index présentant un résumé des articles
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next) {	Dao.use();	var articles [description]
 * @return {[type]}       [description]
 */
router.get('/', function(req, res, next) {
	Dao.use();
	var articles = Dao.getAll(Article);

 	res.render('index', { "articles": articles });
});

/**
 * Route vers la oage article présentant un article en particulier
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next) {	Dao.use();	var article [description]
 * @return {[type]}       [description]
 */
router.get('/article/:id', function(req, res, next) {
	Dao.use();
	var article = Dao.getById(Article, req.params.id);
	if(article == undefined || article == null)
		res.render('404');
	else 
 		res.render('article', { "article": article });
});

/**
 * Affiche la page du hall of fame avec le carrousel
 * @param  {[type]} requ                          [description]
 * @param  {[type]} res                           [description]
 * @param  {[type]} next){	res.render('hall');} [description]
 * @return {[type]}                               [description]
 */
router.get('/hall', function(requ,res, next)
{
	res.render('hall');
});

/**
 * Retourne un tableau json contenant les données du hall of fame 
 * @param  {[type]} req                    [description]
 * @param  {[type]} res                    [description]
 * @param  {[type]} next){	Dao.use();	var entries       [description]
 * @return {[type]}                        [description]
 */
router.post("/hall", function(req, res, next)
{
	Dao.use();
	var entries = Dao.getAll(HallEntry);
	res.json({'entries' : entries});
});

/**
 * Affiche la page d'index d'administation, nécessite authentification
 * @param  {[type]} req                    [description]
 * @param  {[type]} res                    [description]
 * @param  {[type]} next){	Dao.use();	var articles      [description]
 * @return {[type]}                        [description]
 */
router.get("/admin", auth.connect(basic), function(req,res,next)
{
	Dao.use();
	var articles = Dao.getAll(Article);
	var entries = Dao.getAll(HallEntry);
	res.render("admin/index", {"articles" : articles, 'entries' : entries});
});

/**
 * Affiche la page de formulaire de création d'Article, nécessite authentification
 * @param  {[type]} req                                    [description]
 * @param  {[type]} res                                    [description]
 * @param  {[type]} next){	Dao.use();		if(req.query.title !             [description]
 * @return {[type]}                                        [description]
 */
router.get("/admin/create", auth.connect(basic), function(req,res,next)
{
	Dao.use();
	//Gestion de l'enregistrement des données
	if(req.query.title != undefined && req.query.content != undefined && req.query.resume != undefined && req.query.author != undefined)
	{
		var article = new Article(req.query.title, req.query.resume, req.query.content, new Date(), parseInt(req.query.author));
		if(req.query.id != undefined)
		{
			article.id = req.query.id;
		}
		Dao.save(article);
		res.render("admin/terminated");
		return;
	}

	//Gestion de l'affichage du formulaire
	var authors = Dao.getAll(Author);
	var article = null;
	if(req.query.edit != null && req.query.edit != undefined)
	{
		article = Dao.getById(Article, req.query.edit);
		if(article == null || article == undefined)
		{
			res.render('404');
			return;
		}
	}
	res.render("admin/create", {"article" : article, "authors" : authors});
});

/**
 * Page de suppression d'Article, nécessite authentification
 * @param  {[type]} req                                [description]
 * @param  {[type]} res                                [description]
 * @param  {[type]} next){	Dao.use();	if(req.query.id [description]
 * @return {[type]}                                    [description]
 */
router.get("/admin/delete", auth.connect(basic), function(req,res,next)
{
	Dao.use();
	if(req.query.id == undefined)
	{
		res.render("404");
		return;
	}
	Dao.deleteById(Article, parseInt(req.query.id));
	res.render("admin/terminated");
});

/**
 * Page de création d'entrée du hall of fame
 * @param  {[type]} req                                    [description]
 * @param  {[type]} res                                    [description]
 * @param  {[type]} next){	Dao.use();		if(req.query.title !             [description]
 * @return {[type]}                                        [description]
 */
router.get('/admin/hall/create', auth.connect(basic), function(req,res, next)
{
	Dao.use();
	//Gestion de la création
	if(req.query.title != undefined && req.query.description != undefined && req.query.image != undefined)
	{
		var entry = new HallEntry(req.query.title, req.query.description, req.query.image);
		if(req.query.id != undefined)
			entry.id = req.query.id;
		Dao.save(entry);
		res.render("admin/terminated");
		return;
	}

	//gestion de l'affichage du formulaire
	var entry = Dao.getById(HallEntry, req.query.edit);
	res.render('admin/hall/create', {'entry' : entry});
});

/**
 * Page de suppression d'entrée du hall of fame, nécessite authentification
 * @param  {[type]} req                                [description]
 * @param  {[type]} res                                [description]
 * @param  {[type]} next){	Dao.use();	if(req.query.id [description]
 * @return {[type]}                                    [description]
 */
router.get("/admin/hall/delete", auth.connect(basic), function(req,res,next)
{
	Dao.use();
	if(req.query.id == undefined)
	{
		res.render("404");
		return;
	}
	Dao.deleteById(HallEntry, parseInt(req.query.id));
	res.render("admin/terminated");
});


module.exports = router;
