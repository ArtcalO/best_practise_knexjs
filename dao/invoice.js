const db = require('../db/db')

class InvoiceDAO{
	async createPerson(number, customerName, total){
		const [id] = await db('invoice').insert({
			number,
			customer_name:customerName,
			total:total,
		})
		.returning('id')

		return id;
	}
}

module.exports = new InvoiceDAO();