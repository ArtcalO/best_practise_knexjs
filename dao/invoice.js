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
		console.log("data patch=======", data)
		console.log("data id=======", id)
		const updatedInvoice = await invoiceModel.query().patchAndFetchById(id,data);

		return updatedInvoice;
	}
}

module.exports = new InvoiceDAO();

