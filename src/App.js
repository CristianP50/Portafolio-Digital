import { Fragment } from 'react';
import { Headers, Welcome, Repositories, Formulario} from './components';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(61, 61, 61);
  }
`;

function App() {
  return (
    <Fragment >
      <Headers />
      <Welcome />
      <Repositories />
      <Formulario />
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
