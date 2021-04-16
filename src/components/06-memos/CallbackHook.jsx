import React, { useState, useCallback, useEffect } from 'react'
import ShowIncrement from './ShowIncrement';
import '../02-useEffect/effect.css'

const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // const increment = () => {
  //   setCounter( counter + 1)
  // }

  const increment = useCallback(
    (factor) => {
      setCounter(c => c + factor)
    },
    [setCounter],
  )

  useEffect(() => {
    console.log('effect increment')
  }, [increment])


  return (
    <div>
      <h1>useCallback Hook</h1>
      <hr/>
      <h3>Counter: { counter }</h3>

      <ShowIncrement increment={increment} />

    </div>
  )
}

export default CallbackHook
