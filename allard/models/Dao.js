"use strict";

var debug = require('debug')('allard:server');
var JsonDB = require('node-json-db');



//Contexte de données statiques 
let context = null;
//Indexes
let indexes = null;
//Tables
let tables = null;

class Dao
{

	//Doit être appelé avant toute chose
	static use()
	{
		if(context != null && indexes != null && tables != null)
			return;
		try
		{
			context = new JsonDB("database", false, true);
		}
		catch(error)
		{
			debug(error.inner);
		}
		try
		{
			indexes = Dao.context().getData("/indexes");
			tables = Dao.context().getData("/tables");
		}
		catch(error)
		{
			Dao.context().push("/indexes", {});
			indexes = {};
			Dao.context().push("/tables", {});
			tables = {};
			Dao.context().save();
		}
	}

	/// Retourne le schéma de données
	static context()
	{
		return context;
	}

	//Retourne la table des index
	static indexes()
	{
		return indexes;
	}

	static tables()
	{
		return tables;
	}

	/// Sauvegarde l'objet dans le shéma de données
	static save(object)
	{
		var indexed = object.id != undefined;
		var path = "/tables/";
		path += object.constructor.name;
		
		//Auto Incrémente de l'ID
		if(!indexed)
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
		if(!indexed)
			Dao.tables()[object.constructor.name][indexes[object.constructor.name]-1] = object;
		else 
			Dao.tables()[object.constructor.name][object.id] = object;
	}

	/// Retourne un objet en fonction de son id
	/// clas : Classe attendu de l'objet
	static getById(clas, id)
	{
		var data = Dao.tables()[clas.name][id];
		var entry = null;
		if(data == undefined || data == null)
			return entry;
		entry = new clas(id);
		entry.load(data);
		return entry;
	}

	static deleteById(clas, id)
	{
		var path = "/tables/"+clas.name+"/"+id;
		Dao.context().delete(path);
		Dao.context().save();
		delete Dao.tables()[clas.name][id];
	}


	/**
	 * Retourne une liste de tout les objets contenus dans la "table" passée en paramètre
	 * @param  {class} clas "Table" devant être retournée
	 * @return {Array}      Liste de tout les élements de la table
	 */
	static getAll(clas)
	{
		var data;
		var result = [];
		try
		{
			data = Dao.tables()[clas.name];
			Object.keys(data).forEach(function(key)
			{
				let entry = new clas(key);
				entry.load(data[key]);
				result.push(entry);
			});
		}
		catch(error)
		{
			debug("Dao.getAll: "+error.stack);
			return null;
		}
		return result;
	}
}

module.exports = Dao;