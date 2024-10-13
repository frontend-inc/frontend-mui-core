'use client'

import React from 'react'
import { AttachmentInput } from '../../../components'
import { AttachmentInputProps } from '../../../types'

const ImageInput: React.FC<AttachmentInputProps> = (props) => {
	return (
		<AttachmentInput {...props} placeholder="Upload image" variant="image" />
	)
}

export default ImageInput
