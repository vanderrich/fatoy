if(window.PaymentRequest) {
    // Use Payment Request API
} else {
    // Fallback to traditional checkout
    window.location.href = '/checkout/traditional';
}
const supportedPaymentMethods = [{
    supportedMethods: 'basic-card',
}];
const paymentDetails = {
    total: {
        label: 'Total',
        amount:{
            currency: 'USD',
            value: 0
        }
    }
};
// Options isn't required.
const options = {};

new PaymentRequest(
    supportedPaymentMethods,
    paymentDetails,
    options
);
const request = new PaymentRequest(
    supportedPaymentMethods,
    paymentDetails,
    options
);

// Call when you wish to show the UI to the user.
request.show().then().catch();
const supportedPaymentMethods = [{
    supportedMethods: 'name-of-payment-method',
    data: {
        // Optional data for this payment method
    }
}];

new PaymentRequest(supportedPaymentMethods, paymentDetails, options);
const creditCardPaymentMethod = {
    supportedMethods: 'basic-card',
};

const supportedPaymentMethods = [creditCardPaymentMethod];

new PaymentRequest(supportedPaymentMethods, paymentDetails, options);

const creditCardPaymentMethod = {
    supportedMethods: 'basic-card',
    data: {
      supportedNetworks: ['visa', 'mastercard', 'amex'],
    },
  };