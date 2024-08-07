import React from 'react'
import { Stack, Button, Box } from '@mui/material'
import {
	IconLoading,
	ImageInput,
	TextInput,
	SwitchInput,
	Placeholder,
} from '../../../components'
import { useAuth } from 'frontend-js'

type TeamFormProps = {
	loading: boolean
	team: any
	errors: any
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleSuccess: () => void
	handleCancel: () => void
	handleDeleteImage: () => void
}

const TeamForm: React.FC<TeamFormProps> = (props) => {
	const {
		loading,
		errors,
		team,
		handleSubmit,
		handleCancel,
		handleChange,
		handleDeleteImage,
	} = props

	const { currentUser } = useAuth()

	if (team?.id && currentUser?.team_role != 'admin') {
		return (
			<Placeholder
				icon="lock"
				title="Unauthorized"
				description="You do not have permission to access this page"
				buttons={
					<Button
						color="secondary"
						onClick={handleCancel}
						variant="contained"
						startIcon={<IconLoading loading={loading} />}
					>
						Cancel
					</Button>
				}
			/>
		)
	}
	return (
		<Box sx={sx.root}>
			<TextInput
				errors={errors}
				value={team.handle}
				name="handle"
				placeholder="Username"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
				value={team.name}
				name="name"
				placeholder="Name"
				handleChange={handleChange}
			/>
			<ImageInput
				value={team.image}
				name="image"
				handleChange={handleChange}
				handleRemove={handleDeleteImage}
			/>
			<TextInput
				multiline
				rows={6}
				errors={errors}
				value={team.description}
				name="description"
				placeholder="Description"
				handleChange={handleChange}
			/>
			<Stack sx={sx.buttons} direction={'row'} spacing={1}>
				<Button
					color="secondary"
					onClick={handleCancel}
					variant="contained"
					startIcon={<IconLoading loading={loading} />}
				>
					Cancel
				</Button>
				<Button
					color="primary"
					onClick={handleSubmit}
					variant="contained"
					startIcon={<IconLoading loading={loading} />}
				>
					Save
				</Button>
			</Stack>
		</Box>
	)
}

export default TeamForm

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: 2,
	},
	buttons: {
		width: '100%',
		justifyContent: 'flex-end',
	},
}
