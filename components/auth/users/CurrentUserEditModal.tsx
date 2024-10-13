'use client'

import React from 'react'
import { CurrentUserForm, Drawer } from '../..'
import { FormFieldType } from '../../../types'

type UserEditModalProps = {
	open: boolean
	handleClose: () => void
	fields: FormFieldType[]
}

const UserEditModal: React.FC<UserEditModalProps> = (props) => {
	const { open, handleClose, fields } = props || {}

	return (
		<Drawer open={open} handleClose={handleClose} title="Edit Profile">
			<CurrentUserForm fields={fields} handleSuccess={handleClose} />
		</Drawer>
	)
}

export default UserEditModal
