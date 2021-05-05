import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch'

describe('useFetch tests', () => {
	test('should return default info', () => {
		const { result } = renderHook(() =>
			useFetch('https://reqres.in/apierror/users?page=2'),
		)

		const { data, loading, error } = result.current
		expect(data).toBe(null)
		expect(loading).toBe(true)
		expect(error).toBe(null)
	})

	// test('should have desired info', async () => {
	// 	const { result, waitForNextUpdate } = renderHook(() =>
	// 		useFetch('https://reqres.in/apierror/users?page=2'),
	// 	)
	// 	await waitForNextUpdate()

	// 	const { data, loading, error } = result.current
	// 	expect(data.length).toBe(1)
	// 	expect(loading).toBe(true)
	// 	expect(error).toBe(null)
	// })

	// test('should catch error', async () => {
	// 	const { result, waitForNextUpdate } = renderHook(() =>
	// 		useFetch('https://reqres.in/apierror/users?page=2'),
	// 	)
	// 	await waitForNextUpdate()

	// 	const { data, loading, error } = result.current
	// 	expect(data).toBe(null)
	// 	expect(loading).toBe(false)
	// 	expect(error).toBe('No se pudo cargar la info')
	// })
})
