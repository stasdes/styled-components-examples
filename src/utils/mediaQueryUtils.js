import { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 500
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((mediaType, sizeLabel) => {
  mediaType[sizeLabel] = (...args) => css`
    @media (max-width: ${sizes[sizeLabel]}px) {
      ${css(...args)}
    }
  `

  return mediaType
}, {})