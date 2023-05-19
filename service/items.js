const itemsDAO =  require('../dao/items')
class ItemsService{
	createItems(itemsDTO){
		const {name, sale_price} = itemsDTO
		return itemsDAO.createItems(name, sale_price, quantity)
	};
	updateItems(id, itemsDTO){
		return itemsDAO.updateItems(id, itemsDTO)
	};
	deleteItems(id){
		return itemsDAO.deleteItems(id)
	};
	retrieveItems(id){
		return itemsDAO.retrieveItems(id)
	};
	retrieveAllItems(){
		return itemsDAO.retrieveAllItems()
	};


}

module.exports = new ItemsService()
