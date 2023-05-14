const express = require('express');
const invoiceController = require('../controller/invoice');

const router = express.Router();
router.post('/invoice', invoiceController.createInvoice);
router.get('/invoice/:id', invoiceController.retrieveInvoice);
router.get('/invoice', invoiceController.retrieveAllInvoice);
router.patch('/invoice/:id', invoiceController.updateInvoice);
router.delete('/invoice/:id', invoiceController.deleteInvoice);
router.post('/invoice/split-invoice/:id', invoiceController.splitInvoice);


router.post('/items', invoiceController.createInvoice);
router.get('/items/:id', invoiceController.retrieveInvoice);
router.patch('/items/:id', invoiceController.updateInvoice);
router.delete('/items/:id', invoiceController.deleteInvoice);


/*router.post('/invoice-items', invoiceController.createInvoice);
router.get('/invoice-items/:id', invoiceController.getInvoice);
router.patch('/invoice-items/:id', invoiceController.updateInvoice);
router.delete('/invoice-items/:id', invoiceController.deleteInvoice);*/


module.exports =  router;