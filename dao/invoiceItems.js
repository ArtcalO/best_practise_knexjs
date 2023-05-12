const db = require('../db/db')

class InvoiceItemsDAO{
	async createInvoiceItems(invoiceId,itemId,quantity,unitPrice,totalPrice){
		const [id] = await db('invoice_items').insert({
			invoice_id:invoiceId,
			item_id:itemId,
			quantity,
			unit_price:unitPrice,
			total_price:totalPrice,
		})
		.returning('id')

		return id;
	}
}

module.exports = new InvoiceItemsDAO();