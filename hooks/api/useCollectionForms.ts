'use client'

import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { useAuth, useResourceContext } from 'frontend-js'

type CollectionFormParams = {
	parentResource?: any
}

const useCollectionForms = (params?: CollectionFormParams) => {
	const { parentResource } = params || {}

	const { currentUser } = useAuth()

	const { setAuthOpen } = useContext(AppContext)

	const {
		delayedLoading: loading,
		errors,
		query = {},
		findMany,
		resource,
		setResource,
		addReferences,
		create,
		update,
		destroy,
		handleChange,
		removeAttachment,
		reloadMany,
		openEdit,
		openDelete,
		openShow,
		openReferences,
		setOpenEdit,
		setOpenDelete,
		setOpenShow,
		setOpenReferences,
	} = useResourceContext()

	const handleShow = (resource: any) => {
		setResource(resource)
		setOpenEdit(false)
		setOpenShow(true)
	}

	const handleAdd = () => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource({
			id: undefined,
		})
		setOpenShow(false)
		setOpenEdit(true)
	}

	const handleEdit = (resource) => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource(resource)
		setOpenShow(false)
		setOpenEdit(true)
	}

	const handleSubmit = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
				if (parentResource?.id && resp?.id) {
					await addReferences(resp.id, [parentResource?.id])
				}
				setResource({})
			}
			if (resp?.id) {
				setOpenEdit(false)
				reloadMany()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleDeleteClick = (resource) => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource(resource)
		setOpenDelete(true)
	}

	const handleDelete = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		if (!resource?.id) return
		await destroy(resource?.id)
		setOpenDelete(false)
		setOpenEdit(false)
		setResource({})
		reloadMany()
	}

	const handleRemove = async (name) => {
		if (!currentUser?.id) return setAuthOpen(true)
		if (!resource?.id) return
		await removeAttachment(resource?.id, name)
	}

	return {
		loading,
		errors,
		resource,
		setResource,
		handleChange,

		handleAdd,
		handleEdit,
		handleDelete,
		handleDeleteClick,
		handleRemove,
		handleShow,
		handleSubmit,

		openEdit,
		openDelete,
		openShow,
		openReferences,
		setOpenEdit,
		setOpenDelete,
		setOpenShow,
		setOpenReferences,
	}
}

export default useCollectionForms
