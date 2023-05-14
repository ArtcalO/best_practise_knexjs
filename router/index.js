const express = require('express');
const invoiceController = require('../controller/invoice');
const itemsController = require('../controller/items');
const invoiceItemsController = require('../controller/invoiceItems');

const router = express.Router();
router.post('/invoice', invoiceController.createInvoice);
router.get('/invoice', invoiceController.retrieveAllInvoice);
router.get('/invoice/:id', invoiceController.retrieveInvoice);
router.patch('/invoice/:id', invoiceController.updateInvoice);
router.delete('/invoice/:id', invoiceController.deleteInvoice);
router.post('/invoice/split-invoice/:id', invoiceController.splitInvoice);


router.post('/items', itemsController.createItems);
router.get('/items/', itemsController.retrieveAllItems);
router.get('/items/:id', itemsController.retrieveItems);
router.patch('/items/:id', itemsController.updateItems);
router.delete('/items/:id', itemsController.deleteItems);


router.post('/invoice-items', invoiceItemsController.createInvoiceItems);
router.get('/invoice-items', invoiceItemsController.retrieveAllInvoiceItems);
router.get('/invoice-items/:id', invoiceItemsController.getInvoiceItems);
router.patch('/invoice-items/:id', invoiceItemsController.updateInvoiceItems);
router.delete('/invoice-items/:id', invoiceItemsController.deleteInvoiceItems);


module.exports =  router;