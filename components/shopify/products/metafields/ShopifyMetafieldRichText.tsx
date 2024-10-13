'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '../../../../shadcn/lib/utils'

type ShopifyMetafieldRichTextProps = {
	value: string
}

const ShopifyMetafieldRichText: React.FC<ShopifyMetafieldRichTextProps> = ({
	value,
}) => {
	if (typeof value === 'string') {
		value = JSON.parse(value)
	}

	const renderValue = (value, inList = false) => {
		if (!value) return null

		if (value.type === 'root' && value.children?.length > 0) {
			return (
				<div>
					{value.children.map((child, index) => renderValue(child, inList))}
				</div>
			)
		} else if (Array.isArray(value)) {
			return value.map((el, index) => renderElement(el, index, inList))
		} else {
			return renderElement(value, undefined, inList)
		}
	}

	const renderElement = (el, key, inList) => {
		switch (el.type) {
			case 'paragraph':
				return (
					<p key={key} className="my-4">
						{renderValue(el.children, inList)}
					</p>
				)
			case 'heading':
				const HeadingTag = `h${el.level}` as keyof JSX.IntrinsicElements
				return (
					<HeadingTag
						key={key}
						className={cn(
							'font-bold',
							el.level === 1 && 'text-4xl',
							el.level === 2 && 'text-3xl',
							el.level === 3 && 'text-2xl',
							el.level === 4 && 'text-xl',
							el.level === 5 && 'text-lg',
							el.level === 6 && 'text-base'
						)}
					>
						{renderValue(el.children, inList)}
					</HeadingTag>
				)
			case 'list':
				const ListTag = el.listType === 'ordered' ? 'ol' : 'ul'
				return (
					<ListTag
						key={key}
						className={cn(
							'pl-5 my-4',
							el.listType === 'ordered' ? 'list-decimal' : 'list-disc'
						)}
					>
						{renderValue(el.children, true)}
					</ListTag>
				)
			case 'list-item':
				return (
					<li key={key} className="mb-1">
						{renderValue(el.children, true)}
					</li>
				)
			case 'link':
				return (
					<Link
						key={key}
						href={el.url}
						title={el.title}
						target={el.target}
						className="text-blue-600 hover:underline"
					>
						{renderValue(el.children, inList)}
					</Link>
				)
			case 'text':
				return renderText(el, key, inList)
			default:
				return null
		}
	}

	const renderText = (el, key, inList) => {
		let textElement = (
			<span key={key}>
				{el.bold ? <strong>{el.value}</strong> : null}
				{el.italic ? <em>{el.value}</em> : null}
				{!el.bold && !el.italic ? el.value : null}
			</span>
		)

		if (inList) {
			textElement = <span key={key}>{textElement}</span>
		}

		return textElement
	}

	return <>{renderValue(value)}</>
}

export default ShopifyMetafieldRichText
