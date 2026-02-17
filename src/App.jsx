import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './store'

const App = () => {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(actions.increment())
  }

  const decrementHandler = () => {
    dispatch(actions.decrement())
  }

  const addbyHandler = () => {
    dispatch(actions.addby())
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <div>
        <button onClick={incrementHandler}>Increase +</button>
        <button onClick={decrementHandler}>Decrease -</button>
        <button onClick={addbyHandler}>Add by +10</button>
      </div>

    </div>
  )
}

export default App