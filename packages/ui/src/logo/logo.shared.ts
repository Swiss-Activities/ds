import type { LogoSize } from './logo.types'
import { logoMarkupDefault, logoMarkupSm } from './logo.markup'

export type LogoDimensions = {
  width: number
  height: number
}

export function getLogoDimensions(size: LogoSize | undefined): LogoDimensions {
  if (size === 'sm') {
    return { width: 34, height: 34 }
  }

  return { width: 119, height: 64 }
}

export function getLogoMarkup(size: LogoSize | undefined): string {
  return size === 'sm' ? logoMarkupSm : logoMarkupDefault
}
