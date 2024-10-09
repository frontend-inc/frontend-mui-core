import React from 'react'
import { cn } from "../../../shadcn/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../../../shadcn/ui/avatar"
import { Checkbox } from "../../../shadcn/ui/checkbox"
import { Button } from "../../../shadcn/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../shadcn/ui/dropdown-menu"
import { GripVertical, MoreVertical } from "lucide-react"
import Image from 'next/image'
import { Typography } from "../../../tailwind"

export type ResourceListItemProps = {
  selectable?: boolean
  selected?: boolean
  primary: React.ReactNode
  secondary?: React.ReactNode
  avatar?: React.ReactNode
  icon?: string
  color?: string
  image?: string
  handleClick?: (resource: any) => void
  handleEdit?: (resource: any) => void
  handleDelete?: (resource: any) => void
  handleSelect?: () => void
  secondaryAction?: React.ReactNode
  menuActions?: React.ReactNode
  sortable?: boolean
  isDragging?: boolean
  enableBorder?: boolean
}

export default function ResourceListItem({
  icon,
  avatar,
  color,
  primary,
  secondary,
  image,
  handleClick,
  handleEdit,
  handleDelete,
  handleSelect,
  secondaryAction,
  menuActions,
  sortable,
  selectable,
  selected,
  isDragging = false,
  enableBorder = false,
}: ResourceListItemProps) {
  return (
    <div
      className={cn(
        "p-1 rounded overflow-hidden bg-background hover:bg-accent",
        "border border-transparent",
        enableBorder && "border-border hover:shadow-md mb-1 transition-shadow duration-200",
        selected && "border-primary",
        isDragging && "shadow-md"
      )}
    >
      <div className="flex items-center p-1 rounded">
        {selectable && (
          <Checkbox
            checked={selected}
            onCheckedChange={handleSelect}
            className="mr-2"
          />
        )}
        {sortable && (
          <GripVertical className="w-6 h-6 mr-2 text-muted-foreground cursor-grab active:cursor-grabbing" />
        )}
        {avatar && <div className="mr-2">{avatar}</div>}
        {image && (
          <div className="mr-2 min-w-[64px] flex justify-end">
            <Image src={image} width={64} height={64} alt={image} />
          </div>
        )}
        {icon && (
          <Avatar className={cn("mr-2 rounded", color)}>
            <AvatarFallback>{icon}</AvatarFallback>
          </Avatar>
        )}
        <div className="flex-grow cursor-pointer" onClick={handleClick}>
          <Typography variant="body1">{primary}</Typography>
          {secondary && <Typography variant="body2" color="text.secondary">{secondary}</Typography>}
        </div>
        <div className="flex items-center space-x-1">
          {secondaryAction}
          {(menuActions || handleEdit || handleDelete) && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreVertical className="h-4 w-4 text-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {menuActions}
                {handleEdit && (
                  <DropdownMenuItem onClick={() => handleEdit({})}>Edit</DropdownMenuItem>
                )}
                {handleDelete && (
                  <DropdownMenuItem onClick={() => handleDelete({})}>Delete</DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </div>
  )
}