import React from 'react'
import { mount } from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext'
import AppRouter from '../../../components/09-useContext/AppRouter'

describe('Test in <AppRouter />', () => {
	const user = {
		id: 1,
		name: 'Christian',
	}
	const wrapper = mount(
		<UserContext.Provider value={{ user }}>
			<AppRouter />
		</UserContext.Provider>,
	)

	test('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})
})
