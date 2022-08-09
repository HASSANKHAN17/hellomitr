import _ from 'lodash'

export const addressCheck = (user,address)=>{
const {shipping,billing} = user;
console.log("shipping,,,,,,,,,,,,,,,,,,,billing",address)
let flag = false
if(address===0){
    _.map(shipping,(value,key)=>{
        if(value.length<=0 && key!=="email" && key!=="company" && key!=="address_2" && key!=="country"){
            flag=true;
            console.log("shipping",value,key)
            return;
        }
    })
}else{
    _.map(billing,(value,key)=>{
        if(value.length<=0 && key!=="email" && key!=="company" && key!=="address_2" && key!=="country"){
            flag=true;
            console.log("billing",value,key)
            return;
        }
    })
}


return flag
}