const invoiceItemsModel = require('../db/models/invoiceItems')

class InvoiceItemsDAO{
	async createItems(invoiceId,itemId,quantity,unitPrice,totalPrice){
		const createdItems = await invoiceItemsModel.query().insert({
			invoiceId,
			itemId,
			quantity,
			unitPrice,
			totalPrice,
		});

		return createdItems;
	};

	async updateItems(id, data){
		const updatedItems = await invoiceItemsModel.query().patchAndFetchById(id,data);
		return updatedItems;
	};

	async deleteItems(id){
		const deletedItems = await invoiceItemsModel.query().deleteById(id);
		return deletedItems;
	};
	async retrieveItems(id){
		const retrievedItems = await invoiceItemsModel.query().findById(id);
		return retrievedItems;
	};
	async retrieveAllInvoiceItems(){
		const retrievedItems = await invoiceItemsModel.query();
		return retrievedItems;
	};
}

module.exports = new InvoiceItemsDAO();

