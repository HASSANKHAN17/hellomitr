const initialStateCart = []

const cartReducer = (state = initialStateCart,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            let itemArr = state.filter(item=>item.id === action.payload.id)
            let count = 1;
            action.payload.count = count;
            if(itemArr.length===0){
                return [...state,action.payload]
            }else{
                return state;
            }
        case 'REMOVE_ITEM':
            return state.filter(item=>item.id!==action.payload.id) 
        
        case "INCREASE_ITEM_COUNT":
            return state.map(item=>{
                if(item.id===action.payload){
                    item.count = item.count+1;
                }
                return item;
            })
        case "DECREASE_ITEM_COUNT":
            return state.map(item=>{
                if(item.id===action.payload){
                    item.count = item.count-1;
                }
                return item;
            })        
        case "EMPTY_CART":
            return []
        default:
            return state;
    }
}

export default cartReducer;