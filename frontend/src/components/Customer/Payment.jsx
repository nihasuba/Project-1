import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { invoice, totalAmount } = location.state; // Retrieve invoice and total amount from CartItems

    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentError, setPaymentError] = useState('');

    // Handle payment submission
    const handlePayment = () => {
        if (!paymentMethod) {
            setPaymentError('Please select a payment method.');
            return;
        }
        setPaymentError('');

        // Simulate payment process, then navigate to a success page
        console.log('Proceeding with payment method:', paymentMethod);

        // After payment processing, navigate to payment success page
        navigate('/customer/OrderSuccess', { 
            state: { 
                invoice, 
                totalAmount, 
                paymentMethod 
            } 
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Payment Page</h2>

            <div className="card mt-4">
                <div className="card-body">
                    <h5><strong>Invoice ID:</strong> {invoice.id}</h5>
                    <h5><strong>Total Amount:</strong> Rs. {totalAmount}.00</h5>

                    {/* Payment Method Selection */}
                    <div className="mt-4">
                        <h4>Select Payment Method:</h4>
                        <Form>
                            <Form.Check 
                                type="radio" 
                                label="Credit Card" 
                                name="paymentMethod" 
                                value="credit_card"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <Form.Check 
                                type="radio" 
                                label="PayPal" 
                                name="paymentMethod" 
                                value="paypal"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <Form.Check 
                                type="radio" 
                                label="Cash on Delivery" 
                                name="paymentMethod" 
                                value="cash_on_delivery"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                        </Form>

                        {/* Display error if no payment method is selected */}
                        {paymentError && <p className="text-danger mt-3">{paymentError}</p>}
                    </div>

                    {/* Proceed to Payment Button */}
                    <div className="text-center mt-4">
                        <Button variant="primary" onClick={handlePayment}>
                            Proceed to Pay
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;


// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// function Payment() {
//     const { state } = useLocation();
//     const { invoice } = state || {};
//     const navigate = useNavigate();

//     if (!invoice) {
//         return <div>No invoice details found. Please go back to the cart and place an order.</div>;
//     }

//     const handlePayment = () => {
//         // Logic to handle payment (e.g., redirect to payment gateway or complete payment process)
//         console.log("Payment completed for invoice:", invoice);
//         // After payment, navigate to a success or order confirmation page
//         navigate('/customer/order-success', { state: { invoice } });
//     };

//     return (
//         <div className="card">
//             <div className="card-header">
//                 <h3>Payment</h3>
//             </div>
//             <div className="card-body">
//                 <p><strong>Total Amount:</strong> {invoice.total_amount}</p>
//                 <button onClick={handlePayment} className="btn btn-success">Proceed with Payment</button>
//             </div>
//         </div>
//     );
// }

// export default Payment;
