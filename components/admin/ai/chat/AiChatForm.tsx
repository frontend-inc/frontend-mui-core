'use client'

import React, { useEffect } from 'react'
import { Drawer, TextArea } from '../../../../components'
import { ScrollArea } from '../../../../shadcn/ui/scroll-area'

type AiChatFormProps = {
	id?: string
	open: boolean
	prompt: string
	handleClick: (text: string) => void
	messages: any[]
	setMessages: React.Dispatch<React.SetStateAction<any[]>>
	input: string
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AiChatForm: React.FC<AiChatFormProps> = ({
	open,
	prompt,
	handleClick,
	messages,
	setMessages,
	input,
	handleInputChange,
}) => {
	useEffect(() => {
		if (open) {
			setMessages([
				{
					id: 'openai-chat',
					role: 'system',
					content: prompt,
				},
			])
		}
	}, [open, prompt, setMessages])

	return (
		<div className="flex p-2 flex-col space-y-4">
			<TextArea
				label="Write a sentence about ..."
				name="prompt"
				placeholder="Enter text..."
				value={input}
				handleChange={handleInputChange}
			/>
			<ScrollArea className="max-h-[calc(100vh-120px)] w-full">
				<ul className="flex flex-col space-y-2">
					{messages
						.filter((message) => message.role === 'assistant')
						.map((message, i) => (
							<li
								key={i}
								className="cursor-pointer border border-border hover:border-primary rounded-lg p-2 text-sm w-full justify-start mb-2 text-left whitespace-pre-line"
								onClick={() => handleClick(message.content)}
							>
								{message.content}
							</li>
						))}
				</ul>
			</ScrollArea>
		</div>
	)
}

export default AiChatForm
