import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css';



const CounterWithCustomHook = () => {
  
  const {state, increment, decrement, reset } = useCounter(100)

  return (
    <div>
      <h1>Countert with custom Hook: {state}</h1>

      <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>
      <button onClick={ reset } className="btn btn-danger">reset</button>
      <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>
    </div>
  )
}

export default CounterWithCustomHook
