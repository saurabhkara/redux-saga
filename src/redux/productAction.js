
// export const getProduct=(data)=>{
//     console.log(data);
//     return {
//         type:'GET_PRODUCT',
//         payload: data
//     }
// }


export const getProduct=()=>{
    console.log('Action Called');
    return {
        type:'GET_PRODUCT_ITEM',
        // payload: data
    }
}

// export const updateProduct=(data)=>{
//     console.log('Action Called', data);
//     return {
//         type:'UPDATE_ITEM',
//         payload: data
//     }
// }

