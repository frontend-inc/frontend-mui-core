'use client'

import React, { useEffect, useState } from 'react'
import ScriptContext from './ScriptContext'
import {
	GorgiasChat,
	GoogleAnalyticsScript,
	GoogleTagManagerScript,
	HotJarScript,
	KlaviyoScript,
	OkendoScript,
	RedditScript,
	VisualWebsiteOptimizerScript,
} from '../components/addons'
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook'
import { useFacebookPixel, useTikTok } from '../hooks/addons'
import Script from 'next/script'
import { AnalyticsBrowser } from '@segment/analytics-next'

type ScriptProviderProps = {
	disableAnalytics?: boolean
	disableChat?: boolean
	okendoSubscriberId?: string
	googleTagManagerId?: string
	googleAnalyticsId?: string
	gorgiasChatId?: string
	gorgiasContactFormSrc?: string
	gtmId?: string
	hotJarId?: string
	redditPixelId?: string
	segmentWriteKey?: string
	tikTokPixelId?: string
	facebookPixelId?: string
	klaviyoCompanyId?: string
	visualWebsiteOptimizerId?: string
	children: React.ReactNode
}

const ScriptProvider = (props: ScriptProviderProps) => {
	const {
		disableAnalytics = false,
		disableChat = false,
		okendoSubscriberId,
		googleTagManagerId,
		googleAnalyticsId,
		gorgiasChatId,
		gorgiasContactFormSrc,
		gtmId,
		facebookPixelId,
		hotJarId,
		redditPixelId,
		segmentWriteKey,
		tikTokPixelId,
		visualWebsiteOptimizerId,
		klaviyoCompanyId,
		children,
	} = props || {}

	const [segment, setSegment] = useState(null)

	useTikTok({ tikTokPixelId: !disableAnalytics && tikTokPixelId })
	useFacebookPixel({ facebookPixelId: !disableAnalytics && facebookPixelId })

	useEffect(() => {
		if (!disableAnalytics && segmentWriteKey) {
			setSegment(
				AnalyticsBrowser.load({
					writeKey: segmentWriteKey,
				})
			)
		}
	}, [disableAnalytics, segmentWriteKey])

	const value = {
		segment,
		disableAnalytics,
		okendoSubscriberId,
		googleTagManagerId,
		googleAnalyticsId,
		gorgiasChatId,
		redditPixelId,
		segmentWriteKey,
	}

	const wrapGTMProvider = (gtmId, children) => {
		return !gtmId ? (
			children
		) : (
			<GTMProvider state={{ id: gtmId }}>{children}</GTMProvider>
		)
	}

	return (
		<ScriptContext.Provider value={value}>
			{!disableAnalytics && (
				<>
					{googleTagManagerId && (
						<GoogleTagManagerScript id={googleTagManagerId} />
					)}
					{googleAnalyticsId && (
						<GoogleAnalyticsScript id={googleAnalyticsId} />
					)}
					{redditPixelId && <RedditScript id={redditPixelId} />}
					{hotJarId && <HotJarScript id={hotJarId} />}
					{visualWebsiteOptimizerId && (
						<VisualWebsiteOptimizerScript id={visualWebsiteOptimizerId} />
					)}
				</>
			)}
			{!disableChat && (
				<>{gorgiasChatId && <GorgiasChat id={gorgiasChatId} />}</>
			)}
			{klaviyoCompanyId && <KlaviyoScript id={klaviyoCompanyId} />}
			{gorgiasContactFormSrc && (
				<Script strategy="beforeInteractive" src={gorgiasContactFormSrc} />
			)}
			{okendoSubscriberId && <OkendoScript subscriberId={okendoSubscriberId} />}
			{wrapGTMProvider(gtmId, children)}
		</ScriptContext.Provider>
	)
}

export default ScriptProvider
