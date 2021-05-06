import React from 'react'
import { mount } from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext'
import LoginScreen from '../../../components/09-useContext/LoginScreen'

describe('Test in <LoginScreen />', () => {
	const setUser = jest.fn()
	const user = {
		id: 123,
		name: 'Gianfranco',
		email: 'gianfranco@gmail.com',
	}

	const wrapper = mount(
		<UserContext.Provider value={{ setUser }}>
			<LoginScreen />
		</UserContext.Provider>,
	)
	test('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('should exectute setUser', () => {
		wrapper.find('button').prop('onClick')()
		expect(setUser).toHaveBeenCalledWith(user)
	})
})
