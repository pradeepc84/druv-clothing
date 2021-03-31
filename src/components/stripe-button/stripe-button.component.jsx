import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IaD4NSEnAGOBMVRZwu92LVoA6SvAEICs6GyxSxaMpHtsQq0kIdHVnUcYs0Du7WdOYaiG3WV7h6vHLVBD7ks4GOv00WQzVODns'

    const onToken = token=>{
        console.log('token=',token);
        alert('Payment Successful')
    }
    return(
    <StripeCheckout
    label = 'Pay Now'
    name='Mad Clothing'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your Total Is: $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey = {publishableKey}
    />
)
}

export default StripeCheckoutButton;