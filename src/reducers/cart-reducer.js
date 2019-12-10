// Cart item reducer

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_CART':
            console.log(action);
            return action.items;
        case 'ADD_ITEM':
            return [...state,
            action.data];   
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