const invoiceDAO =  require('../dao/invoice')
class InvoiceService{
	createInvoice(invoiceDTO){
		const {number, customer_name, total} = invoiceDTO
		return invoiceDAO.createInvoice(number, customer_name, total)
	};

	updateInvoice(id, invoiceDTO){
		return invoiceDAO.updateInvoice(id, invoiceDTO)
	};

}

module.exports = new InvoiceService()