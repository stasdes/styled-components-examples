import React, { Component } from 'react'
import './App.css';
import StyledSpan1 from './components/StyledSpan/StyledSpan1'
import StyledSpan2 from './components/StyledSpan/StyledSpan2'
import ExtendedStyledSpan2 from './components/StyledSpan/ExtendedStyledSpan2'
import ChangedStyledSpan2 from './components/StyledSpan/ChangedStyledSpan2'
import StyledComponent from './components/StyledComponent/StyledComponent'
import { globalStyle } from './utils/globalStyle' // eslint-disable-line

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ol>
          <li><a href='https://cdn-images-1.medium.com/max/1600/1*CyoBdFHojKjEnQ8_CJRuKQ.png' target='blank'><StyledSpan1>Problems with css</StyledSpan1></a></li>
          <li>
            <a href='https://hackernoon.com/why-we-use-styled-components-at-decisiv-a8ac6e1507ac' target='blank'><StyledSpan1>Why to use styled component &bull; </StyledSpan1></a>
            <a href='https://github.com/styled-components/comparison' target='blank'><StyledSpan1>comparison &bull; </StyledSpan1></a>
            <a href='https://github.com/MicheleBertoli/css-in-js' target='blank'><StyledSpan1>comparison2</StyledSpan1></a>
          </li>
          <li><a href='https://www.styled-components.com/docs/basics' target='blank'><StyledSpan1>style-components</StyledSpan1></a></li>
          <li><a href='https://www.styled-components.com/docs/advanced#tagged-template-literals' target='blank'><StyledSpan1>tagged template literals</StyledSpan1></a></li>
          <li >
            <StyledSpan1 className='AdditionalStyle'>Span 1</StyledSpan1>
          </li>
          <li >
            <StyledSpan2>Span 2</StyledSpan2>
          </li>
          <li >
            <ExtendedStyledSpan2>Extended</ExtendedStyledSpan2>
          </li>
          <li >
            <ChangedStyledSpan2>Changed</ChangedStyledSpan2>
          </li>
          <li >
            <StyledComponent background='cyan'>
              Styled component <StyledSpan2>Span 2</StyledSpan2>
            </StyledComponent>
          </li>
          <li className='Special'>
            <StyledComponent background='transparant'>
              Inside special
            </StyledComponent>
          </li>
        </ol>
      </div>
    );
  }
}

export default App
