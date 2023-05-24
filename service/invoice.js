const invoiceDAO =  require('../dao/invoice')
const invoiceItemsDAO =  require('../dao/invoiceItems')
class InvoiceService{
	async createInvoice(invoiceDTO, data){
		const {number, customer_name, total} = invoiceDTO
		const id = await invoiceDAO.createInvoice(number, customer_name, total)
		let insertPromises = []
		for(let item of data){
			console.log("created before sent=============", id)
			item['invoiceId']=id.id
		    insertPromises.push(invoiceItemsDAO.objCreateInvoiceItems(item))
		}
		Promise.all(insertPromises).then((res)=>console.log(res)).catch((err)=>{
			invoiceDAO.deleteInvoice(id.id)
		})
		
		return id
	};
	updateInvoice(id, invoiceDTO){
		return invoiceDAO.updateInvoice(id, invoiceDTO)
	};
	deleteInvoice(id){
		return invoiceDAO.deleteInvoice(id)
	};
	retrieveInvoice(id){
		console.log(id)
		return invoiceDAO.retrieveInvoice(id)
	};
	retrieveAllInvoice(){
		return invoiceDAO.retrieveAllInvoice()
	};
}

module.exports = new InvoiceService()
