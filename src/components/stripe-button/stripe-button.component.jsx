import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price;
  const publishableKey = 'pk_test_dtqeYK95FJz5ewmFTRc6qaNQ00j2VICd8D'

  const onToken = token => {
    console.log(token);
    alert('Paymen Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Stoned Shop Ltd.'
      currency="JPY"
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is ¥${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton