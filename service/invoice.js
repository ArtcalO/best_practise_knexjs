const invoiceDAO =  require('../dao/invoice')
class InvoiceService{
	createInvoice(inviceDTO){
		const {number, customerName, total} = inviceDTO
		return invoiceDAO.createInvoice(number, customerName, total)
	}

}

module.exports = new InvoiceService()