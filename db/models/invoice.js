const { Model } = require('objection');

class InvoiceModel extends Model {
  static get tableName() {
    return 'invoice';
  };
  static get relationMappings() {
    // Importing models here is one way to avoid require loops.
    const InvoiceItems = require('./invoiceItems')
    return {
      items: {
        relation: Model.HasManyRelation,
        modelClass: InvoiceItems,
        join: {
          from: 'invoice_items.invoiceId',
          to: 'invoice.id',
        }
      }
    }
  }
}

module.exports = InvoiceModel;