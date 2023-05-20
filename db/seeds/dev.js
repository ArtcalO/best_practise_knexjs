exports.seed = async function(knex){
  await knex.raw('TRUNCATE TABLE "invoice" CASCADE');
  await knex.raw('TRUNCATE TABLE "items" CASCADE');
  await knex.raw('TRUNCATE TABLE "invoice_items" CASCADE');

  await knex('items').insert([
    {id:1, name:"Orange",quantity:20, salePrice:1500},
    {id:2, name:"Avocado",quantity:20, salePrice:1500},
  ]);
};