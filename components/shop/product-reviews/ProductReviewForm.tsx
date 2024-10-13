import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import {
	Drawer,
	AuthGuard,
	IconLoading,
	RatingInput,
	TextArea,
	TextInput,
} from '../..'
import { useResourceContext } from 'frontend-js'
import { SyntheticEventType } from '../../../types'

type ProductReviewFormProps = {
	loading: boolean
	errors?: any
	review: any
	handleChange: (ev: SyntheticEventType) => void
	handleSubmit: () => void
}

const ProductReviewForm: React.FC<ProductReviewFormProps> = () => {
	const {
		loading,
		errors,
		handleChange,
		create,
		update,
		resource,
		reloadMany,
		openEdit,
		setOpenEdit,
	} = useResourceContext()

	const handleSubmit = async () => {
		let resp
		if (resource?.id) {
			resp = await update(resource)
		} else {
			resp = await create(resource)
		}
		if (resp?.id) {
			setOpenEdit(false)
			reloadMany()
		}
	}

	return (
		<Drawer
			title="Leave a review"
			open={openEdit}
			handleClose={() => setOpenEdit(false)}
			buttons={
				<Button
					className="w-full"
					variant="default"
					onClick={handleSubmit}
					disabled={loading}
				>
					{loading && <IconLoading className="mr-2 h-4 w-4" />}
					Submit
				</Button>
			}
		>
			<AuthGuard>
				<div className="p-4">
					<div className="flex flex-col space-y-4 w-full items-start">
						<RatingInput
							errors={errors}
							name="rating"
							value={resource?.rating}
              {/* @ts-ignore */}
							handleChange={handleChange}
						/>
						<TextInput
							errors={errors}
							name="title"
							value={resource?.title}
              {/* @ts-ignore */}
							handleChange={handleChange}
							placeholder="Review summary..."
						/>
						<TextArea
							errors={errors}
							name="body"
							value={resource?.body}
              {/* @ts-ignore */}
							handleChange={handleChange}
							placeholder="Leave a review..."
						/>
					</div>
				</div>
			</AuthGuard>
		</Drawer>
	)
}

export default ProductReviewForm
