import { css, keyframes } from 'styled-components'
import { media } from '../../utils/mediaQueryUtils'
import StyledSpan2 from '../StyledSpan/StyledSpan2'

const fontSize = '2rem'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export default css`
  /* usage of props */
  background: ${props => props.background};

  /* usage of variables */
  font-size: ${fontSize};

  /* inner style */
  > span.count {
    margin-right: 10px;
    border: 1px solid green;

    /* metaselector  */
    &:hover {
      /* animation example with keyframes */
      animation: 3s ${fadeIn} ease-out;
    }
  }

  /* descendant selector with another styled component */
  > ${StyledSpan2} {
    font-size: ${fontSize};
    color: initial;
  }

  /* Contextual selector */
  .Special & {
    font-weight: bold;
    margin-top: 1rem;
  }

  /* media query hard coded */
  @media (max-width: 990px) {
    background: #db7093;
  }

  /* media query with helper template */
  ${media.tablet`
    background: #00ffff;
  `}

  ${media.phone`
    background: #f1e05a;
  `}
`
