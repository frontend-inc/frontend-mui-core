import React, { useEffect, useState } from 'react'
import { ResourceModal, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { useFormBuilder } from '../../../hooks'

type AdminFormResponseShowProps = ResourceShowProps & {
  formId: string | number 
}

const AdminFormResponseShow: React.FC<AdminFormResponseShowProps> = (props) => {
	const { 
    formId,
    resource: form_response,
    loading,
    open,
    handleClose,
    enableEdit,
    enableDelete,
    handleEdit,
    handleDelete,    
   } = props

   const { 
    loading: formLoading,
    form, 
    findForm 
   } = useFormBuilder()

   useEffect(() => {
    if(formId){
      findForm(formId)
    }
   }, [formId])

   useEffect(() => {
    if(form){
      console.log(form)
    }
   }, [form])

	return (
    <ResourceModal 
      loading={loading}
      open={open}
      handleClose={handleClose}
      enableEdit={enableEdit}
      enableDelete={enableDelete}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    >
      <ResourceDetails
        {...props}
        image={form_response?.image?.url}
        primary={form_response?.name}
        secondary={ form_response?.email }
        fields={ form?.questions }
      />
    </ResourceModal>
	)
}

export default AdminFormResponseShow
