import { shallow } from 'enzyme'
import RealExampleRef from '../../components/04-useRef/RealExampleRef'

describe('Test <RealExampleRef />', () => {
	const wrapper = shallow(<RealExampleRef />)
	test('should render <RealExampleRef />', () => {
		expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
	})

	test('should render <MultipleCustomHooks /> component', () => {
		wrapper.find('button').simulate('click')
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
	})
})
