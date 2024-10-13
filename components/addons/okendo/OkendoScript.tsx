'use client'

import React from 'react'
import Head from 'next/head'

type OkendoScriptProps = {
	subscriberId?: string
}

const OkendoScript: React.FC<OkendoScriptProps> = (props) => {
	const { subscriberId } = props || {}
	if (!subscriberId) return null
	return (
		<Head>
			<meta name="oke:subscriber_id" content={subscriberId} />
			<script src="https://cdn-static.okendo.io/reviews-widget-plus/js/okendo-reviews.js"></script>
		</Head>
	)
}

export default OkendoScript
