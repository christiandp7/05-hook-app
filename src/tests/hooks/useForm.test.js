import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('test usedForm', () => {
	const initialForm = {
		name: 'christian',
		emai: 'christiandp7@gmail.com',
	}

	test('should return a default form', () => {
		const { result } = renderHook(() => useForm(initialForm))
		const [values, handleInputChange, reset] = result.current

		expect(values).toEqual(initialForm)
		expect(typeof handleInputChange).toBe('function')
		expect(typeof reset).toEqual('function')
	})

	test('should change the form values (name)', () => {
		const { result } = renderHook(() => useForm(initialForm))
		const [, handleInputChange] = result.current

		act(() => {
			handleInputChange({
				target: {
					name: 'name',
					value: 'Melissa',
				},
			})
		})

		const [values] = result.current
		expect(values).toEqual({ ...initialForm, name: 'Melissa' })
	})

	test('should restart the form using RESET', () => {
		const { result } = renderHook(() => useForm(initialForm))
		const [, handleInputChange, reset] = result.current

		act(() => {
			handleInputChange({
				target: {
					name: 'name',
					value: 'Melissa',
				},
			})

			reset()
		})

		const [values] = result.current
		expect(values).toEqual(initialForm)
	})
})
