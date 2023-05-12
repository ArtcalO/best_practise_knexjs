const personDAO =  require('../dao/person')
class PersonService{
	createPerson(personDto){
		const {email, firstName, lastName} = personDto
		return personDAO.createPerson(email, firstName, lastName)
	}

}

module.exports = new PersonService()