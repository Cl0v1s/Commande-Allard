"use strict";

var JsonDB = require('node-json-db');

//Contexte de données statiques 
let context = new JsonDB("database", false, false);

class Dao
{

	/// Retourne le schéma de données
	static context()
	{
		return context;
	}

	/// Sauvegarde l'objet dans le shéma de données
	static save(object)
	{
		var path:string = "/";
		path += object.constructor.toString();
		path += "/" +object.id;
		Dao.context().push(path, object);
		Dao.context().save();
	}

	/// Retourne un objet en fonction de son id
	/// clas : Classe attendu de l'objet
	static getById(clas, id)
	{
		var path:string = "/";
		path += clas;
		path += "/" +id;
		var data, obj;
		try
		{
			data = Dao.context().getData(path);
			obj = new clas(id);
			obj.load(data);
		}
		catch(error)
		{
			return null;
		}

		return obj;
	}
}

module.exports = Dao;