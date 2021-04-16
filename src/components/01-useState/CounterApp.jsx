import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {

  const [{counter1, counter2}, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  })

  
  return (
    <div>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>

      <button 
        onClick={ () => {
          setCounter(state => ({
            ...state,
            counter1: counter1 + 1
          }))
        }}
        className="btn btn-primary">+1</button>

    </div>
  )
}

export default CounterApp
