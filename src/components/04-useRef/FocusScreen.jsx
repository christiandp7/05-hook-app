import React, { useRef } from 'react'
import '../02-useEffect/effect.css';

const FocusScreen = () => {

  const inputRef = useRef()

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>
      <input ref={ inputRef } type="text" className="form-control" placeholder="Su Nombre" />

      <button onClick={ () => { inputRef.current.select() }} className="btn btn-outline-primary mt-5">focus</button>
    </div>
  )
}

export default FocusScreen
