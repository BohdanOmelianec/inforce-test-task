import React from "react";
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from "./components/NavBar";
import routes from './components/routes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica Neue, sans-serif;
    
  }
`
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Wrapper>
        {
          routes.map(route => (
            <Route path={route.path} key={route.toString()} exact={route.exact}>
              {route.component}
            </Route>
          ))
        }
      </Wrapper>
    </>
  );
}

export default App;


const Wrapper = styled.div`
  width: 80%;
  border: 1px solid black;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;