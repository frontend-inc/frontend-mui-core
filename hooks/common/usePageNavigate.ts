'use client'

import React from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useApp } from '../../hooks'

type PageNavigateProps = {
	baseUrl?: string
}

const usePageNavigate = (props: PageNavigateProps) => {
	const { clientUrl } = useApp()
	const router = useRouter()

	const navigate = (item, page) => {
		const { handle, baseUrl } = item || {}
		const { handle: pageHandle } = page || {}

		let url = `${clientUrl}/${pageHandle}`
		switch (page?.page_type) {
			case 'show':
				url = `${clientUrl}${baseUrl}/${pageHandle}/${handle}`
				break
			case 'edit':
				url = `${clientUrl}${baseUrl}/${pageHandle}/${handle}`
				break
			case 'new':
				url = `${clientUrl}${baseUrl}/${pageHandle}/${handle}`
				break
		}
		router.push(url)
	}

	return { navigate }
}

export default usePageNavigate
