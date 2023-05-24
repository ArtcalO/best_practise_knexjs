const invoiceModel = require('../db/models/invoice')

class InvoiceDAO{
	async createInvoice(number, customerName, total){
		try{
			const createdInvoice = await invoiceModel.transaction(async trx=>{
				const createdInvoice = await invoiceModel.query(trx).insert({
					number,
					customer_name: customerName,
					total,
				});
				return createdInvoice
			})
			return createdInvoice;
			console.log("Invoice created successfully !")
		}catch(err){
			console.log(err);
		}	
	};

	async updateInvoice(id, data){
		console.log("id=================", id, data)
		try{
			const updatedInvoice = await invoiceModel.transaction(async trx=>{
				const updatedInvoice = await invoiceModel.query(trx).patchAndFetchById(id,data);
				return updatedInvoice;
			})
			return updatedInvoice
			console.log("Invoice updated successfully !")
		}catch(err){
			console.log("Invoice has not been updated !")
			console.log(err);
		}
	};

	async deleteInvoice(id){
		try{
			const deletedInvoice = await invoiceModel.transaction(async trx=>{
				const deletedInvoice = await invoiceModel.query(trx).deleteById(id);
				return deletedInvoice;
			})
			return deletedInvoice
			console.log("Invoice deleted successfully !")
		}catch(err){
			console.log("Invoice has not been deleted !")
			console.log(err);
		}
	};
	async retrieveInvoice(id){
		const retrievedInvoice = await invoiceModel.query().findById(id);
		return retrievedInvoice;
	};
	async retrieveAllInvoice(){
		const retrievedInvoice = await invoiceModel.query().withGraphFetched('[items.[items]]');;
		return retrievedInvoice;
	};
}

module.exports = new InvoiceDAO();

