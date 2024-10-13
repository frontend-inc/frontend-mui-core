'use client'

import React from 'react'
import Head from 'next/head'

type VisualWebsiteOptimizerScriptProps = {
	id?: string
}

const VisualWebsiteOptimizerScript: React.FC<
	VisualWebsiteOptimizerScriptProps
> = (props) => {
	const { id } = props || {}
	if (!id) return null
	return (
		<Head>
			<script
				async
				referrerPolicy="no-referrer-when-downgrade"
				src={`https://dev.visualwebsiteoptimizer.com/lib/${id}.js`}
				id="vwoCode"
			></script>
		</Head>
	)
}

export default VisualWebsiteOptimizerScript
