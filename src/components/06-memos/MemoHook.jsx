import React, { useState, useMemo } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effect.css';

const MemoHook = () => {

  const { counter, increment } = useCounter(300)
  const [show, setShow] = useState(true)

  

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>MemoHook</h1>
      <hr/>

      <h3>Counter: {counter}</h3>

      <p>{ memoProcesoPesado }</p>

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

export default MemoHook
