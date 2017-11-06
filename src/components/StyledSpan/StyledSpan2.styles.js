import { css } from 'styled-components'

export default css`
  color: green;
  font-size: 3rem;

  /* Ampersands (&) get replaced by our generated,
     unique classname for that styled component,
     making it easy to have complex logic */
  &:hover {
    color: red;
  }
`