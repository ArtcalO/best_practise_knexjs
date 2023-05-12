const db = require('../db/db')

class ItemsDAO{
	async createItems(name, salePrice){
		const [id] = await db('items').insert({
			name,
			sale_price:salePrice,
		})
		.returning('id')

		return id;
	}
}

module.exports = new ItemsDAO();