import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hf4GlFK7R8f5nngphsJDhBJegOopaRxK6YDstm45k2KJIikLALXt8QYo1C4RpmLaz6soZa9vECzKJ9nemOszbtq000Faii5io';
    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }
    return (
        <StripeCheckout
        
            label='Pay Now'
            name='Clothing Ecommcerce'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;