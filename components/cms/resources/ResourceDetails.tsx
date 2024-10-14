'use client'

import React from 'react'
import { DisplayFields, Image, Field } from '../../../components'
import { Typography } from '../../../tailwind'
import { DisplayFieldType } from '../../../types'

type ResourceDetailsProps = {
	avatar?: React.ReactNode
	resource: any
	primary: string
	secondary?: string
	label?: string
	image?: string
	fields: DisplayFieldType[]
	direction?: 'row' | 'column'
}

const ResourceDetails: React.FC<ResourceDetailsProps> = (props) => {
	const {
		avatar,
		resource,
		primary,
		secondary,
		label,
		image,
		fields = [],
		direction = 'column',
	} = props || {}

	return (
		<div className="w-full flex flex-col space-y-2">
			{image && (
				<div className="w-full h-[200px]">
					<Image 
            alt={label} 
            src={image} 
            label={label} 
          />
				</div>
			)}
			{avatar && avatar}
			<Typography variant="h5" >
				{primary}
			</Typography>
			{secondary && (
				<Typography variant="body2" className="text-muted-foreground">
					{secondary}
				</Typography>
			)}
      <DisplayFields 
        fields={fields} 
        resource={resource}
        direction={direction}
      />
		</div>
	)
}

export default ResourceDetails
