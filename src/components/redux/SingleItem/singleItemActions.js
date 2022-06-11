export const storeSingleItem =(item)=>{
return{
    type:"STORE_SINGLE_ITEM",
    payload:item
}
}

export const emptySingleItem= ()=>{
    return {
        type:"EMPTY_SINGLE_ITEM"
    }
}