import React from "react";
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from "./components/NavBar";
import { Redirect } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import ProductList from "./components/ProductList";
import ListItemInfo from "./components/ListItemInfo";


function App() {
  return (
    <>
      <GlobalStyle />
      {/* NavBar provides a header with main link to home page */}
      <NavBar />
      <Wrapper>
        <Route path='/inforce-test-task'  exact={true}>
          {/* List of all products that are in localStorage */}
          <ProductList />
          <Redirect to='/inforce-test-task/' />
        </Route>
        <Route path='/list-item-info'  exact={true}>
          {/* This element contains info of a specific element and renders when user is clicking SeeDetails button */}
          <ListItemInfo />
        </Route>
      </Wrapper>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica Neue, sans-serif;
    
  }
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;