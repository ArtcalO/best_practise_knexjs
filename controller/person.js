const personService = require('../service/person');
class PersonController{
	async createPerson(req, res){
		try{
			const id =  await personService.createPerson(req.body)
			return.status(201).json(id)
		} catch (err){
			console.log(err)
		}
	}
}

module.exports = new PersonController()