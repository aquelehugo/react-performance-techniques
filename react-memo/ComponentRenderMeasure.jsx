import React, { useEffect, useRef } from 'react'

const useMeasureOutputRef = () => {
  const measureOutputRef = useRef(null)
  const renderStart = window.performance.now()

  useEffect(() => {
    const renderEnd = window.performance.now()

    if (measureOutputRef.current) {
      measureOutputRef.current.innerHTML = renderEnd - renderStart
    }
  })

  return measureOutputRef
}

const ComponentRenderMeasure = ({ children }) => {
  const measureOutputRef = useMeasureOutputRef()

  return (
    <div style={{ border: '1px solid', padding: '0.5em' }}>
      <p>Approximate time to render the entire app with component below: <span ref={measureOutputRef}>-</span>ms</p>
      <div>
        {children}
      </div>
    </div>
  )
}

export default ComponentRenderMeasure
