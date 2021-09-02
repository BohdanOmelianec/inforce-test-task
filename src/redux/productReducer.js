const initialState = {
    products: [
        {
            id: 1,
            imageUrl: 'https://www.hyundai.com/content/hyundai/ww/data/news/data/2021/0000016609/image/newsroom-0112-photo-1-2021elantranline-1120x745.jpg',
            name: 'Car',
            count: 4,
            size: {
                width: 160,
                height: 180
            },
            weight: '1200g',
            comments: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat explicabo assumenda quam labore cumque nam optio nobis laboriosam eveniet voluptate deleniti fugiat numquam, animi eius quos odio ad et fugit.bore cumque nam optio nobis laboriosam eveniet voluptate deleniti'
        },
        {
            id: 2,
            imageUrl: 'https://surlybikes.com/uploads/bikes/_medium_image/Karate_Monkey_SUS_BK0998_Background-2000x1333.jpg',
            name: 'Bike',
            count: 7,
            size: {
                width: 50,
                height: 100
            },
            weight: '500g',
            comments: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat explicabo assumenda quam labore cumque nam optio nobis laboriosam eveniet voluptate deleniti fugiat numquam, animi eius quos odio ad et fugit.bore cumque nam optio nobis laboriosam eveniet voluptate deleniti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat explicabo assumenda quam labore cumque nam optio nobis laboriosam eveniet voluptate deleniti fugiat numquam, animi eius quos odio ad et fugit.bore cumque nam optio nobis laboriosam eveniet voluptate deleniti'
        },
        {
            id: 3,
            imageUrl: 'https://www.com-gest.com/photo/yachts/26/5.jpg',
            name: 'Boat',
            count: 5,
            size: {
                width: 50,
                height: 100
            },
            weight: '500g',
            comments: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat explicabo assumenda quam labore cumque nam optio nobis laboriosam eveniet voluptate deleniti fugiat numquam, animi eius quos odio ad et fugit.bore cumque nam optio nobis laboriosam eveniet voluptate deleniti'
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
    
        default:
            return state;
    }
}

export default productReducer;