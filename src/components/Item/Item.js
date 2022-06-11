import React from 'react'
import "./Item.scss"
import smartwatch from '../../Images/subheader/smartwatch.png'
import Rating from '@mui/material/Rating';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {withRouter} from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton'
import {compose} from "redux";
import {connect} from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove';
import {addToCart,increaseItemCount,decreaseItemCount,removeFromCart} from '../redux/cart/cartActions'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
function Item(props) {
  let details = props.item;
  const [inCart,setInCart] = React.useState([])
  React.useEffect(()=>{
    if(props.cart.length>0 && props.item){
      let av = props.cart.filter(item=>item.id===props.item.id)
      if(av.length>0){
        setInCart(av)
      }
    }else{
      setInCart([])
    }
  },[props.cart])
  const renderOff = ()=>{
    return Math.ceil(100-(props.price/props.regularPrice*100))
  }
  return (
    <div className="shadow-sm item" >
      <div  onClick={()=>props.history.push("/itemdetail",props.item)}>
       <span className="discount">
           <FlashOnIcon color="primary" /> Flash Sale
        </span>
        <div className=" info">
        
            <img src = {props.image?props.image:smartwatch} alt="smartwatch" />
            <p className="heading">{props.name?props.name:"JBL 3.5mm earhpnes"}</p>
            <div className="rating">
            {/* <Rating name="read-only" value={props.rating?parseInt(props.rating):4} readOnly /> */}
            <p>Fast delivery available</p>
            </div>
            <p>
              <span className="total">₹{props.price?props.price:205}</span> <span className="mrp">{props.regularPrice?props.regularPrice:props.price}</span>
              {props.regularPrice&&props.price?<span className="off">{renderOff()}% off</span>:null}
              </p>
              </div>
        </div>

        <div className="row align-items-center justify-content-end cartcountdiv">
        {inCart.length>0? <IconButton  onClick={()=>{
          if(inCart[0].count===1){
            setInCart([])
            props.removeFromCart(details)
          }else{
            props.decreaseItemCount(details.id)
          }}} color="primary" className="iconbutton">
                <RemoveIcon />
              </IconButton>:null}
        
              {inCart.length>0?<div>
                <h2 className="count">{inCart[0].count}</h2>
              </div>:null}
              <IconButton disabled={inCart.length>0?(inCart[0].count===2?true:false):null} onClick={()=>inCart.length>0?props.increaseItemCount(details.id):props.addToCart(details)} color="primary" className="iconbuttonadd">
                <AddIcon />
              </IconButton>      
              </div>
       

    </div>
  )
}

const mapStateToProps = ({cart})=>{
  return {
    cart
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    removeFromCart:(item)=>dispatch(removeFromCart(item)),
    addToCart:(item)=>dispatch(addToCart(item)),
    increaseItemCount:(id)=>dispatch(increaseItemCount(id)),
    decreaseItemCount:(id)=>dispatch(decreaseItemCount(id))
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps,mapDispatchToProps)
  )(Item);