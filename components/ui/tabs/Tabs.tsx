import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import {
  Icon,
	Placeholder,
} from '../../../components'
import { Tabs as MuiTabs, Tab as MuiTab, Typography } from '@mui/material'
import Tab from './TabItem'

type TabsProps = {
	title?: string
  orientation?: 'horizontal' | 'vertical'
  items?: {
    icon?: string
    label: string
    title: string
    description: string
    image?: string
  }[]
  fullWidth?: boolean
	editing?: boolean
}

const Tabs: React.FC<TabsProps> = (props) => {

  const [currentTab, setCurrentTab] = useState(0)

  const {    
		title,
    items=[],  
    orientation='vertical',  
    fullWidth=false,
  } = props

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
  }

	return (
		<Stack 
      spacing={1} 
      direction={ orientation === 'vertical' ? 'row' : 'column' } 
      sx={sx.root}
    >
			<Stack direction="row" justifyContent={'space-between'} spacing={1}>
				<Typography variant="h6" sx={ sx.title } color="textPrimary">
					{title}
				</Typography>
			</Stack>   
      <MuiTabs 
        centered
        orientation={ orientation }
        variant={ fullWidth ? "fullWidth" : "standard" }
        value={currentTab} 
        onChange={handleChange}
        color="secondary"
        sx={{ 
          ...sx.tabs,
          ...(orientation === 'vertical' && sx.verticalTabs ) 
        }}
      >    
        {items?.map((item, i) => (
          <MuiTab 
            label={ item.label } 
            value={i} 
            icon={ item.icon ? 
              <Box sx={ sx.tabIcon }>
                <Icon 
                  name={item.icon} 
                  size={20}
                  color={ currentTab === i ? 'primary.main' : 'text.primary' }
                /> 
              </Box>: 
              null 
            }
            iconPosition="start" 
          />        
        ))}
      </MuiTabs>
			{items?.map((item, i) => (
				<Tab
					key={i}
          active={i == currentTab}          
					title={item?.title}
					description={item?.description}
					image={item?.image}
				/>
			))}
			{items?.length === 0 && (
				<Placeholder
					icon={<Icon name="Search" />}
					title="No content"
					description="Your content will appear here."
				/>
			)}
		</Stack>
	)
}

export default Tabs

const sx = {
	root: {
		width: '100%',
	},
  title: {
    width: '100%',
    textAlign: 'center',
    mb: 2
  },
  tabIcon: {
    mb: '-4px',
    mr: 1
  },
	verticalTabs: {
    width: 160,
  }
}
