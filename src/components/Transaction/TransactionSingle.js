import React from 'react'
import WooCommerceAPI from 'woocommerce-api'
import {connect} from 'react-redux'
import "./Transaction.scss"
import {emptySingleItem} from '../redux/SingleItem/singleItemActions'
import hellomitrlogo from '../../Images/logo.png'
import checked from './checked.png'
import Success from '../Lottie/Success'
import Failure from '../Lottie/Failure'
import cancel from './cancel.png'
let seconds = 5

function TransactionSingle(props) {
    var WooCommerce = new WooCommerceAPI({
        url: 'https://api.hellomitr.com/',
        consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
        consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
        wpAPI: true,
        version: 'wc/v1',
        queryStringAuth:true
      });
    
     
      const [transactionStatus,setTransactionStatus]= React.useState(true)
    React.useEffect(()=>{
      var url_string = window.location.href
      var url = new URL(url_string);
      console.log(url)
      let str = url.search
      let count = 0
      let payment_method=""
      var transactionId =""
      var address =""
      var gateway =""
      for (let letter of str){
          if(letter === "?"){
              count = count + 1;
          }
      }
      if(count ===2){
        // do computation for cashe
        url.search = `?${url.search.split("?")[1]}&${url.search.split("?")[2]}`
         transactionId = url.searchParams.get("transactionId");
         address = url.searchParams.get("address");
         gateway = "cashe";
         payment_method = gateway
        console.log(transactionId,address,gateway);
        console.log("transactionid",transactionId.length)
      }else{
        //do computation for other gateways
         transactionId = url.searchParams.get("transactionId");
         address = url.searchParams.get("address");
         gateway = url.searchParams.get("gateway");
         payment_method = gateway
        console.log(transactionId,address,gateway);
        console.log("transactionid",transactionId.length)
      }
      
      let line_items = [{product_id:props.singleItem.id,quantity:1,images:props.singleItem.images}]

        if(transactionId==="null" || transactionId.length===0){
          //failed transaction
          setTransactionStatus(false)
          setTimeout(() => {
            props.history.push("/checkout")  
          }, 3000);
          
                  
        }else{
            if(address.toString() === "1"){
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
                              props.emptySingleItem()
                                window.location.href = `${process.env.REACT_APP_DEVELOPMENT}/orders`;
                            })
                            .catch((error) => {
                            });
            }else{
                //shipping
                
                const data = {
                    payment_method,
                    payment_method_title: payment_method,
                    set_paid: true,
                    shipping: props.user.shipping,
                    customer_id:props.user.id,
                    line_items,
                    transaction_id:transactionId
                
                  };
                  WooCommerce.postAsync("orders", data)
                    .then((response) => {
                        props.emptySingleItem()
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
const mapStateToProps = ({cart,user,singleItem,finalItem})=>{
    return{
        cart,
        user:user.user,
        singleItem:finalItem
    }
    }
    const mapDispatchToProps =(dispatch)=>{
      return {
        emptySingleItem:()=>dispatch(emptySingleItem())
      }
    }
export default connect(mapStateToProps,mapDispatchToProps)(TransactionSingle)