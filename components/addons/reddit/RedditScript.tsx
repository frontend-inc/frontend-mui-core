'use client'

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

type RedditScriptProps = {
	id?: string
}

const RedditScript: React.FC<RedditScriptProps> = (props) => {
	const { id } = props || {}
	if (!id) return null
	return (
		<Head>
			<Script id="google-analytics" strategy="lazyOnload">
				{`!(function (w, d) {
            if (!w.rdt) {
              var p = (w.rdt = function () {
                p.sendEvent
                  ? p.sendEvent.apply(p, arguments)
                  : p.callQueue.push(arguments)
              })
              p.callQueue = []
              var t = d.createElement('script')
              ;(t.src = 'https://www.redditstatic.com/ads/pixel.js'), (t.async = !0)
              var s = d.getElementsByTagName('script')[0]
              s.parentNode.insertBefore(t, s)
            }
          })(window, document)
          rdt('init', '${id}', {
            optOut: false,
            useDecimalCurrencyValues: true,
          })
          rdt('track', 'PageVisit')        
        `}
			</Script>
		</Head>
	)
}

export default RedditScript
