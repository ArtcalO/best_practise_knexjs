const invoiceService = require('../service/invoice');
const invoiceItemsDAO = require('../dao/invoiceItems');
const invoiceDAO = require('../dao/invoice');
class InvoiceController{
	async createInvoice(req, res){
		try{
			const {invoice} = req.body
			const {data} = req.body
			const id =  await invoiceService.createInvoice(invoice, data);
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
	async deleteInvoice(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await invoiceService.deleteInvoice(id);
			res.status(201).json("Invoice deleted successfully !");
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async retrieveInvoice(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await invoiceService.retrieveInvoice(id);
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async retrieveAllInvoice(req, res){
		try{
			const obj =  await invoiceService.retrieveAllInvoice();
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async splitInvoice(req, res){
		try{
			let invoices = req.body
			let toUpdateInvoice = invoices.shift()
			const id = parseInt(req.params.id)
			const obj =  await invoiceDAO.updateInvoice(id, toUpdateInvoice.invoice, toUpdateInvoice.data);
			for(let item of invoices){
				const {invoice} = item
				const {data} = item
				await invoiceService.createInvoice(invoice, data);
			}
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
}

module.exports = new InvoiceController()