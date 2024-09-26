import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default class PaypalButton extends React.Component {
	render() {
		const createOrder = (data, actions) => {
			return actions.order
				.create({
					purchase_units: [{
						description: 'Guitarra',
						amount: {
							currency_code: 'USD',
							value: this.props.valor,
						},
					}],
					// not needed if a shipping address is actually needed
					application_context: {
						shipping_preference: 'NO_SHIPPING',
					},
				}).
				then(orderID => {
					//puedes usar un useState para guardar el id de la orden
					return orderID;
				},
			);
		};
		const onApprove = payment => {
			// Congratulation, it came here means everything's fine!
			console.log('The payment was succeeded!', payment);
			// You can bind the "payment" object's value to your state or props
			// or whatever here, please see below for sample returned data
		};
		const onCancel = data => {
			// User pressed "cancel" or close Paypal's popup!
			console.log('The payment was cancelled!', data);
			// You can bind the "data" object's value to your state or props or
			// whatever here, please see below for sample returned data
		};
		const onError = error => {
			// The main Paypal's script cannot be loaded or somethings block
			// the loading of that script!
			console.log('Error!', error);
			// Because the Paypal's main script is loaded asynchronously from
			// "https://www.paypalobjects.com/api/checkout.js"
			// => sometimes it may take about 0.5 second for everything to get set,
			// or for the button to appear
		};
		const options = {
			'client-id':'CLienteID',
		};
		return (
			<PayPalScriptProvider options={options}>
				<PayPalButtons
					onApprove={onApprove}
					onCancel={onCancel}
					onError={onError}
					createOrder={createOrder}
				/>
			</PayPalScriptProvider>
		);
	}
}