import React, { useState } from "react";
import ComponentRenderMeasure from "./ComponentRenderMeasure";
import HeavyComponent from "./HeavyComponent";

const useForceUpdate = () => {
  const [, setInvisibleState] = useState();
  return () => setInvisibleState({});
};

const MemoHeavyComponent = React.memo(HeavyComponent);

const App = () => {
  const [baseNumber, setBaseNumber] = useState(8);
  const [memoEnabled, setMemoEnabled] = useState(false);
  const forceUpdate = useForceUpdate();

  return (
    <div>
      <h1>React.memo example</h1>
      <p>
        This example showcases the benefits of using <code>React.memo</code> for
        cpu intensive components.
      </p>
      <p>
        The number input below is used as base number for an exponential
        iteration inside the heavy components.
      </p>
      <p>
        The checkbox toggle switches between the original component and the
        component using <code>React.memo</code>.
      </p>
      <p>
        Check the time taken by each <code>HeavyComponent</code> instance for
        the first render and click "Force application rerender" to see the
        optimization effect.
      </p>
      <p>
        Try changing the base number and check how the execution time increases
        again for the memoized version of the component because of the props
        change.
      </p>
      <p>
        Measurement is an approximation. To get accurate render times for each component, use React Devtools.
      </p>

      <p>
        <input
          type="number"
          min="8"
          step="1"
          value={baseNumber}
          onChange={(e) => setBaseNumber(e.target.value)}
        />
      </p>
      <p>
        <button type="button" onClick={forceUpdate}>
          Force application rerender
        </button>
      </p>
      <p>
        <label>
          Enable React.memo:{" "}
          <input
            type="checkbox"
            checked={memoEnabled}
            onChange={(e) => setMemoEnabled(e.target.checked)}
          />
        </label>
      </p>

      <h2>
        {memoEnabled ? "Component with React.memo" : "Original component"}
      </h2>
      <div style={{ display: "flex" }}>
        <ComponentRenderMeasure>
          {memoEnabled ? (
            <MemoHeavyComponent baseNumber={baseNumber} />
          ) : (
            <HeavyComponent baseNumber={baseNumber} />
          )}
        </ComponentRenderMeasure>
      </div>
    </div>
  );
};

export default App;
