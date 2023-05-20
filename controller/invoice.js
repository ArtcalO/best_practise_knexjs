const invoiceService = require('../service/invoice');
const invoiceItemsDAO = require('../dao/invoiceItems');
class InvoiceController{
	async createInvoice(req, res){
		try{
			const {invoice} = req.body
			const {data} = req.body
			const id =  await invoiceService.createInvoice(invoice);
			let insertPromises = []
			for(let item of data){
				item['invoiceId']=id.id
			    insertPromises.push(invoiceItemsDAO.objCreateInvoiceItems(item))
			}
			Promise.all(insertPromises).then((res)=>console.log(res)).catch((err)=>{
				invoiceService.deleteInvoice(id)
			})
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
			const id = parseInt(req.params.id)
			const obj =  await invoiceService.splitInvoice(id, req.body);
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
}

module.exports = new InvoiceController()