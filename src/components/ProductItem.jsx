import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ProductItem = ({product}) => {
    const dispatch = useDispatch();
    // When user is clickink the SeeDetails button the method set element that should be shown on ListItemInfo page
    const setCurrentElement = () => {
        dispatch({
            type: 'SET_CURRENT_ELEMENT',
            payload: product
        })
    };
    // Remove specific element from the page
    const removeElement = () => {
        if(window.confirm('Are you sure?')) {
            dispatch({
                type: 'REMOVE_ELEMENT',
                payload: product.id
            })
        }  
    }

    return (
        <ProductCard>
            <ProductImage url={product.imageUrl}/>
            <ProductShortDesc>
                <ProductName>{product.name}</ProductName>
                <ProductQuantity>In stock: {product.count}</ProductQuantity>
                <ProductDescription>{product.description}</ProductDescription>
                <Buttons>
                    <RemoveBtn onClick={removeElement}>Remove</RemoveBtn>
                    <NavLink to='/list-item-info'><SeeDetailsBtn onClick={setCurrentElement}>See details</SeeDetailsBtn></NavLink>
                </Buttons>
            </ProductShortDesc>
        </ProductCard>
    );
};

export default ProductItem;


const ProductCard = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: #efefef;
    width: 90%;
    margin: 10px auto;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`;

const ProductImage = styled.div`
    background: url(${props => props.url}) no-repeat center;
    background-size: cover;
    max-width: 100%;
    height: 300px;
`;

const ProductShortDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100%;
`;

const ProductName = styled.h3`
    text-align: center;
    align-self: flex-start;
    padding: 5px;
    
`;

const ProductQuantity = styled.div`
    padding: 5px 10px;
    margin: 0 10px;
    color: #f78d0b;
    align-self: flex-end;
`;

const ProductDescription = styled.p`
    height: 75px;
    overflow: hidden;
    align-self: flex-start;
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;



const SeeDetailsBtn = styled.button`
    padding: 5px 10px;;
    margin: 10px;
    align-self: flex-end;
    background: #2bd2ec;
	color: white;
	border: none;
	outline: none;
	border-radius: 5px;
    cursor: pointer;
    a {
        text-decoration: none;
        color: white;
    }
    :hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    }
`;

const RemoveBtn = styled(SeeDetailsBtn)``;