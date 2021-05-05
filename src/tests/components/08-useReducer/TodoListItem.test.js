import React from 'react'
import { shallow } from 'enzyme'
import TodoListItem from '../../../components/08-useReducer/TodoListItem'
import { demoTodos } from '../../fixtures/demoTodos'

describe('Test <TodoListItem />', () => {
	const handleDelete = jest.fn()
	const handleToggle = jest.fn()

	const wrapper = shallow(
		<TodoListItem
			todo={demoTodos[0]}
			index={0}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/>,
	)

	test('should render <TodoListItem />', () => {
		expect(wrapper).toMatchSnapshot()
	})
	test('should call handleDelete function', () => {
		// toHaveBeenCalledWith
		wrapper.find('button').simulate('click')
		expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
	})
	test('should call handleToggle function', () => {
		// toHaveBeenCalledWith
		wrapper.find('p').simulate('click')
		expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
	})
	test('should show text correctly', () => {
		// p content
		const p = wrapper.find('p')
		expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)
	})
	test('should have complete class when donde is true', () => {
		// p content
		const todo = demoTodos[0]
		todo.done = true
		const wrapper = shallow(
			<TodoListItem
				todo={todo}
				index={0}
				handleDelete={handleDelete}
				handleToggle={handleToggle}
			/>,
		)

		expect(wrapper.find('p').hasClass('complete')).toBe(true)
	})
})
