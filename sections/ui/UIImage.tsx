import React from 'react'
import { Section } from '../../components'
import { Image } from '../../components'
import { ImageProps } from '../../components/ui/images/Image'
import { SectionProps } from '../../types'

type UIImageProps = SectionProps & ImageProps

const UIImage: React.FC<UIImageProps> = (props) => {
	const { bgColor, py, px, maxWidth, requireAuth, requirePaid, ...rest } = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Image {...rest} />
		</Section>
	)
}

export default UIImage
