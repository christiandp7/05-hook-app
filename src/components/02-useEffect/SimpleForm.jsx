import React, { useState, useEffect } from 'react'
import Message from './Message';
import './effect.css';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })

  const { name, email } = formState;

  useEffect(() => {
    
  }, [])

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value

    })
  }

  return (
    <>
      <h1>useEffect</h1> 
      <hr/>

      <div className="form-group">
        <input 
          name="name" 
          type="text"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={ name }
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input 
          name="email" 
          type="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={ email }
          onChange={handleInputChange}
        />
      </div>

      {
        (name === '123') && <Message />
      }
      
    </>
  )
}

export default SimpleForm
