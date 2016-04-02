"use strict";

class Author extends Model
{
	constructor(firstName = null, lastName = null, picture = null)
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.picture = picture;
	}
}

module.exports = Author;