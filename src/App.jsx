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
    <div className='h-screen mt-10'>
     <div className='p-2 border border-gray-200 rounded-lg shadow-lg w-1/2 min-w-75 mx-auto flex flex-col gap-3'>
       <h1 className='text-center lg:text-4xl text-3xl font-semibold'>Counter App</h1>
      <h2 className='text-3xl font-semibold text-amber-500 shadow-lg border border-gray-200 w-fit px-4 mx-auto'>{counter}</h2>

      <div className='w-full flex gap-3 justify-center'> 
        <button className='p-2 bg-green-500 text-white text-lg font-semibold rounded-sm' onClick={incrementHandler}>Increase +</button>
        <button className='p-2 bg-green-500 text-white text-lg font-semibold rounded-sm' onClick={decrementHandler}>Decrease -</button>
        <button className='p-2 bg-green-500 text-white text-lg font-semibold rounded-sm' onClick={addbyHandler}>Add by +10</button>
      </div>

     </div>
    </div>
  )
}

export default App