import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

const MultipleCustomHooks = () => {

  const  { counter, increment } = useCounter(1)

  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  // console.log(state);
  const { author, quote } = !!data && data[0]

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr/>
      {
        loading ?
        (<div className="aler alert-info text-center">
          loading
        </div>)
        :
        (<blockquote className="blockquote text-right">
          <p className="text-italic">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>)
      }

      <button 
        onClick={ () => increment(1) }
        className="btn btn-primary">Siguiente Quote</button>
      
      
    </div>
  )
}

export default MultipleCustomHooks