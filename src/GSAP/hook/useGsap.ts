import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

const useGsap = (gsapCallbackAnimation: gsap.ContextFunc): void => {
  useLayoutEffect(() => {
    const gsapContext: gsap.Context = gsap.context(gsapCallbackAnimation)
    return () => gsapContext.revert()
  }, [])
}

export default useGsap
