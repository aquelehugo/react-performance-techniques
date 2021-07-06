import React from "react"

const cpuIntensiveFunction = (baseNumber) => {
  let result = 0

  for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i)
  };

  return result
}

const HeavyComponent = ({ baseNumber }) => {
  const renderStart = new Date().toJSON()
  const result = cpuIntensiveFunction(baseNumber)

  return (
    <div>
      <h3>HeavyComponent</h3>
      <p><strong>Last render timestamp:</strong> {renderStart}</p>
      <p><strong>Intensive function call result:</strong> {result}</p>
    </div>
  )
}

export default HeavyComponent
