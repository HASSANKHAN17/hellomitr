import React from 'react'
import "./Menu.scss"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import { withRouter } from 'react-router-dom';
import {setUser,deleteUser} from '../../redux/user/userActions'
import {connect} from 'react-redux'
import WooCommerceAPI from 'woocommerce-api'
import {compose} from "redux";
import {Button} from '@mui/material'
var WooCommerce = new WooCommerceAPI({
    url: 'https://api.hellomitr.com/',
    consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
    consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
    wpAPI: true,
    version: 'wc/v1',
    queryStringAuth:true
  });
function Menu({id,history,user,setUser,deleteUser}) {
    React.useEffect(()=>{
        WooCommerce.getAsync(`customers?email=${user.email}`)
        .then((response) => {
          setUser(JSON.parse(response.toJSON().body)[0])
        })
        .catch(err=>{
        })
    },[])
  return (
    <div className="shadow-sm menu">
        <p className="container-heading">Dashboard</p>
        <div onClick={()=>history.push("/orders")} className={id===1?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><ShoppingBagOutlinedIcon /></div>
            <div className="heading"><p>Orders</p></div>
            <div className="ml-auto total"><p>{user.orders_count}</p></div>
        </div>

        {/* <div className={id===2?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><FavoriteBorderOutlinedIcon /></div>
            <div className="heading"><p>Wishlist</p></div>
            <div className="ml-auto total"><p>15</p></div>
        </div> */}

        <div className={id===3?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><HeadsetMicOutlinedIcon /></div>
            <div className="heading"><p>Support tickets</p></div>
            <div className="ml-auto total"><p>0</p></div>
        </div>

        <p className="container-heading">Account Settings</p>
        <div onClick={()=>history.push("/myprofile")} className={id===4?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><PersonIcon /></div>
            <div className="heading"><p>Profile Info</p></div>
            <div className="ml-auto total"><p>3</p></div>
        </div>

        <div onClick={()=>history.push("/addresses")} className={id===5?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><AddLocationAltOutlinedIcon /></div>
            <div className="heading"><p>Addresses</p></div>
            <div className="ml-auto total"><p>2</p></div>
        </div>

        <div className={id===6?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><PaymentOutlinedIcon /></div>
            <div className="heading"><p>Payment Methods</p></div>
            <div className="ml-auto total"><p>0</p></div>
        </div>
        <div style={{textAlign:"center"}}>
        <Button onClick={()=>{
          deleteUser()
          history.push("/")
        }}>Logout</Button>
        </div>
    </div>
  )
}


const mapStateToProps =({user,cart})=>{
	return {
		user:user.user,
		cart
	}
	}
    const mapDispatchToProps = (dispatch)=>{
        return {
          setUser:(user)=>dispatch(setUser(user)),
          deleteUser:()=>dispatch(deleteUser()),
        }
      }
	export default compose(
		withRouter,
		connect(mapStateToProps,mapDispatchToProps)
	  )(Menu);
