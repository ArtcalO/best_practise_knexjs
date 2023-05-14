const invoiceModel = require('../db/models/invoice')

class InvoiceDAO{
	async createInvoice(number, customerName, total){
		const createdInvoice = await invoiceModel.query().insert({
			number,
			customer_name: customerName,
			total,
		});

		return createdInvoice;
	};

	async updateInvoice(id, data){
		const updatedInvoice = await invoiceModel.query().patchAndFetchById(id,data);
		return updatedInvoice;
	};

	async deleteInvoice(id){
		const deletedInvoice = await invoiceModel.query().deleteById(id);
		return deletedInvoice;
	};
	async retrieveInvoice(id){
		const retrievedInvoice = await invoiceModel.query().findById(id);
		return retrievedInvoice;
	};
}

module.exports = new InvoiceDAO();

