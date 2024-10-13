'use client'

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

type GoogleAnalyticsProps = {
	id?: string
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = (props) => {
	const { id } = props || {}
	if (!id) return null
	return (
		<Head>
			<Script id="google-analytics" strategy="lazyOnload">
				{`window.dataLayer = window.dataLayer || []
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag('js', new Date())
        gtag('config', '${id}')
      `}
			</Script>
		</Head>
	)
}

export default GoogleAnalytics
