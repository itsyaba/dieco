import { useState, useEffect } from "react"

export function useReducedMotion(): boolean {
  // Default to false for SSR
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check if the browser supports the matchMedia API
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

      // Set the initial value
      setPrefersReducedMotion(mediaQuery.matches)

      // Create a listener function
      const handleChange = () => {
        setPrefersReducedMotion(mediaQuery.matches)
      }

      // Add the listener
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleChange)
      } else {
        // For older browsers
        mediaQuery.addListener(handleChange)
      }

      // Clean up
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener("change", handleChange)
        } else {
          // For older browsers
          mediaQuery.removeListener(handleChange)
        }
      }
    }
  }, [])

  return prefersReducedMotion
}

