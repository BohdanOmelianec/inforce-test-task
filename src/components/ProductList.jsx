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
            <div>
                <span>Sorting by quantity: </span>
                <select onChange={ e => setValue(e.target.value) }>
                    <option >...</option>
                    <option value='less'>from less</option>
                    <option value='high'>from high</option>
                </select>

                <span>Sorting by name: </span>
                <select onChange={e => setValue(e.target.value)}>
                    <option >...</option>
                    <option value='az'>A-Z</option>
                    <option value='za'>Z-A</option>
                </select>
            </div>
            <NewProduct onClick={openModal}>NEW PRODUCT</NewProduct>
            <Modal display={displayModal} close={closeModal}/>
            <Content>
                {
                    productsCopy.map(product => <ProductItem key={product.id} product={product}/>)
                }
            </Content>
        
        </>
    );
};

export default ProductList;


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

