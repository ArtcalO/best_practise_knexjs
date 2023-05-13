const invoiceItemsDAO =  require('../dao/invoiceItems')
class InvoiceItemsService{
	createInvoiceItems(invoiceItemsDTO){
		const {invoice_id,item_id,quantity,unit_price,total_price} = invoiceItemsDTO
		return invoiceItemsDAO.createInvoiceItems(invoice_id,item_id,quantity,unit_price,total_price)
	}

}

module.exports = new InvoiceItemsService()