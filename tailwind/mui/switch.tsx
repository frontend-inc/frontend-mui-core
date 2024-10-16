import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '../../shadcn/lib/utils'

interface SwitchProps {
	name?: string
	value?: string | number | readonly string[]
	handleChange?: (checked: boolean) => void
	label?: string
  id?: string
	className?: string
}

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	SwitchProps
>(({ id, className, name, value, handleChange, label, ...props }, ref) => (
	<div className="flex items-center">
		<SwitchPrimitives.Root
			className={cn(
				'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
				className
			)}
			name={name}
			value={value}
			onCheckedChange={handleChange}
			{...props}
			ref={ref}
		>
			<SwitchPrimitives.Thumb
				className={cn(
					'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
				)}
			/>
		</SwitchPrimitives.Root>
		{label && (
			<label
				htmlFor={id}
				className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				{label}
			</label>
		)}
	</div>
))

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
