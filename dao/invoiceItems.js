const invoiceItemsModel = require('../db/models/invoiceItems')

class InvoiceItemsDAO{

	async createInvoiceItems(invoiceId,itemId,quantity,unitPrice,totalPrice){
		try{
			const createdInvoiceItems = await invoiceItemsModel.transaction(async trx=>{
				const createdInvoiceItems = await invoiceItemsModel.query(trx).insert({
					invoiceId,
					itemId,
					quantity,
					unitPrice,
					totalPrice,
				});
				return createdInvoiceItems;
			})
			return createdInvoiceItems
			console.log("InvoiceItems added successfully !")
		}catch(err){
			console.log("InvoiceItems has not been added !")
			console.log(err);
		}
		
	};

	async updateItems(id, data){
		try{
			const updatedItems = await invoiceItemsModel.transaction(async trx=>{
				const updatedItems = await invoiceItemsModel.query(trx).patchAndFetchById(id,data);
				return updatedItems;
			})
			return updatedItems
			console.log("InvoiceItems updated successfully !")
		}catch(err){
			console.log("InvoiceItems has not been updated !")
			console.log(err);
		}
	};

	async deleteItems(id){
		try{
			const deletedItems = await invoiceItemsModel.transaction(async trx=>{
				const deletedItems = await invoiceItemsModel.query(trx).deleteById(id);
				return deletedItems;
			})
			return deletedItems
			console.log("InvoiceItems deleted successfully !")
		}catch(err){
			console.log("InvoiceItems has not been deleted !")
			console.log(err);
		}
		
	};
	async retrieveItems(id){
		const retrievedItems = await invoiceItemsModel.query().findById(id);
		return retrievedItems;
	};
	async retrieveAllInvoiceItems(){
		const retrievedItems = await invoiceItemsModel.query().withGraphFetched('[invoice,items]');
		return retrievedItems;
	};
}

module.exports = new InvoiceItemsDAO();

