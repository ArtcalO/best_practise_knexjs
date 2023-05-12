const personService = require('../service/person');
class PersonController{
	async createPerson(req, res){
		try{
			const id =  await personService.createPerson(req.body)
			res.status(201).json(id)
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
}

module.exports = new PersonController()