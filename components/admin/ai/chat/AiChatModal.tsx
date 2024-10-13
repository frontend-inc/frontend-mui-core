'use client'

import React, { useState } from 'react'
import { Icon, Drawer } from '../../../../components'
import { TextInputPropsType } from '../../../../types'
import AiChatForm from './AiChatForm'
import { useChat } from 'ai/react'
import { IconButton, Button } from '../../../../tailwind'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../../../../shadcn/ui/tooltip'

type AiChatModalProps = TextInputPropsType & {
	prompt?: string
	id?: string
}

const AiChatModal: React.FC<AiChatModalProps> = (props) => {
	const { id = 'openai-chat', label, name, handleChange, prompt = '' } = props

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const { messages, setMessages, handleSubmit, input, handleInputChange } =
		useChat({
			id,
			onFinish: (resp) => setLoading(false),
		})

	const handleClick = (text: string) => {
		setOpen(false)
		handleChange({
			target: {
				name,
				value: text,
			},
		})
	}

	const handleChatSubmit = (ev) => {
		setLoading(true)
		handleSubmit(ev)
	}

	return (
		<>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<IconButton onClick={() => setOpen(!open)}>
							<Icon name="Wand" />
						</IconButton>
					</TooltipTrigger>
					<TooltipContent>
						<p>Use AI to generate text</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<Drawer
				mode="editor"
				title={label}
				open={open}
				handleClose={() => setOpen(false)}
				buttons={
					<Button
						fullWidth
						onClick={handleChatSubmit}
						loading={loading}
						startIcon={<Icon name="Zap" className="text-primary-foreground" />}
					>
						Generate
					</Button>
				}
			>
				<AiChatForm
					open={open}
					prompt={prompt}
					handleClick={handleClick}
					messages={messages}
					setMessages={setMessages}
					input={input}
					handleInputChange={handleInputChange}
				/>
			</Drawer>
		</>
	)
}

export default AiChatModal
