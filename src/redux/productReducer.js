
const initialState=[];

export const productReducer=(data=initialState, action)=>{
    switch (action.type) {
        
        case 'GET_PRODUCT':
            console.log(action.payload);
            return [...data,action.payload]
    
        default:
           return data;
    }
}