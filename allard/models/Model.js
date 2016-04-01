"use strict";

class Model 
{

	constructor(id = 0)
	{
		this.id = id;
	}

	load(object)
	{
		var counter = 0;
		for(var key in this){
			for(var other in object)
			{
				if(key == other)
				{
					couner ++;
					this[key] = object[other];
				}
			}
      	}
      	if(counter != Object.keys(this).length)
      		throw new Error("Pas le bon type d'objet");
	}
}

module.exports = Model;