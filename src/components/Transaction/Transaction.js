import React from 'react'
import WooCommerceAPI from 'woocommerce-api'
import {connect} from 'react-redux'
import "./Transaction.scss"
import {emptyCart} from '../redux/cart/cartActions'
import hellomitrlogo from '../../Images/logo.png'
import checked from './checked.png'
import Success from '../Lottie/Success'
import Failure from '../Lottie/Failure'
import cancel from './cancel.png'

function Transaction(props) {
    var WooCommerce = new WooCommerceAPI({
        url: 'https://api.hellomitr.com/',
        consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
        consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
        wpAPI: true,
        version: 'wc/v1',
        queryStringAuth:true
      });
      //const [seconds, setSeconds] = React.useState(5);
    
     
      const [transactionStatus,setTransactionStatus]= React.useState(true)
    React.useEffect(()=>{
     
        let transactionId = props.location.search.split("?")[2]
        transactionId=transactionId.split("=")[1]
        let addressNo = props.location.search.split("?")[1]
        let line_items = props.cart.map(item=>({product_id:item.id,quantity:item.count,images:item.images}))
        transactionId = transactionId.split("&")[0]
        let payment_method = props.location.state?"razorpay":"cashe"



        if(transactionId==="null"){
            //failed transaction
            setTransactionStatus(false)
            props.history.push("/checkout")
                  
        }else if(transactionId.length>5){
            if(addressNo === "address=1"){
                //billing
                    const data = {
                            payment_method,
                            payment_method_title: payment_method,
                            set_paid: true,
                            billing: props.user.billing,
                            customer_id:props.user.id,
                            line_items,
                            transaction_id:transactionId
                        
                          };
                        
                          WooCommerce.postAsync("orders", data)
                            .then((response) => {
                                props.emptyCart()
                                window.location.href = `${process.env.REACT_APP_DEVELOPMENT}/orders`;
                            })
                            .catch((error) => {
                            });
            }else{
                //shipping
                const data = {
                    payment_method,
                    payment_method_title:payment_method,
                    set_paid: true,
                    shipping: props.user.shipping,
                    customer_id:props.user.id,
                    line_items,
                    transaction_id:transactionId
                
                  };
                
                  WooCommerce.postAsync("orders", data)
                    .then((response) => {
                        props.emptyCart()
                        window.location.href = `${process.env.REACT_APP_DEVELOPMENT}/orders`;
                    })
                    .catch((error) => {
                    });
            }
        

        }
    },[])
  return (
    <div>
        {
            transactionStatus?<div className="success-container">
              <div className="row m-auto align-items-center justify-content-center">
              <img src={hellomitrlogo} alt="logo" />
              </div>
              <h1>Payment Successful</h1>
              <Success />
              <p>We have successfully received payment</p>
              <p><b>Redirecting ...</b></p>
            </div>:<div className="success-container">
              <div className="row m-auto align-items-center justify-content-center">
              <img src={hellomitrlogo} alt="logo" />
              </div>
              <h1>Payment Failed</h1>
              <Failure />
              <p>We haven't received the payment</p>
              <p><b>Redirecting ...</b></p>
            </div>
        }
    </div>
  )
}
const mapStateToProps = ({cart,user})=>{
    return{
        cart,
        user:user.user
    }
    }
    const mapDispatchToProps =(dispatch)=>{
      return {
        emptyCart:()=>dispatch(emptyCart())
      }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Transaction)