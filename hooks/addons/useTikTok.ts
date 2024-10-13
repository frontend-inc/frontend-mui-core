'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import TiktokPixel from 'tiktok-pixel'

type TiktokPixelProps = {
	tikTokPixelId: string
}

// Implementation of the Tiktok Pixel
// https://www.npmjs.com/package/tiktok-pixel
const useTiktok = (props: TiktokPixelProps) => {
	const pathname = usePathname()

	const { tikTokPixelId } = props || {}

	useEffect(() => {
		if (tikTokPixelId) {
			TiktokPixel.init(tikTokPixelId, {}, { debug: false })
		}
	}, [tikTokPixelId])

	useEffect(() => {
		if (tikTokPixelId) {
			TiktokPixel.pageView()
		}
	}, [tikTokPixelId, pathname])

	const trackAddToCart = (data) => {
		TiktokPixel.track('AddToCart', data)
	}

	const trackCustomEvent = (custom: string) => {
		//@ts-ignore
		TiktokPixel.track(custom)
	}

	return {
		trackAddToCart,
		trackCustomEvent,
	}
}

export default useTiktok
