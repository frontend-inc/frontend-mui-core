import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { 
  Stack,
  Box,
  Typography, 
  Button 
} from '@mui/material'
import { Placeholder, UserAvatar, FollowButton, FollowCounts, ExpandableText } from '../../../components'
import { UserType } from '../../../types'
import { useRouter } from 'next/router'

export type UserProfileProps = {
  user: UserType 
  href: string
  enableFollowing?: boolean
  enableBorder?: boolean
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { 
    user, 
    href,
    enableFollowing = false,
    enableBorder = false 
  } = props || {}
  const { name, username, bio, avatar } = user || {}

  const { clientUrl } = useContext(AppContext)
  const router = useRouter()

  const handleClick = () => {
		if (clientUrl && href && username) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${href}/${username}`)
		}
	}
  if(!user?.username){ return(
    <Placeholder 
      icon='UserCircle'
      title='Please sign in'
      description='Sign in to view the user profile'
    />
  )}
  return (
    <Box 
      sx={{
        ...sx.container,
        ...(enableBorder && sx.containerBorder) 
      }}
    >
      <Stack sx={ sx.profile } direction={{ sm: 'row', xs: 'column'}} spacing={{ sm: 4, xs: 0 }} alignItems="flex-start">
        <Box height="100%" sx={ sx.avatarContainer }>
        { avatar?.url && (
          <UserAvatar 
            user={ user }  
            size={120}          
          />
        )}  
        </Box>    
        <Stack direction="column" spacing={0}>
          <Typography 
            variant="caption"  
            color='text.secondary'
            sx={ sx.username }
          >@{username}</Typography>                 
          <Typography 
            variant="h6"  
            color='text.primary'
            sx={ sx.name }
          >{name}</Typography>
          { enableFollowing == true && (
            <FollowCounts 
              user={ user } 
            />
          )}
          { bio && (
            <ExpandableText 
              text={ bio }
              color='text.secondary'
            />
          )}      
        </Stack>
        <Stack direction="row" height="100%" justifyContent='flex-start'>
        { enableFollowing == true && (
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
  containerBorder: {
    border: '1px solid',
    borderColor: 'divider',
  },
  button: {
    boxShadow: 0,
    color: 'text.secondary'
  },
  name: {
    width: '100%',
    minWidth: 200,
    textAlign: {
      sm: 'left',
      xs: 'center'
    }
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
    justifyContent: 'center',
    width: '100%',    
  },
  username: {
    boxShadow: 0,
    width: "100%",
    display: 'flex',
    justifyContent: {
      sm: 'flex-start',
      xs: 'center'
    }
  }
}