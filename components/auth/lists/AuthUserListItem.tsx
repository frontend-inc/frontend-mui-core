'use client'

import React, { useEffect, useState } from 'react'
import { UserAvatar, Label, MenuButton } from '../..'
import { UserType } from 'frontend-js'
import { useAuth } from 'frontend-js'
import { Button } from '../../../shadcn/ui/button'

type AuthUserListItemProps = {
	user: UserType
	selected?: boolean
	isAdmin?: boolean
	handleClick: () => void
	handleEdit: (user: UserType) => void
	handleDelete: (user: UserType) => void
}

const AuthUserListItem: React.FC<AuthUserListItemProps> = ({
	user,
	selected = false,
	isAdmin = false,
	handleClick,
	handleEdit,
	handleDelete,
}) => {
	const [canEdit, setCanEdit] = useState(false)
	const [canDelete, setCanDelete] = useState(false)

	const { currentUser } = useAuth()

	useEffect(() => {
		if (isAdmin && user?.role !== 'admin') {
			setCanEdit(true)
		}
		if (isAdmin && (user?.role !== 'admin' || user?.id == currentUser?.id)) {
			setCanDelete(true)
		}
	}, [user, isAdmin, currentUser])

	return (
		<li
			className={`p-0 rounded-md ${selected ? 'border-3 border-primary' : ''}`}
		>
			<Button
				variant="ghost"
				className="w-full justify-start px-2 py-3"
				onClick={handleClick}
			>
				<div className="flex items-center w-full">
					<div className="mr-4">
						<UserAvatar user={user} />
					</div>
					<div className="flex-grow">
						<div className="flex items-center space-x-2">
							<span className="text-sm font-medium">{user.name}</span>
							{user?.role && <Label label={user?.role} />}
						</div>
						<span className="text-xs text-muted-foreground">{user.email}</span>
					</div>
					{(canEdit || canDelete) && (
						<MenuButton
							handleEdit={canEdit ? () => handleEdit(user) : undefined}
							handleDelete={canDelete ? () => handleDelete(user) : undefined}
						/>
					)}
				</div>
			</Button>
		</li>
	)
}

export default AuthUserListItem
