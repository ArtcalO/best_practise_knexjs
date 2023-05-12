const invoiceItemsDAO =  require('../dao/invoiceItems')
class InvoiceItemsService{
	createInvoiceItems(invoiceItemsDTO){
		const {invoiceId,itemId,quantity,unitPrice,totalPrice} = invoiceItemsDTO
		return invoiceItemsDAO.createInvoiceItems(invoiceId,itemId,quantity,unitPrice,totalPrice)
	}

}

module.exports = new InvoiceItemsService()