'use client'

import type { HTMLAttributes, ReactElement } from 'react'
import React, { useEffect, useRef, useState } from 'react'

import { cn } from '../utils/cn'
import type { BaseHorizontalScrollerProps, HorizontalScrollerVariant } from './horizontal-scroller.types'

export type HorizontalScrollerProps = BaseHorizontalScrollerProps &
  Omit<HTMLAttributes<HTMLElement>, 'children'>

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      className={cn('inline-flex h-[1em] w-[1em] shrink-0', className)}
    >
      <path d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      className={cn('inline-flex h-[1em] w-[1em] shrink-0', className)}
    >
      <path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z" />
    </svg>
  )
}

function ArrowButton({
  direction,
  variant,
  onClick,
}: {
  direction: 'left' | 'right'
  variant: HorizontalScrollerVariant
  onClick: () => void
}) {
  return (
    <div
      className={cn('absolute top-0 flex h-full items-center', {
        'end-0': direction === 'right',
        'start-0': direction === 'left',
      })}
    >
      <button
        className={cn(
          'pointer-events-auto relative flex w-8 cursor-pointer items-center justify-center border-none',
          {
            'h-full bg-transparent from-white text-black':
              variant === 'white' || variant === 'white-button',
            'bg-gradient-to-l':
              (variant === 'white' || variant === 'white-button') &&
              direction === 'right',
            'bg-gradient-to-r':
              (variant === 'white' || variant === 'white-button') &&
              direction === 'left',
            'h-8 rounded-full bg-white/20 text-white backdrop-blur':
              variant === 'black',
          },
        )}
        onClick={onClick}
      >
        {variant === 'white-button' ? (
          <div
            className={cn(
              'absolute top-1/2 h-12 w-9 -translate-y-1/2 bg-white',
              {
                'end-0 rounded-l-xl shadow-[-10px_0_10px_0px_rgba(0,0,0,0.5)]':
                  direction === 'right',
                'start-0 rounded-r-xl shadow-[10px_0_10px_0px_rgba(0,0,0,0.5)]':
                  direction === 'left',
              },
            )}
          />
        ) : null}
        {direction === 'left' ? (
          <ChevronLeft className="relative z-10" />
        ) : (
          <ChevronRight className="relative z-10" />
        )}
      </button>
    </div>
  )
}

export function HorizontalScroller({
  activeId,
  className,
  children,
  classNameInner,
  variant,
  ...props
}: HorizontalScrollerProps) {
  const scrollContainerRef = useRef<HTMLUListElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const elementRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const checkForOverflow = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } =
        scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -100 : 100,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkForOverflow)
    }
    window.addEventListener('resize', checkForOverflow)

    checkForOverflow()

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkForOverflow)
      }
      window.removeEventListener('resize', checkForOverflow)
    }
  }, [])

  useEffect(() => {
    if (!activeId) return

    if (activeId === 'all') {
      setTimeout(() => {
        scrollContainerRef.current?.scrollTo({
          left: 0,
          behavior: 'smooth',
        })
      }, 100)
      return
    }

    if (elementRefs.current[activeId]) {
      setTimeout(() => {
        elementRefs.current[activeId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        })
      }, 100)
    }
  }, [activeId])

  const childrenWithRefs = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const id = (child as ReactElement<Record<string, unknown>>).props[
        'data-id'
      ]
      if (typeof id === 'string') {
        return React.cloneElement(child as ReactElement<Record<string, unknown>>, {
          ref: (el: HTMLDivElement) => {
            if (el) {
              elementRefs.current[id] = el
            } else {
              delete elementRefs.current[id]
            }
          },
        } as Record<string, unknown>)
      }
    }
    return child
  })

  return (
    <nav className={cn('relative', className)} {...props}>
      <ul
        ref={scrollContainerRef}
        className={cn(
          'no-scrollbar flex snap-x gap-2 overflow-x-auto [&>*]:snap-center',
          classNameInner,
        )}
      >
        {childrenWithRefs}
      </ul>
      {canScrollLeft && (
        <ArrowButton
          direction="left"
          variant={variant}
          onClick={() => handleScroll('left')}
        />
      )}
      {canScrollRight && (
        <ArrowButton
          direction="right"
          variant={variant}
          onClick={() => handleScroll('right')}
        />
      )}
    </nav>
  )
}
