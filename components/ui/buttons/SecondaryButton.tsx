'use client'

import React from 'react'
import { PrimaryButton } from '../..'
import { PrimaryButtonProps } from './PrimaryButton'

export type SecondaryButtonProps = PrimaryButtonProps

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
	return <PrimaryButton {...props} color="secondary" />
}

export default SecondaryButton
