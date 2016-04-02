"use strict";

var Dao = require("./Dao");
var Model = require("./Model");
var Author = require("./Author");


class Article extends Model
{
	/**
	 * Créer un nouvel Article
	 * @param  {string} title   Titre de l'article
	 * @param  {string} content Contenu de l'article
	 * @param  {Date} date    Date de parution de l'article
	 * @param  {int} author  Index de l'auteur			
	 */
	constructor(title, content, date, author)
	{
		super();
		this.title = title;
		this.content = content;
		this.date = date.getTime()/1000;
		this.author = author;
	}

	//Retourne un String contenant la date formattée au format Européen
	getHumanDate()
	{
		var date = new Date(this.date*1000);
		return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
	}

	//Retourne l'objet Author correspondant 
	getAuthor()
	{
		Dao.use();
		return Dao.getById(Author, this.author);
	}
}

module.exports = Author;