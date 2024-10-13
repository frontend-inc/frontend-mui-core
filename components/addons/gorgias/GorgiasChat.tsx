'use client'

import React from 'react'
import Head from 'next/head'

type GorgiasChatProps = {
	id?: string
}

const GorgiasChat: React.FC<GorgiasChatProps> = (props) => {
	const { id } = props || {}
	if (!id) return null
	return (
		<Head>
			<script
				id="gorgias-chat-widget-install-v3"
				src={`https://config.gorgias.chat/bundle-loader/${id}`}
			></script>
		</Head>
	)
}

export default GorgiasChat
