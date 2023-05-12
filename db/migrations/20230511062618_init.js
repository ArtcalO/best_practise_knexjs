exports.up = function(knex) {
	return knex.schema
		.createTable('invoice', table=>{
			table.increments('id');
			table.integer('number').notNullable();
			table.string("customer_name").notNullable();
			table.float("total").notNullable();
			table.timestamps(true, true);

		})
		.createTable('items', table=>{
			table.increments('id');
			table.string("name").notNullable();
			table.float("sale_price").notNullable();
			table.timestamps(true, true);

		})
		.createTable('invoice_items', table=>{
			table.increments('id');
			table.integer('invoice_id').reference('id').inTable('invoice');
			table.integer('item_id').reference('id').inTable('items');
			table.integer("quantity").notNullable();
			table.float("unit_price").notNullable();
			table.float("total_price").notNullable();
			table.timestamps(true, true);

		})
};

exports.down = function(knex) {
		return knex.schema
			.dropTableIfExists('invoice')
			.dropTableIfExists('items')
			.dropTableIfExists('invoice_items')
			.dropTableIfExists('person')
};
