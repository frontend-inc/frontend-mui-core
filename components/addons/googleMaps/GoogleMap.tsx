'use client'

import React, { useEffect, useState } from 'react'
import { Map, useMap } from '@vis.gl/react-google-maps'
import { GoogleMarkerType, DisplayFieldType } from '../../../types'
import { MAP_CONFIGS, MapConfig } from './styles/mapConfigs'
import GoogleMarker from './GoogleMarker'
import { cn } from '../../../shadcn/lib/utils'

export type GoogleMapProps = {
	darkTheme?: boolean
	resources: any[]
	height?: number
	width?: number | string
	zoom?: number
	enableBorder?: boolean
	displayFields?: DisplayFieldType[]
}

export default function GoogleMap({
	darkTheme = false,
	height = 300,
	width,
	resources,
	zoom = 16,
	enableBorder = false,
	displayFields = [],
}: GoogleMapProps) {
	const [mapConfig, setMapConfig] = useState<MapConfig>(MAP_CONFIGS[0])

	const NYC_LAT = 40.7128
	const NYC_LNG = -73.935242
	const [center, setCenter] = useState({ lat: NYC_LAT, lng: NYC_LNG })

	useEffect(() => {
		setMapConfig(darkTheme ? MAP_CONFIGS[1] : MAP_CONFIGS[0])
	}, [darkTheme])

	const [googleMarkers, setGoogleMarkers] = useState<GoogleMarkerType[]>([])

	const handleSetMarkers = (resources) => {
		let markers = resources?.map((res) => ({
			lat: res?.lat,
			lng: res?.lng,
			label: res?.title,
			resource: res,
		}))
		setGoogleMarkers(markers?.length ? markers : [])
	}

	const map = useMap()

	useEffect(() => {
		if (map) {
			map.setCenter(center)
		}
	}, [center, map])

	useEffect(() => {
		if (googleMarkers?.length > 0) {
			setCenter({
				lat: googleMarkers[0]?.lat,
				lng: googleMarkers[0]?.lng,
			})
		}
	}, [googleMarkers])

	useEffect(() => {
		if (resources) {
			handleSetMarkers(resources)
		}
	}, [resources])

	if (googleMarkers?.length <= 0) return null

	return (
		<div
			className={cn(
				'sticky rounded overflow-hidden transition-shadow duration-300 hover:shadow-md',
				enableBorder && 'border border-divider'
			)}
			style={{
				height: height,
				width: width || '100%',
			}}
		>
			<Map
				scaleControl
				fullscreenControl
				mapTypeControl={false}
				streetViewControl={false}
				mapId={mapConfig.mapId || undefined}
				mapTypeId={mapConfig.mapTypeId}
				styles={mapConfig.styles}
				defaultZoom={zoom}
				defaultCenter={center}
			>
				{googleMarkers.map((marker: any, index: number) => (
					<GoogleMarker
						key={index}
						marker={marker}
						displayFields={displayFields}
					/>
				))}
			</Map>
		</div>
	)
}
