export const addToCart = (item)=>{
return {
    type:'ADD_ITEM',
    payload:item
}
}

export const removeFromCart = (item)=>{
return {
    type:'REMOVE_ITEM',
    payload:item
}
}

export const emptyCart = ()=>{
    return {
        type:"EMPTY_CART"
    }
}

export const increaseItemCount = (id)=>{
    return {
        type:'INCREASE_ITEM_COUNT',
        payload:id
    }
}

export const decreaseItemCount = (id)=>{
    return{
        type:'DECREASE_ITEM_COUNT',
        payload:id
    }
}