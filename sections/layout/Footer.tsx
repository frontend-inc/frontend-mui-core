'use client'

import React from 'react'
import { Footer } from '../../components'
import { FooterProps } from '../../components/ui/footer/Footer'
import { useRouter, useParams } from 'next/navigation'
import { useApp } from '../../hooks'

type LayoutFooterProps = FooterProps & {
	bgColor: string
	mode: 'light' | 'dark'
}

const AppFooter: React.FC<LayoutFooterProps> = (props) => {
	const router = useRouter()
	const { bgColor, mode, links = [], ...rest } = props || {}

	const { clientUrl } = useApp()

	const handleClick = (path: string) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${clientUrl}${path}`)
	}

	return (
		<div className={mode}>
			<Footer {...rest} links={links} handleClick={handleClick} />
		</div>
	)
}

export default AppFooter
