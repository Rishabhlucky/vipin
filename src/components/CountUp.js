'use client'

import useReveal from '../hooks/useReveal'
import useCountUp from '../hooks/useCountUp'

export default function CountUp({ label, value, unit, accent }) {
  const [ref, visible] = useReveal(0.4)
  const count = useCountUp(value, { duration: 1400, trigger: visible })

  return (
    <div ref={ref}>
      <p className={`readout text-3xl font-semibold ${accent ? 'text-vital' : 'text-mist'}`}>
        {count}+
      </p>
      <p className="text-[11px] text-mist/50 mt-1">{label}</p>
      <p className="section-eyebrow text-[9px] text-teal/70 uppercase mt-0.5">{unit}</p>
    </div>
  )
}
