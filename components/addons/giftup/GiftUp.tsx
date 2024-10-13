'use client'

import React, { useEffect } from 'react'

export type GiftUpProps = {
	id: string
}

const GiftUp: React.FC<GiftUpProps> = (props) => {
	const { id } = props

	useEffect(() => {
		const loadScript = () => {
			const script = document.createElement('script')
			script.src = 'https://cdn.giftup.app/dist/gift-up.js'
			script.async = true

			script.onload = () => {
				//@ts-ignore
				window.giftup =
					//@ts-ignore
					window.giftup ||
					function () {
						//@ts-ignore
						;(window.giftup.q = window.giftup.q || []).push(arguments)
					}
				//@ts-ignore
				window.giftup('init', id)
			}

			document.body.appendChild(script)
		}

		//@ts-ignore
		if (id && window.giftup) {
			//@ts-ignore
			window.giftup('init', id)
		} else {
			loadScript()
		}

		return () => {
			let allScripts = document.getElementsByTagName('script')
			for (let i = 0; i < allScripts.length; i++) {
				const script = allScripts[i]
				if (script?.src?.includes('gift-up.js')) {
					//@ts-ignore
					script?.parentNode?.removeChild(script)
				}
			}
		}
	}, [id])

	if (!id) return null
	return (
		<div
			className="gift-up-target"
			data-site-id={id}
			data-platform="Other"
		></div>
	)
}

export default GiftUp
