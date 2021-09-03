import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from './Modal';


const ProductList = () => {
    const products = useSelector(state => state.productReducer.products);
    const [value, setValue] = useState(false);
    const [displayModal, setDisplay] = useState('none');

    let productsCopy = [...products];
    // Sorting method that returns new sorted array or array from Redux store if any case isn't matched
    const sorting = () => {
        switch (value) {
            case 'less':
                return productsCopy.sort((a,b) => a.count - b.count)
                
            case 'high':
                return productsCopy.sort((a,b) => b.count - a.count)
                
            case 'az':
                return productsCopy.sort((a,b) => (a.name > b.name ? 1 : -1))
                
            case 'za':
                return productsCopy.sort((a,b) => (a.name < b.name ? 1 : -1))
                
            default:
                return [...products];
        }
    }
    productsCopy = sorting();

    const openModal = () => {
        setDisplay('block');
    }
    const closeModal = () => {
        setDisplay('none');
    }


    return (
        <>
            {/* Block for sorting by quantity in stock or names */}
            <Sort>
                <Span>Sorting by quantity: </Span>
                <Select onChange={ e => setValue(e.target.value) }>
                    <option >...</option>
                    <option value='less'>from less</option>
                    <option value='high'>from high</option>
                </Select>

                <Span>Sorting by name: </Span>
                <Select onChange={e => setValue(e.target.value)}>
                    <option >...</option>
                    <option value='az'>A-Z</option>
                    <option value='za'>Z-A</option>
                </Select>
            </Sort>
            {/* The button opens the modal to add new product */}
            <NewProduct onClick={openModal}>NEW PRODUCT</NewProduct>
            {/* Modal dialog that is hidden by default and opens when user is clicking New Product button */}
            <Modal display={displayModal} close={closeModal}/>
            {/* This block renders array of product from the Redux store */}
            <Content>
                {
                    productsCopy.map(product => <ProductItem key={product.id} product={product}/>)
                }
            </Content>
        </>
    );
};

export default ProductList;

const Sort = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;
`;

const Span = styled.span`
    display: inline-block;
    margin: 10px;
    font-size: 16px;
    text-transform: uppercase;
`;

const Select = styled.select`
	display: inline-block;
	margin: 10px auto;
	width: 150px;
	height: 30px;
	background: #fff;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	border: none;
	font-size: 16px;
    text-transform: uppercase;
	outline: 0;
`;

const NewProduct = styled.button`
    padding: 10px 20px;
    margin: 15px auto;
    width: 30%;
    align-self: center;
    background: #2bd2ec;
	color: white;
	border: none;
	outline: none;
	border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    :hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    }
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

