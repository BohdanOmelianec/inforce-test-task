import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';


const ListItemInfo = () => {
    const currentElement = useSelector(state => state.productReducer.currentElement);
    return (
        <>
            <ProductCard>
                <ProductImage url={currentElement.imageUrl} />
                
                <ProductName>{currentElement.name}</ProductName>
                <ProductDescription>
                    <Span>Description: </Span>
                    <P>{currentElement.comments}</P>
                </ProductDescription>
                <ProductDescription>
                    <Span>In stock: </Span>
                    <Span>{currentElement.count}</Span>
                </ProductDescription>
                <ProductDescription>
                    <Span>Width: </Span>
                    <Span>{currentElement.size.width}</Span>
                </ProductDescription>
                <ProductDescription>
                    <Span>Height: </Span>
                    <Span>{currentElement.size.height}</Span>
                </ProductDescription>
                <ProductDescription>
                    <Span>Weight: </Span>
                    <Span>{currentElement.weight}</Span>
                </ProductDescription>
                <Buttons>
                    {/* <RemoveBtn onClick={currentElement}>Remove</RemoveBtn>
                    <SeeDetailsBtn onClick={currentElement}><NavLink to='/list-item-info'>See details</NavLink></SeeDetailsBtn> */}
                </Buttons>
                
        </ProductCard>
        </>
    );
};

export default ListItemInfo;


const Span = styled.span`
    width: 120px;
`;

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
    height: 500px;
`;

const ProductName = styled.h3`
    text-align: center;
    align-self: flex-start;
    padding: 5px;
`;

const ProductDescription = styled.div`
    display: flex;
    align-items: top;
    padding: 10px;
    width: 100%;
    background: #efefef;
`;

const P = styled.div`
    display: inline-block;
    align-items: top;
    width: 500px;
    
`;

// const ProductWidth = styled.div`
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     width: 100%;
// `;
// const ProductHeight = styled.div`
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     width: 100%;
// `;
// const ProductWeight = styled.div`
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     width: 100%;
// `;



const Buttons = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: space-between;
`;



// const SeeDetailsBtn = styled.button`
//     padding: 5px;
//     margin: 10px;
//     align-self: flex-end;
//     background: #26b8ff;
// 	color: white;
// 	border: none;
// 	outline: none;
// 	border-radius: 5px;
//     cursor: pointer;
//     a {
//         text-decoration: none;
//         color: white;
//     }
// `;

// const RemoveBtn = styled(SeeDetailsBtn)``;