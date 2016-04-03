var express = require('express');
var router = express.Router();
var debug = require('debug')('allard:server');
var Dao = require("./../models/Dao");
var Article = require("./../models/Article");

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
//TODO: remplacer .pdf par l'extension des fichiers starcraft
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + new Date().getTime() + ".pdf");
  }
});
var filter = function (req, file, cb) {
		    if (path.extension(file.originalname) !== '.pdf') {
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

router.get("/admin", auth.connect(basic), function(req,res,next)
{
	res.send("admin");
});


module.exports = router;
