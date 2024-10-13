'use client'

import React from 'react'
import { MetafieldAutosuggest } from '../..'
import { MetafieldAutosuggestProps } from './MetafieldAutosuggest'

const UserMetafieldAutosuggest: React.FC<MetafieldAutosuggestProps> = (
	props
) => {
	return (
		<MetafieldAutosuggest
			{...props}
			query={{
				filters: {
					AND: [
						{
							metafield_type: { eq: 'User' },
						},
					],
				},
			}}
		/>
	)
}

export default UserMetafieldAutosuggest
