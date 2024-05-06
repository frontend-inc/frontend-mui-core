import React from 'react'
import { YouTubeEmbed } from '../../..'
import { ShowItemProps } from '../Show'
import { flattenDocument } from 'frontend-js'
import ShowContainer from '../ShowContainer'

type YouTubeVideoProps = ShowItemProps & {
  fieldName: string 
} 

const YouTubeVideo: React.FC<YouTubeVideoProps> = (props) => {
  const { resource, fieldName, ...rest } = props || {}
  const src = flattenDocument(resource)[fieldName]  
	return (
    <ShowContainer {...rest}>
      <YouTubeEmbed src={ src } />          
    </ShowContainer>	
  )
}

export default YouTubeVideo
