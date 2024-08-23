import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { useAdmin } from '../../../hooks'

const AdminMenuLinkForm: React.FC<ResourceFormProps> = (props) => {

  const { apiUrl } = useAdmin()

  return(
    <ResourceForm      
      { ...props }
      fields={[
        {
          label: 'Name',
          name: 'name',
          variant: 'string',
          placeholder: 'Link name',
        },
        { 
          label: 'Link type',
          name: 'variant',
          variant: 'select',
          options: [
            { value: 'page', label: 'Page', icon: 'StickyNote' },
            { value: 'url', label: 'URL', icon: 'ExternalLink' },              
          ]
        },
        {
          label: 'URL',
          name: 'url',
          variant: 'string',
          placeholder: 'URL',
          conditions: [
            { name: 'variant', operator: 'eq', value: 'url' }
          ]
        },            
        {
          label: 'Page',
          name: 'page_id',
          variant: 'autosuggest',
          placeholder: 'Select page',
          displayField: 'title',
          url: `${apiUrl}/pages`,
          query: {},
          conditions: [
            { name: 'variant', operator: 'eq', value: 'page' }
          ]
        },
      ]}
    />
  )
}

export default AdminMenuLinkForm 