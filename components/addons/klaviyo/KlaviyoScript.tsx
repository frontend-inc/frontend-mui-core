'use client'

import React from 'react'
import Script from 'next/script'

type KlaviyoScriptProps = {
	id?: string
}

const KlaviyoScript: React.FC<KlaviyoScriptProps> = (props) => {
	const { id } = props || {}
	if (!id) return null
	return (
		<Script
			src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${id}`}
		/>
	)
}

export default KlaviyoScript
