import React from 'react'
import { VimeoEmbed } from '../..'
import { ShowProps } from './ShowItem'
import { get } from 'lodash'
import ShowLayout from './ShowLayout'

export type ShowVimeoProps = ShowProps & {
	fieldName: string
}

const VimeoVideo: React.FC<ShowVimeoProps> = (props) => {
	const {
		resource,
		actions,
		fieldName,
		displayFields = [],
		...rest
	} = props || {}
	const src = get(resource, fieldName)
	return (
		<ShowLayout
			actions={actions}
			resource={resource}
			displayFields={[]}
			{...rest}
		>
			<VimeoEmbed src={src} />
		</ShowLayout>
	)
}

export default VimeoVideo
