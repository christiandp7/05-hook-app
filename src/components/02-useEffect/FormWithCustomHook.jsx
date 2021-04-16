import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css';

const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }


  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormWithCustomHook</h1> 
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

      <div className="form-group">
        <input 
          name="password" 
          type="password"
          className="form-control"
          placeholder="******"
          value={ password }
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">Guardar</button>
      
    </form>
  )
}

export default FormWithCustomHook
