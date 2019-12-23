import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price;
  const publishableKey = 'pk_test_dtqeYK95FJz5ewmFTRc6qaNQ00j2VICd8D';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('お支払いが完了しました');
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'お支払いに際して問題が発生しました。利用可能なカードをご利用ください'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Stoned Shop Ltd."
      currency="JPY"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ¥${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
