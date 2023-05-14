const itemsModel = require('../db/models/items')

class ItemsDAO{

	async createItems(name, sale_price){
		try{
			const createdItems = await itemsModel.transaction(async trx=>{
				const createdItems = await itemsModel.query(trx).insert({
					name:name,
					sale_price:sale_price,
				});
				return createdItems;
			})
			return createdItems
			console.log("Items added successfully !")
		}catch(err){
			console.log("Items has not been added !")
			console.log(err);
		}
	};

	async updateItems(id, data){
		try{
			const updatedItems = await itemsModel.transaction(async trx=>{
				const updatedItems = await itemsModel.query(trx).patchAndFetchById(id,data);
				return updatedItems;
			})
			return updatedItems
			console.log("Items updated successfully !")
		}catch(err){
			console.log("Items has not been updated !")
			console.log(err);
		}
	};

	async deleteItems(id){
		try{
			const deletedItems = await itemsModel.transaction(async trx=>{
				const deletedItems = await itemsModel.query(trx).deleteById(id);
				return deletedItems;
			})
			return deletedItems
			console.log("Items deleted successfully !")
		}catch(err){
			console.log("Items has not been deleted !")
			console.log(err);
		}
		
	};
	async retrieveItems(id){
		const retrievedItems = await itemsModel.query().findById(id);
		return retrievedItems;
	};
	async retrieveAllItems(){
		const retrievedItems = await itemsModel.query();
		return retrievedItems;
	};
}

module.exports = new ItemsDAO();

