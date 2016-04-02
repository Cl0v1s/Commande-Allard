"use strict";

var debug = require('debug')('allard:server');
var JsonDB = require('node-json-db');



//Contexte de données statiques 
let context = null;
//Indexes
let indexes = null;

class Dao
{

	static initialize()
	{
		context = new JsonDB("database", false, true);
		indexes = Dao.context().getData("/indexes");
	}

	/// Retourne le schéma de données
	static context()
	{
		return context;
	}

	static indexes()
	{
		return indexes;
	}

	/// Sauvegarde l'objet dans le shéma de données
	static save(object)
	{
		var path = "/";
		path += object.constructor.name;
		
		//Auto Incrémente de l'ID
		if(object.id == undefined)
		{
			if(indexes[object.constructor.name] == undefined)
			{
				indexes[object.constructor.name] = 0;
			}
			object.id = indexes[object.constructor.name];
			indexes[object.constructor.name]++;
			Dao.context().push("/indexes", Dao.indexes());
		}


		path += "/" +object.id;
		Dao.context().push(path, object);
		Dao.context().save();
	}

	/// Retourne un objet en fonction de son id
	/// clas : Classe attendu de l'objet
	static getById(clas, id)
	{
		var path = "/";
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


	/**
	 * Retourne une liste de tout les objets contenus dans la "table" passée en paramètre
	 * @param  {class} clas "Table" devant être retournée
	 * @return {Array}      Liste de tout les élements de la table
	 */
	static getAll(clas)
	{
		var path = "/" + clas.name;
		var data;
		var result = [];
		try
		{
			data = Dao.context().getData(path);
			Object.keys(data).forEach(function(key)
			{
				let entry = new clas(key);
				entry.load(data[key]);
				result.push(entry);
			});
		}
		catch(error)
		{
			debug(error);
			return null;
		}
		return result;
	}
}

module.exports = Dao;