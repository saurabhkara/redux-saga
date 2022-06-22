

export const addToCart =(data)=>{
    console.log('Action called', data)

    return {
        type : 'ADD_TO_CART',
        payload : data
    }
}

export const removeItem=(data)=>{
    return {
        type :'REMOVE_ITEM',
        payload : data
    }
}