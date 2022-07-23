import {createGlobalStyle} from 'styled-components';
import Header from '../components/Header';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

`;

function MyApp({ Component, pageProps }) {
  return <>
      <GlobalStyle/>
      <Header/>
      <Component {...pageProps} />
  </>
}

export default MyApp
