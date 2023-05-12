const itemsDAO =  require('../dao/items')
class ItemsService{
	createItems(itemsDTO){
		const {name, salePrice} = itemsDTO
		return itemsDAO.createItems(name, salePrice)
	}

}

module.exports = new ItemsService()