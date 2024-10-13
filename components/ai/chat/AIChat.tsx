'use client'

import React, { useState } from 'react'
import { Button } from '../../../tailwind'
import { TextInputPropsType } from '../../../types'
import AIChatForm from './AIChatForm'
import AIChatMessages from './AIChatMessages'
import { useChat } from 'ai/react'

export type AIChatProps = TextInputPropsType & {
	avatar?: string
	id?: string
	label: string
	prompt?: string
	buttonText?: string
}

const AIChat: React.FC<AIChatProps> = (props) => {
	const {
		avatar,
		id = 'openai-chat',
		label = 'Start a conversation',
		prompt = '',
		buttonText = 'Send Message',
	} = props

	const [loading, setLoading] = useState(false)

	const { messages, setMessages, handleSubmit, input, handleInputChange } =
		useChat({
			id,
			onFinish: (resp) => setLoading(false),
		})

	const handleChatSubmit = (ev) => {
		setLoading(true)
		handleSubmit(ev)
	}

	return (
		<div className="flex flex-col space-y-2">
			<AIChatMessages avatar={avatar} messages={messages} />
			<AIChatForm
				label={label}
				prompt={prompt}
				setMessages={setMessages}
				input={input}
				handleInputChange={handleInputChange}
			/>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				onClick={handleChatSubmit}
				loading={loading}
			>
				{buttonText}
			</Button>
		</div>
	)
}

export default AIChat
