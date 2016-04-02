"use strict";

var Model = require("./Model");

class Author extends Model
{
	constructor(firstName, lastName, picture)
	{
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.picture = picture;
	}


}

module.exports = Author;