'use client'

import React from 'react'
import { Section } from '../../components'
import { DataFormWizard } from '../../components'
import { DataFormWizardProps } from '../../components/cms/forms/DataFormWizardModal'
import { SectionProps } from '../../types'

type CmsFormWizardProps = SectionProps & DataFormWizardProps

const CmsFormWizard: React.FC<CmsFormWizardProps> = (props) => {
	const { bgColor, mode, py, px, maxWidth, requireAuth, requirePaid, ...rest } =
		props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<DataFormWizard {...rest} />
		</Section>
	)
}

export default CmsFormWizard
