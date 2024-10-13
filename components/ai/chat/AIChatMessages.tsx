'use client'

import React from 'react'
import { Avatar, AvatarImage } from '../../../shadcn/ui/avatar'
import { ScrollArea } from '../../../shadcn/ui/scroll-area'
import { cn } from '../../../shadcn/lib/utils'

type AIChatMessagesProps = {
	avatar?: string
	messages: any[]
}

const AIChatMessages: React.FC<AIChatMessagesProps> = (props) => {
	const { avatar, messages } = props

	return (
		<ScrollArea className="h-[calc(100vh-200px)]">
			<ul className="list-none p-0">
				{messages
					?.filter((message) => message.role != 'system')
					?.map((message, i) => (
						<li key={i} className="mb-1 flex items-start">
							<div className="mr-2 w-4">
								{avatar && message.role == 'assistant' && (
									<Avatar>
										<AvatarImage src={avatar} alt="AI Assistant" />
									</Avatar>
								)}
							</div>
							<button className="flex-grow p-1 rounded text-left hover:bg-accent">
								<p className="text-foreground whitespace-pre-line">
									{message.content}
								</p>
							</button>
						</li>
					))}
			</ul>
		</ScrollArea>
	)
}

export default AIChatMessages
