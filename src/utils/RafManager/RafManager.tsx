import React, { createContext, useContext, useRef, useEffect, FC } from 'react'

interface RAFManagerContextProps {
  addFunction: (func: (x: number) => void) => void
  removeFunction: (func: (x: number) => void) => void
}

const RAFManagerContext = createContext<RAFManagerContextProps | undefined>(
  undefined
)

const RAFManager: FC<{ children: React.ReactNode }> = ({ children }) => {
  const functionsRef = useRef<Array<(x: number) => void>>([])
  const rafRef = useRef<number>(0)

  const addFunction = (func: (x: number) => void): void => {
    cancelAnimationFrame(rafRef.current)
    functionsRef.current = [...functionsRef.current, func]
    rafRef.current = requestAnimationFrame(animate)
  }

  const removeFunction = (func: (x: number) => void): void => {
    const index = functionsRef.current.indexOf(func)
    if (index !== -1) {
      functionsRef.current.splice(index, 1)
    }
    if (functionsRef.current.length < 1) {
      cancelAnimationFrame(rafRef.current)
    }
  }

  const animate = (timestamp: number): void => {
    functionsRef.current.forEach((func) => func(timestamp))
    rafRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (functionsRef.current.length > 0) {
      rafRef.current = requestAnimationFrame(animate)
    }
    return () => {
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const value = {
    addFunction,
    removeFunction
  }

  return (
    <RAFManagerContext.Provider value={value}>
      {children}
    </RAFManagerContext.Provider>
  )
}

const useRAFManager = (): RAFManagerContextProps => {
  const context = useContext(RAFManagerContext)
  if (!context) {
    throw new Error('useRAFManager must be used within a RAFManagerProvider')
  }
  return context
}
export { RAFManager, useRAFManager }
