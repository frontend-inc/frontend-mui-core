import React, { useContext } from 'react'
import {
	Stack,
	Button,
	Divider,
	Typography,
	List,
	ListItem,
	ListItemText,
} from '../../../tailwind'
import { useRouter } from 'next/router'
import { Label } from '../..'
import { AppContext } from '../../../context'
import { formatCurrency } from 'frontend-shopify'

type PriceCardProps = {
	label?: string
	title: string  
	description?: string
	features?: string[]
	price: string | number   
	buttonText?: string
	url?: string
}

const PriceCard: React.FC<PriceCardProps> = (props) => {
	const router = useRouter()
	const { setAuthOpen } = useContext(AppContext) as any
	const { label, title, description, features, buttonText, price, url } = props

	const handleClick = () => {
		if (url) {
			router.push(url)
		}
	}

	return (
		<div className="w-full border border-divider rounded p-2 flex flex-col justify-between">
			<Stack className="min-h-[300px]" direction="column" spacing={1}>
				{label && (
					<div>
						<Label label={label} />
					</div>
				)}
				<Typography variant="body1">{title}</Typography>
				<Typography variant="h5">{price}</Typography>
				<Divider />
				<List>
					{features?.map((feature, i) => (
						<ListItem key={i}>
							<ListItemText primary={feature} />
						</ListItem>
					))}
				</List>
			</Stack>
			{buttonText && (
				<Button onClick={handleClick} variant="contained">
					{buttonText}
				</Button>
			)}
		</div>
	)
}

export default PriceCard
