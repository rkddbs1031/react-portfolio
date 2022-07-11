import { useState, useMount } from 'hooks'

export const useLoad = () => {
  const [isLoading, setIsLoading] = useState(true)

  useMount(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timeout)
  })
  return { isLoading }
}
