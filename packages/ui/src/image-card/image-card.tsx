import type { HTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import { Text } from '../text/text'
import type { BaseImageCardProps } from './image-card.types'

export type ImageCardProps = BaseImageCardProps &
  Omit<HTMLAttributes<HTMLDivElement>, 'children'>

export function ImageCard({
  image,
  button,
  text,
  className,
  ...props
}: ImageCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col justify-between overflow-hidden rounded-lg px-6 py-8',
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 [&_img]:absolute [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
        {image}
        <div className="absolute inset-0 bg-gradient-to-b from-blue" />
      </div>
      <div className="relative z-10 flex flex-col gap-8">
        <Text size="default" bold className="text-white">
          {text}
        </Text>
        {button}
      </div>
    </div>
  )
}
