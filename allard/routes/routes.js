var express = require('express');
var router = express.Router();
var debug = require('debug')('allard:server');
var Dao = require("./../models/Dao");
var Article = require("./../models/Article");
var Author = require("./../models/Author");

/**
 * Paramétrage de la gestion de l'authentification
 */
var auth = require('http-auth');
var basic = auth.basic({
	realm: "StarCraft",
	file: __dirname + "./../models/Users.json" // gevorg:gpass, Sarah:testpass ... 
});

/**
 * Paramétrage de la gestion de l'upload de fichiers
 */
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + new Date().getTime() + ".SC2REPLAY");
  }
});
var filter = function (req, file, cb) {
		    if (path.extension(file.originalname) !== '.SC2REPLAY') {
		      return cb(new Error('Seuls les fichiers de replay starcraft sont autorisés.'));
		    }
		    cb(null, true)
  		}; 
var upload = multer({ 
	storage: storage,  
	fileFilter: filter,
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
 * Enregistre le fichier envoyé par le formulaire multipart/form-data (champs field) dans le répertoire upload
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next) {               } [description]
 * @return {[type]}       [description]
 */
router.post('/upload', upload.single('file'), function (req, res, next) {
  res.send(req.file);
})

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
	res.render("admin/index", {"articles" : articles});
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


module.exports = router;
