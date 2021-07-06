import React, { useState} from "react"
import ComponentRenderMeasure from "./ComponentRenderMeasure"
import HeavyComponent from "./HeavyComponent"

const useForceUpdate = () => {
  const [, setInvisibleState] = useState()
  return () => setInvisibleState({})
}

const MemoHeavyComponent = React.memo(HeavyComponent)

const App = () => {
  const [baseNumber, setBaseNumber] = useState(8)
  const forceUpdate = useForceUpdate()

  return (
    <div>
      <h1>React.memo example</h1>
      <p>This example showcases the benefits of using <code>React.memo</code> for cpu intensive components.</p>
      <p>The number input below is used as base number for an exponential iteration inside the heavy components.</p>
      <p>Check the time taken by each <code>HeavyComponent</code> instance for the first render and click "Force application rerender" to see the optimization effect.</p>
      <p>Try changing the base number and check how the execution time increases again for the memoized version of  because of the props change.</p>
      <p>Even in the first render it may seen one component is faster than the other, but it is because the internal Javascript calls are cached in the browser engine.</p>
      <p>
        <input type="number" min="8" step="1" value={baseNumber} onChange={(e) => setBaseNumber(e.target.value)} />
      </p>
      <p>
        <button type="button" onClick={forceUpdate}>Force application rerender</button>
      </p>
      <div style={{ display: 'flex' }}>
        <div>
          <h2>
            Original component
          </h2>
          <ComponentRenderMeasure><HeavyComponent baseNumber={baseNumber} /></ComponentRenderMeasure>
        </div>
        <div>
          <h2>
            With React.memo
          </h2>
          <ComponentRenderMeasure><MemoHeavyComponent baseNumber={baseNumber} /></ComponentRenderMeasure>
        </div>
      </div>
    </div>
  )
}

export default App
