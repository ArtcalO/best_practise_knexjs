const invoiceItemsService = require('../service/invoiceItems');
class InvoiceItemsController{
	async createInvoiceItems(req, res){
		try{
			console.log(req.body)
			const id =  await invoiceItemsService.createInvoiceItems(req.body);
			res.status(201).json(id);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async retrieveAllInvoiceItems(req, res){
		try{
			const obj =  await invoiceItemsService.retrieveAllInvoiceItems();
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async getInvoiceItems(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await invoiceItemsService.getInvoiceItems(id);
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async updateInvoiceItems(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await invoiceItemsService.updateInvoiceItems(id,req.body);
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async deleteInvoiceItems(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await invoiceItemsService.deleteInvoiceItems(id);
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
}

module.exports = new InvoiceItemsController()