import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import EditModal from './EditModal';


const ListItemInfo = () => {
    const currentElement = useSelector(state => state.productReducer.currentElement);
    const [comment, setComment] = useState('');
    const [displayModal, setDisplay] = useState('none');
    const dispatch = useDispatch();

    const addComment = () => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: {
                productId: currentElement.id,
                description: comment,
                date: new Date().toDateString()
            }
        })
    }

    const removeElement = (id) => {
        if(window.confirm('Are you sure?')) {
            dispatch({
                type: 'REMOVE_COMMENT',
                payload: id,
                element: currentElement.id
            })
        }  
    }

    const openModal = () => {
        setDisplay('block');
    }
    const closeModal = () => {
        setDisplay('none');
    }

    return (
        <>
            <ProductCard>
                <ProductImage url={currentElement.imageUrl} />
                <EditBtn onClick={openModal}>Edit</EditBtn>
                <EditModal display={displayModal} close={closeModal} info={currentElement}/>
                <ProductName>{currentElement.name}</ProductName>
                <ProductDescription>
                    <Span>Description: </Span>
                    <P>{currentElement.description}</P>
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
                <ProductComments>
                    <Span>Comments: </Span>
                    <ComentDiv>{currentElement.comments.map(comment => {
                        return <React.Fragment key={comment.id}>
                        
                            <div>{comment.description}</div>
                            <span>{comment.date}</span>
                            <RemoveBtn onClick={() => removeElement(comment.id)}>Remove</RemoveBtn>
                        </React.Fragment>
                    })}</ComentDiv>
                    
                </ProductComments>
                <div>
                    <Textarea
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        required
                        placeholder="Leave your comment *"
                        name="comment"
                        type="text"
                    />
                    <AddComment onClick={() => {
                        setComment('');
                        addComment();
                    }}>Add Comment</AddComment>
                </div>               
        </ProductCard>
        <NavLink to='/inforce-test-task'><Back>&larr;</Back></NavLink>
        </>
    );
};

export default ListItemInfo;

const Back = styled.span`
    font-size: 60px;
    position: fixed;
    top: 50%;
    left: 5%;
    color: #2bd2ec;
    cursor: pointer;
`;

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

const ProductComments = styled.div`
    display: flex;
    align-items: top;
    padding: 10px;
    width: 100%;
    background: #efefef;
`;

const ComentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: top;
    background: #efefef;
`;

const P = styled.div`
    display: inline-block;
    align-items: top;
    width: 500px;
    
`;

const Textarea = styled.textarea`
    display: block;
	width: 300px;
	height: 100px;
    margin: 20px;
    padding: 5px;
	background: #fff;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	border: none;
	outline: none;
    resize: none;
    font-size: 14px;
	text-align: left;
`;

const AddComment = styled.button`
    padding: 5px;
    margin: 5px 20px;
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
`;

const RemoveBtn = styled(AddComment)``;
const EditBtn = styled(AddComment)``;