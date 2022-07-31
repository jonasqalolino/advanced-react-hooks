// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// const data = {
//   count: 1,
//   count: 2,
// }
function countReducer(state, action) {
  switch (typeof action) {
    case 'object':
      return {...action}

    case 'function':
      console.log('function!', action)
      return action(state)
    default:
      break
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
