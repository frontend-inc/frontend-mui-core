'use client'

import React, { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

type FacebookPixelProps = {
	facebookPixelId: string
}

const useFacebookPixel = (props: FacebookPixelProps) => {
	const { facebookPixelId } = props || {}

	const router = useRouter()

	const options = {
		autoConfig: true,
		debug: false,
	}

	useEffect(() => {
		const trackFbPageView = async () => {
			const { default: ReactPixel } = await import('react-facebook-pixel')
			ReactPixel.init(facebookPixelId, null, options)
			ReactPixel.pageView()
		}
		if (facebookPixelId) {
			trackFbPageView()
		}
		return () => {}
	}, [facebookPixelId, router?.pathname])
}

export default useFacebookPixel
