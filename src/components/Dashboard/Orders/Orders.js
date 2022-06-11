import React from 'react'
import Header from '../../Header/Header'
import SubHeader from '../../Header/SubHeader'
import Menu from '../Menu/Menu'
import WooCommerceAPI from 'woocommerce-api'
import {connect} from 'react-redux'
import {setUser} from '../../redux/user/userActions'
import "./Orders.scss"
import Pagination from '@mui/material/Pagination';
import Chip from '@mui/material/Chip';

function Orders(props) {
    const [orders,setOrders]=React.useState([])
    var WooCommerce = new WooCommerceAPI({
        url: 'https://api.hellomitr.com/',
        consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
        consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
        wpAPI: true,
        version: 'wc/v1',
        queryStringAuth:true
      });
      const [pagenumber,setPageNumber]=React.useState(1)
      const [count,setCount]=React.useState(0)

      const getOrders = (page)=>{
        setPageNumber(page)
        setOrders([])
        WooCommerce.getAsync(`orders?customer=${props.user.id}&per_page=5&page=${page}`)
        .then((response) => {
          
          setOrders(JSON.parse(response.toJSON().body))
        
        })
        .catch((error) => {
        });
      }

    React.useEffect(()=>{
        let c= Math.ceil(props.user.orders_count/5)
      setCount(c)
    getOrders(1)

    },[])
  return (
    <div>
    <Header />
    <SubHeader />
    <div className="row dashboard-container">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <Menu id={1} />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 dashboard-subcontainer">
            <h1>My Orders</h1>
            <div className="row mx-auto align-items-center justify-content-between order-keys">
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                    <p>Order #</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                    <p>Status</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-3">
                    <p>Date Purchased</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                    <p>Total</p>
                </div>
            </div>
            {
                orders.length>0?(
                    orders.map((item,index)=>(
                <div onClick={()=>props.history.push("orderdetail",item)} key={index} className="shadow-sm row mx-auto align-items-center justify-content-between order-values">
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                    <p className="order">{item.id}</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                    <Chip label={item.status} color={item.status==="completed"?"success":item.status==="cancelled"?"error":"default"}/>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-3">
                    <p className='date'>{item.date_created}</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                    <p className="price">₹{item.total}</p>
                </div>
            </div>
                    ))
                ):null
            }
            <div className="ml-auto my-4">
            <Pagination page={pagenumber} onChange={(e,pagenumber)=>getOrders(pagenumber)} count={count} />
            </div>
            

             

        </div>
    </div>
</div>
  )
}

const mapStateToProps = ({cart,user})=>{
return{
    cart,
    user:user.user
}
}
const mapDispatchToProps = (dispatch)=>{
    return {
      setUser:(user)=>dispatch(setUser(user))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Orders)