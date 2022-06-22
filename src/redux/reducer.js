const intialState =[];

export  const cartData= (data=intialState, action)=>{

    switch (action.type) {
        case 'ADD_TO_CART':
            
           return [...data,action.data];
        case 'REMOVE_ITEM':
            // let d= data.filter((item)=> item.id!==action.data.id)
            data.length ? data.length = data.length-1 : data.length=0
            return [...data]
    
        default:
           return data;
    }
}

