export const storeFinalItem = (item)=>{
    return {
        type:"STORE_FINAL_ITEM",
        payload:item
    }
}

export const removeFinalItem = (item)=>{
    return{
        type:"REMOVE_FINAL_ITEM",
        payload:item
    }
}