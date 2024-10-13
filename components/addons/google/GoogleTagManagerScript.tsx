'use client'

import React from 'react'
import Head from 'next/head'

type GoogleTagManagerProps = {
	id?: string
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = (props) => {
	const { id } = props || {}
	if (!id) return null
	return (
		<Head>
			<script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
			></script>
		</Head>
	)
}

export default GoogleTagManager
