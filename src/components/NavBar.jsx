import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const NavBar = () => {
    return (
        <Navigation>
            <NavLink to='/inforce-test-task'>Product List</NavLink>
        </Navigation>
    );
};

export default NavBar;


const Navigation = styled.div`
    display: flex;
    background: #2bd2ec;
    height: 50px;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        color: white;
    }
`;

