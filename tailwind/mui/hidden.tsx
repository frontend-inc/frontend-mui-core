'use client'

import React from 'react'
import { useMediaQuery } from 'react-responsive'

type HiddenProps = {
	children: React.ReactNode
	smDown?: boolean
	smUp?: boolean
	mdDown?: boolean
	mdUp?: boolean
}

const Hidden: React.FC<HiddenProps> = ({
	children,
	smDown,
	smUp,
	mdDown,
	mdUp,
}) => {
	const isSmallScreen = useMediaQuery({ maxWidth: 639 })
	const isMediumScreen = useMediaQuery({ minWidth: 640, maxWidth: 767 })
	const isLargeScreen = useMediaQuery({ minWidth: 768 })

	const shouldHide = () => {
		if (smDown && (isSmallScreen || isMediumScreen)) return true
		if (smUp && (isMediumScreen || isLargeScreen)) return true
		if (mdDown && (isSmallScreen || isMediumScreen)) return true
		if (mdUp && isLargeScreen) return true
		return false
	}

	if (shouldHide()) {
		return null
	}

	return <>{children}</>
}

export { Hidden }
