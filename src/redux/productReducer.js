
const initialState=[];

export const productReducer=(data=initialState, action)=>{
    switch (action.type) {
        case 'GET_ACTION':
            return [...data,action.payload]
    
        default:
           return data;
    }
}