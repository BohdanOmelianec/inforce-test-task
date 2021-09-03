import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'


function EditModal({display, close, info}) {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState(info.imageUrl);
    const [name, setName] = useState(info.name);
    const [count, setCount] = useState(info.count);
    const [desc, setDesc] = useState(info.description);
    const [width, setWidth] = useState(info.size.width);
    const [height, setHeight] = useState(info.size.height);
    const [weight, setWeight] = useState(parseInt(info.weight));


	const submitBtn = () => {
		if(imageUrl && name && count && desc && width && height && weight) {
			dispatch({
				type: 'EDIT_PRODUCT',
				payload: {
                    id: info.id,
					imageUrl,
					name,
					count,
					description: desc,
					size: {
						width,
						height
					},
					weight,
					comments: []
				}
			})
		}
        
	}

	return (
		<ModalBlock display={display}>
			<ModalDialog>
				<ModalContent>
					<form action="#">
						<ModalClose onClick={close}>&times;</ModalClose>
						<ModalTitle>Edit product</ModalTitle>
						
						<ModalInput
							onChange={e => {
								setImageUrl(e.target.value)
							}}
							value={imageUrl}
							required
							placeholder="Image URL *"
							name="url"
							type="text"
						/>
                        <ModalInput
							onChange={e => {
								setName(e.target.value)
							}}
							value={name}
							required
							placeholder="Product name *"
							name="product_name"
							type="text"
						/>
						<ModalInput
							onChange={e => {
								setCount(e.target.value)
							}}
							value={count}
							required
							placeholder="Available in stock *"
							name="count"
							type="number"
						/>
                        <div>
                            <Textarea
                                onChange={e => {
                                    setDesc(e.target.value)
                                }}
                                value={desc}
                                required
                                placeholder="Description *"
                                name="description"
                                type="number"
                            />
                        </div>
                        <ModalInput
							onChange={e => {
								setWidth(e.target.value)
							}}
							value={width}
							required
							placeholder="width *"
							name="width"
							type="number"
						/>
                        <ModalInput
							onChange={e => {
								setHeight(e.target.value)
							}}
							value={height}
							required
							placeholder="height *"
							name="height"
							type="number"
						/>
                        <ModalInput
							onChange={e => {
								setWeight(e.target.value)
							}}
							value={weight}
							required
							placeholder="weight *"
							name="weight"
							type="number"
						/>
						<Buttons>
                            <ModalBtn onClick={submitBtn} >Save</ModalBtn>
                            <ModalBtn  onClick={close}>Cancel</ModalBtn>
                        </Buttons>
					</form>
				</ModalContent>
			</ModalDialog>
		</ModalBlock>
	)
}

export default  EditModal;


export const ModalBlock = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1050;
	display: ${props => props.display};
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.5);
`

export const ModalDialog = styled.div`
	max-width: 500px;
	margin: 40px auto;
`

export const ModalContent = styled.div`
	position: relative;
	width: 100%;
	padding: 40px;
	background-color: #efefef;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	max-height: 90vh;
	overflow-y: auto;
`

export const ModalClose = styled.div`
	position: absolute;
	top: 8px;
	right: 14px;
	font-size: 30px;
	color: #000;
	opacity: 0.5;
	font-weight: 700;
	border: none;
	background-color: transparent;
	cursor: pointer;
`

export const ModalTitle = styled.div`
	text-align: center;
	font-size: 22px;
	text-transform: uppercase;
`

export const ModalInput = styled.input`
	display: block;
	margin: 20px auto 20px auto;
	width: 300px;
	height: 50px;
	background: #fff;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	border: none;
	font-size: 18px;
	text-align: center;
	outline: 0;
`

const Textarea = styled.textarea`
    display: block;
	width: 300px;
	height: 200px;
    margin: 20px auto;
    padding: 5px;
	background: #fff;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	border: none;
	outline: none;
    resize: none;
    font-size: 18px;
	text-align: left;
`;

export const ModalBtn = styled.button`
	display: block;
	width: 120px;
	padding: 5px 20px;
	height: 40px;
	background: #2bd2ec;
	color: white;
	border: none;
	outline: none;
	border-radius: 5px;
    cursor: pointer;
`;


const Buttons = styled.div`
    margin: 0 auto;
    width: 300px;
    display: flex;
    justify-content: space-between;

`;