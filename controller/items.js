const itemsService = require('../service/itmes');
class ItemsController{
	async createItems(req, res){
		try{
			console.log(req.body)
			const id =  await itemsService.createItems(req.body);
			res.status(201).json(id);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}

	async updateItems(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await itemsService.updateItems(id,req.body);
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async deleteItems(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await itemsService.deleteItems(id);
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
}

module.exports = new ItemsController()