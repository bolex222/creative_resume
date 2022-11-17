import { gsap } from 'gsap'
import { EffectCallback, useLayoutEffect } from 'react'

const useGsap = (gsapCallbackAnimation: EffectCallback): void => {
  useLayoutEffect(() => {
    const gsapContext: gsap.Context = gsap.context(gsapCallbackAnimation)
    return () => gsapContext.revert()
  }, [])
}

export default useGsap
