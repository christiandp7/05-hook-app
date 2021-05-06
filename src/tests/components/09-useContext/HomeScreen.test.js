import React from 'react'
import { mount } from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext'
import HomeScreen from '../../../components/09-useContext/HomeScreen'

describe('Test in <HomeScreen />', () => {
	const user = {
		name: 'Christian',
		email: 'christiandp7@gmail.com',
	}

	const wrapper = mount(
		<UserContext.Provider value={{ user }}>
			<HomeScreen />
		</UserContext.Provider>,
	)

	test('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})
})
