'use client'

import React from 'react'
import Script from 'next/script'

export type TypeformProps = {
	typeformId?: string
	justifyContent?: string
}

const Typeform: React.FC<TypeformProps> = (props) => {
	const { typeformId } = props
	if (!typeformId) return null
	return (
		<div className="w-full flex justify-center">
			<div data-tf-live={typeformId}></div>
			<Script src="//embed.typeform.com/next/embed.js" />
		</div>
	)
}

export default Typeform
