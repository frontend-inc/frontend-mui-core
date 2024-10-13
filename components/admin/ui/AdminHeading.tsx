'use client'

import React from 'react'

interface AdminHeadingProps {
  title: string
  description?: string
  secondaryAction?: React.ReactNode
}

export default function AdminHeading({ title, description, secondaryAction }: AdminHeadingProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 mb-6">
      <div>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {secondaryAction && (
        <div className="mt-2 sm:mt-0">
          {secondaryAction}
        </div>
      )}
    </div>
  )
}