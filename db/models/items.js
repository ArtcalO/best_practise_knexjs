const { Model } = require('objection');

class ItemsModel extends Model {
  static get tableName() {
    return 'items';
  }
}

module.exports = ItemsModel;