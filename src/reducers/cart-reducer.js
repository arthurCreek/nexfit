// Cart item reducer
const cartReducerDefaultState = [];


const cartReducer = (state = cartReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state,
            action.data];   
        // case 'ADD_ITEM':
        //     let inCart = 0;
        //     const cart = state.map((item) => {
        //         if (item.name === action.data.name) {
        //             inCart = 1;
        //             return {
        //                 ...item,
        //                 amount: item.amount + action.data.amount
        //             } 
        //         } else { 
        //             return item;
        //         }
        //     })
        //     console.log(cart);

        //     if (inCart == 0) {
        //         console.log('0');
        //         return cart;
        //     }  else {
        //         console.log('1');
        //         return [...state,
        //         action.data];
        //     }
        case 'EDIT_ITEM':
            return state.map((item) => {
                if (item.name === action.data.name && item.imgSrc === action.data.imgSrc && item.size === action.data.size) {
                    return {
                        ...item,
                        amount: item.amount + action.data.amount
                    } 
                } else {
                    return item;
                }
            })  
        case 'REMOVE':
            return action.data    
        default:
            return state;
    }
}

export default cartReducer;