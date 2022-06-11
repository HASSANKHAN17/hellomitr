const initialStateCart = {}

const singleItemReducer = (state = initialStateCart,action)=>{
    switch(action.type){
       
        case 'STORE_SINGLE_ITEM':
            return action.payload
        
           
        case "EMPTY_SINGLE_ITEM":
            return {}
        default:
            return state;
    }
}

export default singleItemReducer;