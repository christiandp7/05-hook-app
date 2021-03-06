import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoApp from '../../../components/08-useReducer/TodoApp'
import { demoTodos } from '../../fixtures/demoTodos'
import { act } from '@testing-library/react'

describe('Puebas en <TodoAdd />', () => {
	const wrapper = shallow(<TodoApp />)
	Storage.prototype.setItem = jest.fn(() => {})

	test('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('should add a TODO', () => {
		const wrapper = mount(<TodoApp />)
		act(() => {
			wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
			wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])
		})
		expect(wrapper.find('h1').text().trim()).toBe('TodoApp Reducer (0/2)')
		expect(localStorage.setItem).toHaveBeenCalledTimes(2)
	})

	test('should delete a todo', () => {
		wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
		wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id)

		expect(wrapper.find('h1').text().trim()).toBe('TodoApp Reducer (0/0)')
	})
})
