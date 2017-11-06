import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import StyledSpan2 from '../components/StyledSpan/StyledSpan2'

test('StyledSpan2 should render correctly', () => {
  const tree = renderer.create(<StyledSpan2 />).toJSON()
  expect(tree).toMatchSnapshot()
})