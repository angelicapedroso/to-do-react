import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login';

export default function App(): React.FunctionComponentElement<{}> {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
}
