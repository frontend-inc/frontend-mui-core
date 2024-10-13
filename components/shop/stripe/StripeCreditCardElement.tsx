import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useAlerts } from '../../../hooks'
import { Icon } from '../..'

type StripeCreditCardElementProps = {
	handleSubmit: (stripeToken: string, last4: string) => void
	handleCancel: () => void
}

const StripeCreditCardElement: React.FC<StripeCreditCardElementProps> = (
	props
) => {
	const { handleSubmit, handleCancel } = props || {}
	const stripe = useStripe()
	const elements = useElements()

	const { showAlertError } = useAlerts()

	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (!stripe || !elements) {
			return
		}
		const cardElement = elements.getElement(CardElement)
		if (cardElement) {
			const res = await stripe.createToken(cardElement)
			if (res?.token) {
				const { id: stripeToken } = res.token
				const { last4 } = res.token.card
				handleSubmit(stripeToken, last4)
			} else {
				showAlertError('Please check your payment details')
			}
		}
	}

	return (
		<div className="flex flex-col space-y-4">
			<div className="px-4 py-2 shadow rounded">
				<CardElement className="text-2xl" />
			</div>
			<div className="flex flex-col space-y-2">
				<Button variant="default" onClick={handleClick}>
					<Icon name="CreditCard" className="mr-2 h-4 w-4" />
					Add Credit Card
				</Button>
				<Button variant="secondary" onClick={handleCancel}>
					Cancel
				</Button>
			</div>
			<p className="text-center text-sm text-muted-foreground">
				We support all major credit cards.
				<br />
				Secure SSL connection.
			</p>
		</div>
	)
}

export default StripeCreditCardElement
