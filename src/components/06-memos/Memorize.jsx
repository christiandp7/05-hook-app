import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import Small from './Small';
import '../02-useEffect/effect.css';

const Memorize = () => {

  const { counter, increment } = useCounter(10)
  const [show, setShow] = useState(true)
  return (
    <div>
      <h1>Memorize</h1>
      <hr/>

      <h3>Counter: <Small value={counter} /></h3>

      <button 
        className="btn btn-primary m-2"
        onClick={ () => increment(1) }
      >+1</button>
      <button 
        className="btn btn-outline-primary m-2"
        onClick={ () => setShow(!show) }
      >
        show/hide { JSON.stringify(show) }
      </button>
    </div>
  )
}

export default Memorize
