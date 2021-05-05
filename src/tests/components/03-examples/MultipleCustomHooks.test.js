import React from 'react'
import { shallow } from 'enzyme'
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Tests in <MultipleCustomHooks />', () => {
	test('should render', () => {
		useCounter.mockReturnValue({
			counter: 1,
			increment: () => {},
		})
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		})

		const wrapper = shallow(<MultipleCustomHooks />)
		expect(wrapper).toMatchSnapshot()
	})

	test('should show the info', () => {
		useCounter.mockReturnValue({
			counter: 1,
			increment: () => {},
		})
		useFetch.mockReturnValue({
			data: [
				{
					author: 'Christian',
					quote: 'Hola Mundo',
				},
			],
			loading: false,
			error: null,
		})
		const wrapper = shallow(<MultipleCustomHooks />)
		expect(wrapper.find('.alert').exists()).toBe(false)
		expect(wrapper.find('.text-italic').text().trim()).toBe('Hola Mundo')
		expect(wrapper.find('footer').text().trim()).toBe('Christian')
		// console.log(wrapper.html())
	})
})
