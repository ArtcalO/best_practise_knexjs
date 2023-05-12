const { Model } = require('objection');

class InvoiceModel extends Model {
  static get tableName() {
    return 'invoice';
  }
}

module.exports = InvoiceModel;