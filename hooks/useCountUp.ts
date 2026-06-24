'use client'
import { useEffect, useState } from 'react'

export function useCountUp(target: number, duration = 1400, trigger = false, decimals = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let rafId: number
    let start: number | null = null

    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      const current = eased * target
      setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.round(current))
      if (p < 1) rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [trigger, target, duration, decimals])

  return value
}
