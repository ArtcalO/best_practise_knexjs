const invoiceDAO =  require('../dao/invoice')
class InvoiceService{
	createInvoice(invoiceDTO){
		const {number, customer_name, total} = invoiceDTO
		return invoiceDAO.createInvoice(number, customer_name, total)
	};

	updateInvoice(id, invoiceDTO){
		return invoiceDAO.updateInvoice(id, invoiceDTO)
	};
	deleteInvoice(id){
		return invoiceDAO.deleteInvoice(id)
	};
	retrieveInvoice(id){
		console.log(id)
		return invoiceDAO.retrieveInvoice(id)
	};
	retrieveAllInvoice(){
		return invoiceDAO.retrieveAllInvoice()
	};
	async splitInvoice(id, data){
		let invoicesTab=[]
		const existingInvoice = data.shift()
		await this.updateInvoice(id, existingInvoice).then((res)=>{
			invoicesTab.push(res)
		})
		let paused=true
		if(paused)
			data.forEach(async d=>{
				await this.createInvoice(d).then((res)=>{
					invoicesTab.push(res)
					console.log(invoicesTab)
				})
				paused=false
			})
		if(!paused)
			return invoicesTab
	};

}

module.exports = new InvoiceService()
