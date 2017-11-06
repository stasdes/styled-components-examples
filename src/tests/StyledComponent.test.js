import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import StyledComponent from '../components/StyledComponent/StyledComponent'

test('StyledComponent should render correctly', () => {
  const tree = renderer.create(<StyledComponent background='#fff' />).toJSON()
  expect(tree).toMatchSnapshot()
})