import React, { useEffect, useState } from 'react'
import { 
  Stack,
  Box,
  Avatar,
  Typography, 
  Link   
} from '@mui/material'
import { FollowButton, FollowCounts, ExpandableText } from '../../../components'
import { UserType } from '../../../types'

export type UserProfileProps = {
  user: UserType 
  enableFollowing?: boolean
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { user, enableFollowing = false } = props || {}
  const { name, username, bio, avatar } = user || {}

  return (
    <Box sx={ sx.container }>
      <Stack sx={ sx.profile } direction={{ sm: 'row', xs: 'column'}} spacing={4} alignItems="flex-start">
        <Box height="100%" sx={ sx.avatarContainer }>
        { avatar?.url && (
          <Avatar 
            src={avatar?.url} 
            sx={ sx.avatar }
          />
        )}  
        </Box>    
        <Stack direction="column" spacing={1}>
          <Stack direction="row" alignItems='center' spacing={1}>
            <Typography variant="h6"  color='text.primary'>{name}</Typography>
          </Stack>
          <FollowCounts user={ user } />
          <Typography variant="body2"  color='text.secondary'>@{username}</Typography>
          <Link href={`/${username}`} variant="body2"  color='text.secondary'>{username}</Link>
          { bio && (
            <ExpandableText 
              text={ bio }
            />
          )}      
        </Stack>
        <Stack direction="row" height="100%" justifyContent='flex-start'>
        { enableFollowing && (
          <FollowButton
            user={user}                
          />
        )}
        </Stack>
      </Stack>
    </Box>
  )
}

export default UserProfile  

const sx = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    maxWidth: 600
  },
  avatar: {
    width: 110,
    height: 110
  },
  avatarContainer: {
    height: 140,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}