function createInvoice(services) {
  services = services || {};
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],

    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(payment) {
      this.payments.push(payment);
    },

    addPayments: function(payments) {
      let i;

      for (i = 0; i < payments.length; i += 1) {
        this.addPayment(payments[i]);
      }
    },

    paymentTotal: function() {
      let totalPaid = 0;
      let i;

      for (i = 0; i < this.payments.length; i += 1) {
        totalPaid += this.payments[i].total();
      };

      return totalPaid;
    },

    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
  };
}

function createPayment(payment = {}) {
  return {
    phone: payment.phone || 0,
    internet: payment.internet || 0,
    amount: payment.amount,

    total() {
      return this.amount || this.phone + this.internet;
    }
  }
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0
