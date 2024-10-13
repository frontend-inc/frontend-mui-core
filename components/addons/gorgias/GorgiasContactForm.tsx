'use client'

import React from 'react'

export type GorgiasContactFormProps = {
	src?: string
}

const GorgiasContactForm: React.FC<GorgiasContactFormProps> = (props) => {
	const { src } = props || {}
	if (!src) return null
	return (
		<div>
			<iframe src={src} />
		</div>
	)
}

export default GorgiasContactForm
