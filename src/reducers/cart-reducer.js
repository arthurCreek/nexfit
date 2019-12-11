// Cart item reducer

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_CART':
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
        case 'REMOVE_ITEM':
            return state.filter(function(item) {
                if(item.name === action.data.name && item.imgSrc === action.data.imgSrc && item.size === action.data.size){
                    return false;
                }
                return true;
            });
        case 'REMOVE_ITEM_ROW':
            return state.filter(function(item) {
                if(item.name === action.data.name && item.imgSrc === action.data.imgSrc && item.size === action.data.size){
                    return false;
                }
                return true;
            });
        default:
            return state;
    }
}

export default cartReducer;