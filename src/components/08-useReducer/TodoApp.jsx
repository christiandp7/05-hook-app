import React, { useReducer, useEffect } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';


const init = () => {
  // const initState = [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender React',
  //   done: false
  // }]
  // return JSON.parse(localStorage.getItem('todos')) || initState
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init) 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])

  const handleDelete = todoId => {
    const action = {
      type: 'delete',
      payload: todoId
    }
    dispatch(action);
  }

  const handleToggle = todoId => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  const handleAddTodo = newTodo => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }


  const completedTodos = (todos) =>  todos.filter(todo => todo.done === true ).length;

  return (
    <div>
      <h1>TodoApp Reducer ({completedTodos(todos)}/{ todos.length })</h1>
      <hr/>

      <div className="container">
        <div className="row">
          <div className="col-7">
            Todos
          </div>
          <div className="col-5">
            Agregar
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <TodoList 
              todos={todos} 
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          </div>
          <div className="col-5">
            <TodoAdd handleAddTodo={handleAddTodo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoApp
