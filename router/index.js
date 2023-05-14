const express = require('express');
const invoiceController = require('../controller/invoice');

const router = express.Router();
router.post('/invoice', invoiceController.createInvoice);
router.patch('/invoice/:id', invoiceController.updateInvoice);
router.delete('/invoice/:id', invoiceController.deleteInvoice);
router.post('/invoice/split-invoice/:id', invoiceController.splitInvoice);
module.exports = router;