import { injectGlobal } from 'styled-components';

/*
We do not encourage the use of this.
Try to use it once per app at most, if you must,
contained in a single file. 
Only use it for the rare @font-face definition or body styling.
*/

const globalStyle = injectGlobal`
@font-face {
  font-family: 'Shadows Into Light';
  font-style: normal;
  font-weight: 400;
  src: local('Shadows Into Light'), local('ShadowsIntoLight'), url(https://fonts.gstatic.com/s/shadowsintolight/v7/clhLqOv7MXn459PTh0gXYKkG_nMAIv3PPZbC2XDns-o.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

body {
  font-family: 'Shadows Into Light';
}
`

export { globalStyle }
