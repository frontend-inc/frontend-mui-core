'use client'

import React from 'react'
import { ShopifyProductType } from 'frontend-shopify'
import Image from 'next/image'
import { findVariantByColor } from 'frontend-shopify'
import { cn } from '../../../shadcn/lib/utils'

type ShopifyColorVariantsOptionsProps = {
	product: ShopifyProductType
	name: string
	values: any[]
	selected: string
	handleChange: (name: string, value: string) => void
	styles?: React.CSSProperties
}

const ShopifyColorVariantsOptions: React.FC<
	ShopifyColorVariantsOptionsProps
> = ({ product, name, values, selected, handleChange, styles }) => {
	return (
		<div className="flex flex-col items-start justify-center" style={styles}>
			<div className="flex flex-row flex-wrap gap-2.5">
				{values?.map((value) => {
					let variant = findVariantByColor(product, value)
					return (
						<button
							key={value}
							className={cn(
								'p-0 overflow-hidden rounded-lg border-3 border-transparent hover:opacity-85 transition-opacity',
								'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
								selected === value && 'border-primary opacity-100'
							)}
							onClick={() => handleChange(name, value)}
						>
							<Image
								height={72}
								width={72}
								src={variant?.image?.url}
								alt={variant?.image?.altText || `${value} color variant`}
								className="object-contain hover:scale-110 transition-transform"
							/>
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default ShopifyColorVariantsOptions
