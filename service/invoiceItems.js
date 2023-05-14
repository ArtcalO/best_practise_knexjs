const invoiceItemsDAO =  require('../dao/invoiceItems')
class InvoiceItemsService{
	createInvoiceItems(invoiceItemsDTO){
		console.log(invoiceItemsDTO)
		const {invoice_id,item_id,quantity,unit_price,total_price} = invoiceItemsDTO
		return invoiceItemsDAO.createInvoiceItems(invoice_id,item_id,quantity,unit_price,total_price)
	};
	updateInvoiceItems(id, invoiceDTO){
		return invoiceItemsDAO.updateInvoiceItems(id, invoiceDTO)
	};
	deleteInvoiceItems(id){
		return invoiceItemsDAO.deleteInvoiceItems(id)
	};
	retrieveInvoiceItems(id){
		console.log(id)
		return invoiceItemsDAO.retrieveInvoiceItems(id)
	};
	retrieveAllInvoiceItems(){
		return invoiceItemsDAO.retrieveAllInvoiceItems()
	};

}

module.exports = new InvoiceItemsService()