
const initialState=[];

export const productReducer=(data=initialState, action)=>{
    switch (action.type) {
        
        case 'GET_PRODUCT_LIST':
            
            return [...data,action.payload]
        case 'UPDATE_ITEM':
            
            return [...data, ...action.payload]
        default:
           return data;
    }
}