
export const getProduct=(data)=>{
    console.log(data);
    return {
        type:'GET_PRODUCT',
        payload: data
    }
}
