exports.seed = async function(knex){
  await knex.raw('TRUNCATE TABLE "invoice" CASCADE');
  await knex.raw('TRUNCATE TABLE "items" CASCADE');
  await knex.raw('TRUNCATE TABLE "invoice_items" CASCADE');

  await knex('invoice').insert([
    {
      id:1,
      number:15,
      customerName:'Niyungeko Carmel',
      total:3
    },
    {
      id:2,
      number:16,
      customerName:'Ngendakumana Hermes',
      total:4
    },
  ]);

  await knex('items').insert([
    {id:1, name:"Orange", salePrice:1500},
    {id:2, name:"Avocado", salePrice:1500},
  ]);

  await knex('invoice_items').insert([
    {
      id:1,
      invoiceId:1,
      itemId:1,
      quantity:3,
      unit_price:200,
      totalPrice:600
    },
    {
      id:2,
      invoiceId:2,
      itemId:2,
      quantity:4,
      unit_price:200,
      totalPrice:1200
    },
  ]);
};