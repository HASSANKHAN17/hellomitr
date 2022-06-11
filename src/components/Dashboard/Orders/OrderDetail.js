import React from 'react'
import Header from '../../Header/Header'
import SubHeader from '../../Header/SubHeader'
import Menu from '../Menu/Menu'
import WooCommerceAPI from 'woocommerce-api'
import {connect} from 'react-redux'
import "./Orders.scss"
function OrderDetail(props) {
    let details = props.location.state;
    
  return (
    <div>
    <Header />
    <SubHeader />
    <div className="row dashboard-container">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <Menu id={1} />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 dashboard-subcontainer">
            <h1>Order Details</h1>

            <div className="row m-auto order-info justify-content-between">
                <p><span className="greyspan">Order Id: </span>{details.id}</p>
                <p><span className="greyspan">transaction_id: </span>{details.transaction_id}</p>
                <p><span className="greyspan">Placed On: </span>{details.date_paid}</p>
                <p><span className="greyspan">Status: </span>{details.status}</p>
            </div>
            
            {
                details.line_items.map((item,index)=>(
                    <div key={index} className="shadow-sm orderitems">
                    <h4>{item.name}</h4>
                    <p className="greyspan">₹{item.price} x {item.quantity}</p>
                    </div>
                ))
            }

            <div className='row m-auto justify-content-between'>
                <div className="shadow-sm orderaddress col-5">
                    <h4>Address</h4>
                    {
                        details.shipping.first_name?
                        <p>{details.shipping.address_1}</p>:
                        <p>{details.billing.address_1}</p>
                    }
                </div>

                <div className="shadow-sm ordersummary col-6">
                    <h5>Total Summary</h5>
                    <div className="row justify-content-between m-auto">
                        <p>Sub Total:</p>
                        <p><b>₹{parseInt(details.total)-parseInt(details.total_tax)}</b></p>
                    </div>
                    <div className="row justify-content-between m-auto">
                        <p>Shipping Fee:</p>
                        <p><b>₹{details.shipping_total}</b></p>
                    </div>
                    <div className="row justify-content-between m-auto">
                        <p>Discount:</p>
                        <p><b>₹{details.discount_total}</b></p>
                    </div>
                    <hr />
                    <div className="row justify-content-between m-auto">
                        <p><b>Total</b></p>
                        <p><b>₹{details.total}</b></p>
                    </div>
                    <p>Payment done by ₹{details.payment_method}</p>
                </div>
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

export default connect(mapStateToProps)(OrderDetail)