const itemsModel = require('../db/models/items')

class ItemsDAO{
	async createItems(name, sale_price){
		const createdItems = await itemsModel.query().insert({
			number,
			sale_price,
		});

		return createdItems;
	};

	async updateItems(id, data){
		const updatedItems = await itemsModel.query().patchAndFetchById(id,data);
		return updatedItems;
	};

	async deleteItems(id){
		const deletedItems = await itemsModel.query().deleteById(id);
		return deletedItems;
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

