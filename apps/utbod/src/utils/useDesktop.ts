import { useEffect, useState } from 'react'

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const check = () => window.innerWidth > 768

    const handleResize = () => {
      setIsDesktop(check())
    }

    // Set initial state
    setIsDesktop(check())
    setHydrated(true)

    // Listen for resize
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Only return value after component has mounted (hydrated)
  return hydrated ? isDesktop : null
}