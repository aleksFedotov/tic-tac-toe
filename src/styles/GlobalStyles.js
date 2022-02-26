import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {

/* Primary */

--color-light-blue: #31C3BD;
  --color-light-blue-hover: #65E9E4;
  --color-light-yellow: #F2B137;
  --color-light-yellow-hover: #FFC860;
  --color-dark-navy: #1A2A33;
  --color-semi-dark-navy: #1F3641;
  --color-silver: #A8BFC9;
  --color-silver-hover: #DBE8ED;

  --font-size-heading-l: 40px;
  --font-size-heading-m: 24px;
  --font-size-heading-s: 20px;
  --font-size-heading-xs: 16px;
  --font-size-body: 14px;


  --letter-spacing-heading-l: 2.5px;
  --letter-spacing-heading-m: 1.5px;
  --letter-spacing-heading-s: 1.25px;
  --letter-spacing-heading-xs: 1px;
  --letter-spacing-body: 0.8px;

  --font-weight-heading: 700;
  --font-weight-body: 500;

  --box-shadow-color: rgba(0,0,0,0.4);

}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  font-size: 62.5%;
}

body {
  font-size: 1.4rem;
  font-family: 'Outfit', sans-serif;
  min-height:100vh;

  background: var(--color-dark-navy);
  color: var(--text-main);
  
}

h1,h2 {
  font-family: 'Antonio', sans-serif;
}

#root{
  position: relative;
  min-height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
}


`;

export default GlobalStyles;
