"use client"

import { useState, useEffect, useCallback } from "react"

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    // Get navbar height for consistent offset calculation
    const getNavbarHeight = () => {
      const navbar = document.querySelector('nav')
      return navbar ? navbar.offsetHeight : 80 // Fallback to 80px
    }

    const navbarHeight = getNavbarHeight()

    // Create intersection observer with proper configuration
    const observer = new IntersectionObserver(
        (entries) => {
          // Sort entries by their position on the page (top to bottom)
          const sortedEntries = entries
              .filter(entry => entry.target.id) // Ensure element has ID
              .sort((a, b) => {
                const aRect = a.boundingClientRect
                const bRect = b.boundingClientRect
                return aRect.top - bRect.top
              })

          // Find the section that should be active
          let newActiveSection = activeSection // Default to current active

          // Check intersecting sections
          const intersectingSections = sortedEntries.filter(entry => entry.isIntersecting)

          if (intersectingSections.length > 0) {
            // If multiple sections are intersecting, choose based on scroll direction and visibility
            const mostVisibleSection = intersectingSections.reduce((prev, current) => {
              // Prefer the section with higher intersection ratio (more visible)
              if (current.intersectionRatio > prev.intersectionRatio) {
                return current
              }
              // If intersection ratios are similar, prefer the one closer to the top
              if (Math.abs(current.intersectionRatio - prev.intersectionRatio) < 0.1) {
                return current.boundingClientRect.top < prev.boundingClientRect.top ? current : prev
              }
              return prev
            })

            newActiveSection = mostVisibleSection.target.id
          } else {
            // No sections intersecting, determine based on scroll position
            // Check if we're above or below the viewport
            const sectionsAbove = sortedEntries.filter(entry =>
                entry.boundingClientRect.bottom < navbarHeight
            )
            const sectionsBelow = sortedEntries.filter(entry =>
                entry.boundingClientRect.top > window.innerHeight
            )

            if (sectionsAbove.length > 0) {
              // We're below some sections, activate the last one above
              newActiveSection = sectionsAbove[sectionsAbove.length - 1].target.id
            } else if (sectionsBelow.length > 0) {
              // We're above some sections, activate the first one below
              newActiveSection = sectionsBelow[0].target.id
            }
          }

          // Special handling for the last section to ensure it gets activated
          const skillsElement = document.getElementById("skills")
          if (skillsElement) {
            const skillsRect = skillsElement.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // If skills section is visible and we're near the bottom of the page
            const isNearBottom = window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 100

            // Or if skills section takes up significant viewport space
            const skillsVisibleHeight = Math.min(skillsRect.bottom, windowHeight) -
                Math.max(skillsRect.top, navbarHeight)
            const skillsVisibilityRatio = Math.max(0, skillsVisibleHeight) /
                (windowHeight - navbarHeight)

            if (isNearBottom || skillsVisibilityRatio > 0.3) {
              newActiveSection = "skills"
            }
          }

          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection)
          }
        },
        {
          // Use negative rootMargin to account for navbar
          rootMargin: `${-navbarHeight}px 0px -20% 0px`,
          // Multiple thresholds for better detection
          threshold: [0, 0.25, 0.5, 0.75, 1]
        }
    )

    // Observe all sections
    const sections = ["about", "experience", "education", "skills"]
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    // Cleanup function
    return () => {
      observer.disconnect()
    }
  }, [activeSection]) // Include activeSection in dependencies for proper updates

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate navbar height consistently
      const navbar = document.querySelector('nav')
      const navbarHeight = navbar ? navbar.offsetHeight + 24 : 80

      // Calculate the target position
      const offsetPosition = element.offsetTop - navbarHeight

      // Smooth scroll to the position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }, [])

  return (
      <nav className="sticky top-0 bg-gray-50 z-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-4 md:space-x-8">
            {[
              { id: "about", label: "about" },
              { id: "experience", label: "experience" },
              { id: "education", label: "education" },
              { id: "skills", label: "skills" },
            ].map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`md:text-lg font-medium transition-colors ${
                        activeSection === item.id ? "text-black" : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {item.label}
                </button>
            ))}
          </div>
        </div>
      </nav>
  )
}