const { Model } = require('objection');

class InvoiceItemsModel extends Model {
  static get tableName() {
    return 'invoice_items';
  };
  static get relationMappings() {
    // Importing models here is one way to avoid require loops.
    const Invoice = require('./invoice')
    const Items = require('./items')
    return {
      invoice: {
        relation: Model.HasManyRelation,
        modelClass: Invoice,
        join: {
          from: 'invoice_items.invoiceId',
          to: 'invoice.id'
        }
      },
      items: {
        relation: Model.HasManyRelation,
        modelClass: Items,
        join: {
          from: 'invoice_items.itemId',
          to: 'items.id'
        }
      },
    }
  }
}

module.exports = InvoiceItemsModel;