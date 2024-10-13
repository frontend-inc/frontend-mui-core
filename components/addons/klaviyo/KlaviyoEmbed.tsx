'use client'

import React from 'react'

type KlaviyoEmbedProps = {
	formId?: string
}

const KlaviyoEmbed: React.FC<KlaviyoEmbedProps> = (props) => {
	const { formId } = props || {}
	if (!formId) return null
	return (
		<div className="py-2">
			<div className={`klaviyo-form-${formId}`}></div>
		</div>
	)
}

export default KlaviyoEmbed
