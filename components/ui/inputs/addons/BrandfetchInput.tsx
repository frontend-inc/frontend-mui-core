'use client'

import React, { useState } from 'react'
import { useBrandfetch, useMedia } from '../../../../hooks'
import {
	Image,
	Label,
	TouchableOpacity,
	BrandfetchAutosuggest,
	CircularLoader,
} from '../../..'
import PoweredByBrandfetch from './PoweredByBrandfetch'

type BrandfetchInputProps = {
	onComplete: (resource: any) => void
}

const BrandfetchInput: React.FC<BrandfetchInputProps> = (props) => {
	const { onComplete } = props || {}

	const { resizeLogo, brand, fetchBrand } = useBrandfetch()

	const { loading, uploadFromUrl } = useMedia()

	const handleBrandChange = (ev) => {
		const { value } = ev.target
		fetchBrand(value)
	}

	const handleClick = async (logoFormat, logo) => {
		const { src, format } = logoFormat || {}
		let domain = logo?.domain || 'logo'
		const filename = domain + '.' + format
		const resizedUrl = resizeLogo(src, { width: 512, height: 512 })
		const resp = await uploadFromUrl(resizedUrl, filename)
		if (onComplete) {
			onComplete(resp)
		}
	}

	return (
		<div className="flex flex-col space-y-4">
			<BrandfetchAutosuggest handleChange={handleBrandChange} />
			<PoweredByBrandfetch />
			{loading && <CircularLoader />}
			<div className="grid grid-cols-[repeat(auto-fill,minmax(164px,1fr))] gap-4">
				{!loading &&
					brand?.logos?.map((logo) => (
						<React.Fragment key={logo.domain}>
							{logo?.formats
								?.filter((f) => f.format != 'svg')
								.map((format, index) => (
									<div
										key={`${logo.domain}-${index}`}
										className="flex flex-col space-y-4 bg-background p-4 rounded transition-shadow duration-300 hover:shadow-md"
									>
										<TouchableOpacity
											handleClick={() => handleClick(format, logo)}
										>
											<div className="relative rounded overflow-hidden h-[164px] w-[164px] flex items-center justify-center">
												<Image
													src={format?.src}
													height={164}
													width={164}
													alt={logo?.domain}
													objectFit="contain"
												/>
											</div>
										</TouchableOpacity>
										<div>
											<Label label={format.format} />
										</div>
									</div>
								))}
						</React.Fragment>
					))}
			</div>
		</div>
	)
}

export default BrandfetchInput
