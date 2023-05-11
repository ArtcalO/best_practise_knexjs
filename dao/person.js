const db = require('../db/db')

class PersonDAO{
	async createPerson(firstName, lastName, email){
		const [id] = await db('person').insert({
			email,
			firstName:firstName,
			lastName:lastName,
		})
		.returning('id')

		return id;
	}
}