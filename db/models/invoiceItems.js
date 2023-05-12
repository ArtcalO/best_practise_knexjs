const { Model } = require('objection');

class InvoiceItemsModel extends Model {
  static get tableName() {
    return 'invoice_items';
  }
}

module.exports = InvoiceItemsModel;