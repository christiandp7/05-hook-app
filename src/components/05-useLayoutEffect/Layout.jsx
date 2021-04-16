import React, { useState, useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

const Layout = () => {

  const  { counter, increment } = useCounter(1)

  const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  // console.log(state);
  const { quote } = !!data && data[0]

  const pTag = useRef()
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>Layou Effect</h1>
      <hr/>

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="text-italic">{quote}</p>
      </blockquote>

      <pre>{ JSON.stringify(boxSize, null, 3) }</pre>

      <button 
        onClick={ () => increment(1) }
        className="btn btn-primary">Siguiente Quote</button>
      
      
    </div>
  )
}

export default Layout