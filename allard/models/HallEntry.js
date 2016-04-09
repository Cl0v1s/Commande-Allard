"use strict"

var Dao = require("./Dao");
var Model = require("./Model");

class HallEntry extends Model
{
	constructor(title, description, image)
	{
		super();
		this.title = title;
		this.description = description;
		this.image = image;
	}
}

module.exports = HallEntry;