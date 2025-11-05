let invoices = {
  unpaid: [],
  paid: [],

  add: function(name, amount) {
    this.unpaid.push({
      name,
      amount
    })
  },

  payInvoice: function(name) {
    let localUnpaid = []
    for(let i = 0; i < this.unpaid.length; i++) {
      if (this.unpaid[i].name === name) {
        this.paid.push(this.unpaid[i])
      } else {
        localUnpaid.push(this.unpaid[i])
      }
    }
    this.unpaid = localUnpaid
  },

  totalDue: function() {
    return this.unpaid.reduce((accum, invoice) => accum + invoice.amount, 0)
  },

  totalPaid: function() {
    return this.paid.reduce((accum, invoice) => accum + invoice.amount, 0)
  }
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice("Due North Development")
invoices.payInvoice("Slough Digital")

console.log(invoices.totalPaid())
console.log(invoices.totalDue())

