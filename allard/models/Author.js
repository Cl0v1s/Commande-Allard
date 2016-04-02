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

	getIdentity()
	{
		return this.firstName+" "+this.lastName;
	}
}

module.exports = Author;