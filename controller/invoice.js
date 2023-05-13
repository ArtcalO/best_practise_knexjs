const invoiceService = require('../service/invoice');
class InvoiceController{
	async createInvoice(req, res){
		try{
			console.log(req.body)
			const id =  await invoiceService.createInvoice(req.body);
			res.status(201).json(id);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}

	async updateInvoice(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await invoiceService.updateInvoice(id,req.body);
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
}

module.exports = new InvoiceController()