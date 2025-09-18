"use client"

import { useState, useEffect } from 'react'

interface GifHoverProps {
    children: React.ReactNode
    gifUrl: string
    className?: string
    gifClassName?: string
    offset?: { x: number; y: number }
    redirectURL?: string
}

export default function GifHover({
                                     children,
                                     gifUrl,
                                     className = "text-blue-500 underline cursor-pointer",
                                     gifClassName = "w-32 h-24 rounded-lg shadow-lg object-cover",
                                     offset = { x: 0, y: -20 },
                                     redirectURL = ""
                                 }: GifHoverProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [showGif, setShowGif] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        if (showGif) {
            document.addEventListener('mousemove', handleMouseMove)
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [showGif])

    const handleClick = () => {
        if (redirectURL) {
            window.open(redirectURL, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <>
      <span
          className={`${className} ${redirectURL ? 'cursor-pointer' : ''}`}
          onMouseEnter={() => setShowGif(true)}
          onMouseLeave={() => setShowGif(false)}
          onClick={handleClick}
          role={redirectURL ? "button" : undefined}
          tabIndex={redirectURL ? 0 : undefined}
          onKeyDown={redirectURL ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleClick()
              }
          } : undefined}
      >
        {children}
      </span>

            {/* GIF that follows mouse */}
            {showGif && (
                <div
                    className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-full"
                    style={{
                        left: mousePosition.x + offset.x,
                        top: mousePosition.y + offset.y,
                    }}
                >
                    <img
                        src={gifUrl}
                        alt="Hover GIF"
                        className={gifClassName}
                        loading="lazy"
                    />
                </div>
            )}
        </>
    )
}