import React, { useState, useEffect } from 'react'
import { ActionType, DisplayFieldType } from '../../../types'
import { flattenDocuments } from 'frontend-js'
import Sortable from './Sortable'
import { groupResourcesByField } from '../../../helpers/utils'

export type KanBanProps = {	
  loading?: boolean
	resources: any
  activeResource: any
  fieldName: string
  headers: {
    label: string
    value: string 
  }[]
  actions: ActionType[]
  displayFields: DisplayFieldType[]
  handleDrop: (movedItem: any, overContainer: string, columns: any[]) => void
  handleClick: (resource: any) => void
  enableFavorites?: boolean
  enableRatings?: boolean
  enableEdit?: boolean
  enableDelete?: boolean
  enableCreate?: boolean
  handleEdit: (resource: any) => void
  handleDelete: (resource: any) => void
  handleAdd: (status: string) => void
}

const KanBan: React.FC<KanBanProps> = (props) => {

	const {
    loading,
    actions,
    headers,
    fieldName,
		resources,    
    activeResource,
		handleClick,
    handleDrop,
    displayFields=[],
    enableFavorites,
    enableRatings,
    enableEdit,
    enableDelete, 
    enableCreate, 
    handleEdit,
    handleDelete,
    handleAdd  
	} = props

  const [groupedResources, setGroupedResources] = useState({})
  
  const handleGroupResources = (resources, fieldName) => {
    let flattenedResources = flattenDocuments(resources)
    let allowedOptions = headers.map((header) => header.value)
    let grouped = groupResourcesByField(flattenedResources, fieldName, allowedOptions)      
    setGroupedResources(grouped)
  }
  
  useEffect(() => {
    if(resources){
      handleGroupResources(resources, fieldName) 
    }    
  }, [resources, fieldName, headers])
  
  if(Object.keys(groupedResources).length == 0) return null;
	return (
    <Sortable 
      loading={loading}
      actions={actions}
      headers={headers}
      columns={groupedResources}
      activeResource={activeResource}
      handleDrop={handleDrop}
      handleClick={handleClick}
      displayFields={displayFields}
      enableFavorites={enableFavorites}
      enableRatings={enableRatings}
      enableEdit={enableEdit}
      enableDelete={enableDelete}
      enableCreate={enableCreate}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleAdd={handleAdd}
    />
	)
}

export default KanBan
