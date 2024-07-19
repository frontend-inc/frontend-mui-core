import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useAuth } from 'frontend-js'
import { FormFields } from '../..'
import { useAlerts } from '../../../hooks'
import { useRouter } from 'next/router'

export type UserFormProps = {
  loading?: boolean	  
	href?: string
	buttonText?: string
	fields: any[]
	onSuccessMessage?: string
  handleSuccess?: (resource: any) => void
}

const UserForm: React.FC<UserFormProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

  const { href } = props || {}
  const onSuccess = () => {
    if(href){
      router.push(`${clientUrl}${href}`)
    }
  }

	const {    
		buttonText = 'Update Profile',
		fields,
		onSuccessMessage = 'Submitted successfully!',
    handleSuccess=onSuccess
	} = props

	const { showAlertSuccess } = useAlerts()

	const {
		delayedLoading,
    errors,
		user,
		fetchMe,
		currentUser,
		updateMe,
		handleChange,
		deleteAvatar,
	} = useAuth()

	const handleRemove = async () => {
		await deleteAvatar()
	}

	const handleSubmit = async () => {
		try {			
			let resp = await updateMe(user)			
			if (resp?.id) {        
        if (onSuccessMessage) {
          showAlertSuccess(onSuccessMessage)
        }
        if(handleSuccess){
          handleSuccess(resp)
        }
			}      
		} catch (err) {
			console.log('Error', err)
		}
	}


  useEffect(() => {
    if(!currentUser?.id){
      fetchMe()
    }
  }, [])

	return (
		<FormFields
			loading={delayedLoading}
			errors={errors}
			fields={fields}
			resource={user}
			handleChange={handleChange}
			handleRemove={handleRemove}
			handleSubmit={handleSubmit}
			buttonText={buttonText}
		/>
	)
}

export default UserForm
