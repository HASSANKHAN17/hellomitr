const initialStateCart = {}

const finalItemReducer = (state = initialStateCart,action)=>{
    switch(action.type){
       
        case 'STORE_FINAL_ITEM':
            return action.payload
        
           
        case "REMOVE_FINAL_ITEM":
            return {}
        default:
            return state;
    }
}

export default finalItemReducer;