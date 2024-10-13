'use client'

import React, { useState } from 'react'
import { Typography } from '../../../tailwind'
import {
	AdvancedMarker,
	Pin,
	useAdvancedMarkerRef,
	InfoWindow,
} from '@vis.gl/react-google-maps'
import { GoogleMarkerType, DisplayFieldType } from '../../../types'
import { Image, DisplayFields } from '../../../components'

export type GoogleMarkerProps = {
	marker: GoogleMarkerType
	displayFields: DisplayFieldType[]
}

// https://visgl.github.io/react-google-maps/docs/api-reference/components/map
// https://visgl.github.io/react-google-maps/docs/api-reference/components/advanced-marker
const GoogleMarker: React.FC<GoogleMarkerProps> = (props) => {
	const { marker, displayFields } = props

	const NYC_LAT = 40.7128
	const NYC_LNG = -74.006

	const position = {
		lat: marker?.lat || NYC_LAT,
		lng: marker?.lng || NYC_LNG,
	}

	const [markerRef, setMarkerRef] = useAdvancedMarkerRef()
	const [infoWindowShown, setInfoWindowShown] = useState(false)

	const handleMarkerClick = (ev) => {
		setInfoWindowShown(!infoWindowShown)
	}

	const handleClose = () => {
		setInfoWindowShown(false)
	}

	const { resource } = marker || {}
	return (
		<>
			<AdvancedMarker
				ref={markerRef}
				position={position}
				onClick={handleMarkerClick}
			>
				<Pin />
			</AdvancedMarker>
			{infoWindowShown && (
				<InfoWindow anchor={setMarkerRef} onClose={handleClose}>
					<div className="flex flex-col space-y-2 min-w-[160px]">
						{resource?.image?.url && (
							<div className="w-[64px] h-[64px]">
								<Image
									alt={resource?.title}
									aspectRatio={1.0}
									src={resource?.image?.url}
								/>
							</div>
						)}
						<Typography variant="subtitle2" color="text-gray-900">
							{marker?.label}
						</Typography>
						<DisplayFields fields={displayFields} resource={resource} />
					</div>
				</InfoWindow>
			)}
		</>
	)
}

export default GoogleMarker
