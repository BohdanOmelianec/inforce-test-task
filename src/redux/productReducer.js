const initialState = {
    currentElement: {},
    products: [
        {
            id: 1,
            imageUrl: 'https://www.hyundai.com/content/hyundai/ww/data/news/data/2021/0000016609/image/newsroom-0112-photo-1-2021elantranline-1120x745.jpg',
            name: 'Car',
            count: 4,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat explicabo assumenda quam labore cumque nam optio nobis laboriosam eveniet voluptate deleniti fugiat numquam, animi eius quos odio ad et fugit.bore cumque nam optio nobis laboriosam eveniet voluptate deleniti',
            size: {
                width: 160,
                height: 180
            },
            weight: '1200g',
            comments: [
                {
                    id: 1,
                    productId: 1,
                    description: 'some text here',
                    date: '14:00 22.08.2021'
                },
                {
                    id: 2,
                    productId: 1,
                    description: 'some text here 2222',
                    date: '14:00 22.08.2021'
                }
            ]
            
        },
        {
            id: 2,
            imageUrl: 'https://surlybikes.com/uploads/bikes/_medium_image/Karate_Monkey_SUS_BK0998_Background-2000x1333.jpg',
            name: 'Bike',
            count: 7,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat explicabo assumenda quam labore cumque nam optio nobis laboriosam eveniet voluptate deleniti fugiat numquam, animi eius quos odio ad et fugit.bore cumque nam optio nobis laboriosam eveniet voluptate deleniti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat explicabo assumenda quam labore cumque nam optio nobis laboriosam eveniet voluptate deleniti fugiat numquam, animi eius quos odio ad et fugit.bore cumque nam optio nobis laboriosam eveniet voluptate deleniti',
            size: {
                width: 50,
                height: 100
            },
            weight: '500g',
            comments: [
                {
                    id: 1,
                    productId: 2,
                    description: 'some text here',
                    date: '14:00 22.08.2021'
                }
            ]
            
        },
        {
            id: 3,
            imageUrl: 'https://www.com-gest.com/photo/yachts/26/5.jpg',
            name: 'Boat',
            count: 5,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat explicabo assumenda quam labore cumque nam optio nobis laboriosam eveniet voluptate deleniti fugiat numquam, animi eius quos odio ad et fugit.bore cumque nam optio nobis laboriosam eveniet voluptate deleniti',
            size: {
                width: 50,
                height: 100
            },
            weight: '500g',
            comments: [
                {
                    id: 1,
                    productId: 3,
                    description: 'some text here',
                    date: '14:00 22.08.2021'
                }
            ]
            
        }
    ]
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, {...action.payload, id: state.products.length + 1}]

            }
        case 'EDIT_PRODUCT':
            const curr = {...action.payload};
            console.log(curr)
            const arr = state.products.map(product => {
                if(product.id === action.payload.id) {
                    product = action.payload;
                    return product
                }
                return product;
            })
            return {
                ...state,
                products: [...arr],
                currentElement: {...curr}

            }
        case 'SET_CURRENT_ELEMENT':
            return {
                ...state,
                currentElement: action.payload
            }
        case 'REMOVE_ELEMENT':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case 'REMOVE_COMMENT':
            const Products = [...state.products];
            let currentElement = {...state.currentElement};

            Products.map(product => {
                    if(product.id === action.element) {
                        product.comments = product.comments.filter(comment => comment.id !== action.payload)
                        currentElement = product
                        return product;
                    }
                    return product;
                });

            return {
                ...state,
                products: [...Products],
                currentElement: {...currentElement}
            }
        case 'ADD_COMMENT':
            const newProducts = [...state.products];
            let newCurrentElement = {...state.currentElement};

            newProducts.map(product => {
                    if(product.id === action.payload.productId) {
                        product.comments = [...product.comments, {id: product.comments.length + 1, ...action.payload}];
                        newCurrentElement = product
                        return product;
                    }
                    return product;
                });
            
            return {
                ...state,
                products: [...newProducts],
                currentElement: {...newCurrentElement}
            }
            
    
        default:
            return state;
    }
}

export default productReducer;