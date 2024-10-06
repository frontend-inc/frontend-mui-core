import React from 'react'
import { cn } from "../../../shadcn/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../../shadcn/ui/dialog"
import { Button } from "../../../shadcn/ui/button"
import { Icon, Loader } from '../../../components'

type ModalProps = {
  open: boolean
  loading?: boolean
  handleClose: () => void
  icon?: string
  avatar?: React.ReactNode
  title?: string | React.ReactNode
  subtitle?: string
  buttons?: React.ReactNode
  children?: React.ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  secondaryActions?: React.ReactNode
  disablePadding?: boolean
  fullScreen?: boolean
  enableCancel?: boolean
  hideBackdrop?: boolean
  disableClose?: boolean
  disableHeader?: boolean
}

const Modal: React.FC<ModalProps> = ({
  open,
  loading = false,
  handleClose,
  avatar,
  icon,
  title,
  subtitle,
  buttons,
  children,
  secondaryActions,
  disablePadding = false,
  fullScreen,
  enableCancel = false,
  disableClose = false,
  disableHeader = false,
}) => {

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className={cn(
        "bg-background",
        fullScreen ? "w-screen h-screen" : 'w-full',
        "rounded-md",
        "overflow-hidden"        
      )}>
        {!disableHeader && (
          <DialogHeader className="px-2 py-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {avatar}
                {icon && <Icon name={icon} />}
                <DialogTitle className="text-foreground">{title}</DialogTitle>
              </div>
              {!loading && (
                <div className="flex items-center">
                  {secondaryActions}
                  {!disableClose && (
                    <Button variant="ghost" size="icon" onClick={handleClose}>
                      <Icon name="X" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          </DialogHeader>
        )}
        <div className={cn(
          "my-1 h-full",
          disablePadding && "m-0 p-0"
        )}>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
          <Loader loading={loading} />
          {!loading && <div className="h-full w-full">{children}</div>}
        </div>
        {!loading && (enableCancel || buttons) && (
          <DialogFooter className="border-t border-border bg-background">
            {enableCancel && (
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            )}
            {buttons}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default Modal