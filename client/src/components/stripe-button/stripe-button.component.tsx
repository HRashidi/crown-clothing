import  React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios' ;


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_X427UX1l5l5Fl5kCNiOmpT8d00eVrq7bKg';

    const onToken = token => {
        
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(() => {
            alert('Payment successfull');
        }).catch(error => {
            console.log('Payment error: ', error);
            alert('There was a issue with your payment. Please make sure you use the provided credit cart.');
        })
        
    };

    return (
        <StripeCheckout 
            label= 'Pay Now'
            name= 'Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey= {publishableKey}
        />
    )
};

export default StripeCheckoutButton;
