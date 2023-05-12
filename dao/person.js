const db = require('../db/db')

class PersonDAO{
	async createPerson(email, firstName, lastName){
		const [id] = await db('person').insert({
			email,
			first_name:firstName,
			last_name:lastName,
		})
		.returning('id')

		return id;
	}
}

module.exports = new PersonDAO();