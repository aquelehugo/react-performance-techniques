import React, { useMemo, useState} from "react"

const cpuIntensiveFunction = (baseNumber) => {
  let result = 0

  for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i)
  };

  return result
}

const App = () => {
  const [baseNumber, setBaseNumber] = useState(8)
  const [, setInvisibleState] = useState()
  const forceUpdate = () => setInvisibleState({})

  const beforeUseMemo = window.performance.now()
  const result = useMemo(() => cpuIntensiveFunction(baseNumber), [baseNumber])
  const afterUseMemo = window.performance.now()

  return (
    <div>
      <h1>React useMemo example</h1>
      <p>This example showcases the benefits of using <code>useMemo</code> for cpu intensive code.</p>
      <p>The number input below is used as base number for an exponential iteration.</p>
      <p>Check the time taken by the <code>useMemo</code> call for the first render and click "force rerender" to see the optimization effect.</p>
      <p>Try changing the base number and check how the execution time increases again because of the dependency change.</p>
      <p>
        <input type="number" min="8" step="1" value={baseNumber} onChange={(e) => setBaseNumber(e.target.value)} />
      </p>
      <p><strong>Function result:</strong> {result}</p>
      <p><strong>Time taken by last useMemo call:</strong> {afterUseMemo - beforeUseMemo}ms</p>
      <p>
        <button type="button" onClick={forceUpdate}>Force rerender</button>
      </p>
    </div>
  )
}

export default App
