import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SubHeader from '../Header/SubHeader'
import "./Checkout.scss"
import Button from '@mui/material/Button'
import axios from 'axios'
import GppGoodIcon from '@mui/icons-material/GppGood';
import safeandsecurep from './safeandsecurep.jpeg'
import {connect} from 'react-redux'
import Cashe from './CASHe Logo 2.png'
import Razorpaylogo from './Razorpaay.png'
import WooCommerceAPI from 'woocommerce-api'
import { v4 as uuidv4 } from 'uuid';
import {emptySingleItem} from '../redux/SingleItem/singleItemActions'
import {storeFinalItem} from '../redux/FinalItem/finalItemAction'
import AddressModal from '../Dashboard/Addresses/AddressModal'
import {Alert} from '@mui/material'
function sha512(str) {
  return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
    return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
  });
}
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
function Checkout(props) {
  const [selected,setSelected]=React.useState(2)
  const [address,setAddress]=React.useState(0)
  const [delivery,setDelivery]=React.useState(0)
  const [total,setTotal]=React.useState(0)
  const [subtotal,setSubTotal]=React.useState(0)
  const [open,setOpen]=React.useState(false)
  const [type,setType]=React.useState("shipping")
  const [error,setError]=React.useState("")
  const [shaString,setShaString]=React.useState("")
  const [uid,setUid]=React.useState("")
  var WooCommerce = new WooCommerceAPI({
    url: 'https://api.hellomitr.com/',
    consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
    consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
    wpAPI: true,
    version: 'wc/v1',
    queryStringAuth:true
  });
  
  const finalTotal = ()=>{
    return delivery===1?total+499:total
  }
  const openPayModal = () => {
    const options = {
      key: 'rzp_live_O9OvC3bwSyv9WC', //testkey rzp_test_Sn8RPLYLlLXlyD  rzp_live_O9OvC3bwSyv9WC
      amount: finalTotal()*100, //  = ₹ 1
      name: 'Hellomitr',
      handler: function(response) {
          if(Object.keys(props.singleItem).length>0){
            props.history.push(`/singletransaction?address=${address}?transactionId=${response.razorpay_payment_id}`,true)
          }else{
            props.history.push(`/transaction?address=${address}?transactionId=${response.razorpay_payment_id}`,true)
          }
          
      //comment added
      },
    
      theme: {
          color: 'black',
          hide_topbar: false
      }
  };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
  };
  React.useEffect(() => {
    setUid(uuidv4())
    if(props.user===null){
      props.history.push("/login")
    }else{
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      let total = 0
      let subTotal = 0;
      if(Object.keys(props.singleItem).length>0){
        setTotal(parseInt(props.singleItem.price))
        setSubTotal(props.singleItem.regular_price?parseInt(props.singleItem.regular_price):parseInt(props.singleItem.price))
        props.storeFinalItem(props.singleItem)
      }else{
        props.cart.map((item)=>{
          total = total + parseInt(item.price)*item.count
          subTotal = item.regular_price?subTotal+parseInt(item.regular_price)*item.count:subTotal+parseInt(item.price)*item.count
        })
        setTotal(total)
        setSubTotal(subTotal)
      }
      if(!props.user.shipping.address_1 || !props.user.billing.address_1){
        setError("Please add both billing and shipping address")
      }
      // if(Object.keys(props.singleItem).length<=0){
      //   props.history.push("/")
      // }
      return ()=>{
        //clear single item and store it inside final item and set final item to orders in transaction
        props.emptySingleItem()
      }
      
    }
     
  }, []);
  const openCasheModal = ()=>{
    //;live axios.post(`https://paymentgateway.cashe.co.in/api/cashe/paymentgateway/customer/generateTransaction`,{amount:finalTotal(),tenure:selected,mobilenumber:props.user.billing.phone,authKey:"JQ5aLPRjELwWkrG7Vfpczw==",leafRefNo:uuidv4(),merchantname:"Hellomitr",returnPageURL:`http://localhost:3000/${Object.keys(props.singleItem).length>0?'singletransaction':'transaction'}?address=${address}`})
    // test  axios.post(`https://uat-paymentgateway.cashe.co.in/api/cashe/paymentgateway/customer/generateTransaction`,{amount:10000,tenure:3,mobilenumber:"9665276786",authKey:"2MLFiopx+givx5mPf8CchQ==",leafRefNo:"0142334456",merchantname:"Amazon",returnPageURL:"https://localhost:3000/orders"})
    //https://uat-paymentgateway.cashe.co.in/api/cashe/paymentgateway/customer/generateTransaction
    //https://uat-paymentgateway.cashe.co.in 2MLFiopx+givx5mPf8CchQ==  https://paymentgateway.cashe.co.in JQ5aLPRjELwWkrG7Vfpczw==
    axios.post(`https://paymentgateway.cashe.co.in/api/cashe/paymentgateway/customer/generateTransaction`,{amount:finalTotal(),tenure:selected,mobilenumber:props.user.billing.phone,authKey:"JQ5aLPRjELwWkrG7Vfpczw==",leafRefNo:uuidv4(),merchantname:"Hellomitr",returnPageURL:`https://hellomitr.com/${Object.keys(props.singleItem).length>0?'singletransaction':'transaction'}?address=${address}`})
    .then(res=>{
      window.location.href = `https://secure.payments.cashe.co.in/Login?transaction=${res.data.entity}`;
    })
    .catch(err=>{
    })


    //test 
    // axios.post(`https://uat-paymentgateway.cashe.co.in/api/cashe/paymentgateway/customer/generateTransaction`,{amount:finalTotal(),tenure:selected,mobilenumber:props.user.billing.phone,authKey:"2MLFiopx+givx5mPf8CchQ==",leafRefNo:uuidv4(),merchantname:"Hellomitr",returnPageURL:`${process.env.REACT_APP_DEVELOPMENT}/${Object.keys(props.singleItem).length>0?'singletransaction':'transaction'}?address=${address}`})
    // .then(res=>{
    //   window.location.href = `https://secure.qapayments.cashe.co.in/Login?transaction=${res.data.entity}`;
    // })
    // .catch(err=>{
    // })

  }

 //cmm

 const renderSnapMint = ()=>{
  return  <div>
      <form id="snapmint" name="snapmint" method="post" 
    action="https://sandboxapi.snapmint.com/v3/public/online_checkout">
    <input type="hidden" name="token" value="UOYY0R_n"/>
    <input type="hidden" name="merchant_confirmation_url" value={`https://localhost:3000/${Object.keys(props.singleItem).length>0?'singletransaction':'transaction'}?address=${address}&transactionId=${uid}`}/>
    <input type="hidden" name="merchant_failure_url" value={`https://localhost:3000/${Object.keys(props.singleItem).length>0?'singletransaction':'transaction'}?address=${address}&transactionId=''`}/>
    <input type="hidden" name="checksum_hash" value={shaString.toString()}/>
    <input type="hidden" name="order_id" value={uid.toString()}/>
    <input type="hidden" name="order_value" value={finalTotal().toString()}/>
    <input type="hidden" name="first_name" value={address===1?props.user.billing.first_name.toString():props.user.shipping.first_name.toString()}/>
    <input type="hidden" name="last_name" value={address===1?props.user.billing.last_name.toString():props.user.shipping.last_name.toString()}/>
    <input type="hidden" name="full_name" value={address===1?(props.user.billing.first_name.toString()+' '+props.user.billing.last_name.toString()):(props.user.shipping.first_name.toString()+' '+props.user.shipping.last_name.toString())}/>
    <input type="hidden" name="email" value={props.user.email.toString()}/>
    <input type="hidden" name="mobile" value={address===1?props.user.billing.phone.toString():props.user.shipping.phone.toString()}/>
    <input type="hidden" name="shipping_address_line1" value={address===1?props.user.billing.address_1.toString():props.user.shipping.address_1.toString()}/>
    <input type="hidden" name="shipping_zip" value={address===1?props.user.billing.postcode.toString():props.user.shipping.postcode.toString()}/>
    <input type="hidden" name="billing_address_line1" value={address===1?props.user.billing.address_1.toString():props.user.shipping.address_1.toString()}/>
    <input type="hidden" name="billing_zip" value={address===1?props.user.billing.postcode.toString():props.user.shipping.postcode.toString()}/>
    {
      Object.keys(props.singleItem).length>0?
      (<>
      <input type="hidden" name="products[][sku]" value={`${props.singleItem.sku}`}/>
    <input type="hidden" name="products[][name]" value={`${props.singleItem.name}`}/>
    <input type="hidden" name="products[][quantity]" value="1"/>
    <input type="hidden" name="products[][unit_price]" value={`${props.singleItem.sale_price}`}/>
      </>):
      (<>
      {
        props.cart.length>0&&(props.cart.map(item=><>
        <input type="hidden" name="products[][sku]" value={item.sku}/>
    <input type="hidden" name="products[][name]" value={item.name}/>
    <input type="hidden" name="products[][quantity]" value={item.count}/>
    <input type="hidden" name="products[][unit_price]" value={item.sale_price}/>
        </>))
      }
      </>)
    }
    {/* <input type="hidden" name="products[][sku]" value="454"/>
    <input type="hidden" name="products[][name]" value="Air Pods 2"/>
    <input type="hidden" name="products[][quantity]" value="1"/>
    <input type="hidden" name="products[][unit_price]" value="1500"/> */}
    {/* <input type="submit" value="Make Payment"/> */}
    <Button type="submit" className="btn" variant="contained" fullWidth>Pay now</Button>
    </form>
    </div>
 }



const renderPayu = ()=>{
<div>
<form action='https://test.payu.in/_payment' method='post'>
<input type="hidden" name="key" value="Sog1Og" />
<input type="hidden" name="txnid" value={uid.toString()} />
<input type="hidden" name="productinfo" value="Hellomitr Product" />
<input type="hidden" name="amount" value={finalTotal().toString()} />
<input type="hidden" name="email" value={props.user.email.toString()} />
<input type="hidden" name="firstname" value={address===1?props.user.billing.first_name.toString():props.user.shipping.first_name.toString()} />
<input type="hidden" name="lastname" value={address===1?props.user.billing.last_name.toString():props.user.shipping.last_name.toString()} />
<input type="hidden" name="surl" value={`https://localhost:3000/${Object.keys(props.singleItem).length>0?'singletransaction':'transaction'}?address=${address}&transactionId=${uid}`} />
<input type="hidden" name="furl" value={`https://localhost:3000/${Object.keys(props.singleItem).length>0?'singletransaction':'transaction'}?address=${address}&transactionId=''`} />
<input type="hidden" name="phone" value={address===1?props.user.billing.phone.toString():props.user.shipping.phone.toString()} />
<input type="hidden" name="hash" value={sha512} />
<Button type="submit" className="btn" variant="contained" fullWidth>Pay now</Button>
</form>
</div>
}








 console.log(shaString)
  return (
    props.user!==null&&<div>
        <Header />
        <SubHeader />
        <AddressModal id={props.user.id} open={open} setOpen={setOpen} type={type} />
        <div className='row m-auto checkout justify-content-between'>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">

          <div className="shadow-sm paymentdetails">
            <h1>Delivery Details</h1>
            <p>Select address where you want to deliver your product</p>
            <div className="m-auto row justify-content-between">
            <h3>Shipping Address <Button onClick={()=>{
                        setType("shipping")
                        setOpen(true)
                    }}>edit</Button></h3>

              <div onClick={()=>setAddress(0)} className={address===0?"col-12 pg active":"col-12 pg"}>
              <h5>{props.user.shipping.first_name} {props.user.shipping.last_name}</h5>
                        <p>{props.user.shipping.phone}</p>
                        <p>{props.user.shipping.address_1}</p>
                        <p>{props.user.shipping.state}</p>
                        <p>{props.user.shipping.postcode}</p>
              </div>


              <h3>Billing Address <Button onClick={()=>{
                        setType("billing")
                        setOpen(true)
                    }}>edit</Button></h3>

              <div onClick={()=>setAddress(1)} className={address===1?"col-12 pg active":"col-12 pg"}>
              <h5>{props.user.billing.first_name} {props.user.billing.last_name}</h5>
                        <p>{props.user.billing.phone}</p>
                        <p>{props.user.billing.address_1}</p>
                        <p>{props.user.billing.state}</p>
                        <p>{props.user.billing.postcode}</p>
              </div>


            </div>
            </div>


            <div className="shadow-sm paymentdetails">
            <h1>Delivery Mode</h1>
            <p>Choose Payment Method for your Order</p>
            <div className="m-auto row justify-content-between">
              <div onClick={()=>setDelivery(0)} className={delivery===0?"col-5 pg active":"col-5 pg"}>
                <h5>Standard</h5>
                <p>Free</p>
              </div>

              <div onClick={()=>setDelivery(1)} className={delivery===1?"col-5 pg active":"col-5 pg"}>
                <h5>Instant</h5>
                <p>Additional ₹499/- Only</p>
              </div>

            </div>
            </div>


            <div className="shadow-sm paymentdetails">
            <h1>Payment Details</h1>
            <p>Choose Payment Method for your Order</p>
            <div className="m-auto row justify-content-between">
              <div onClick={()=>setSelected(3)} className={selected===3?"col-5 pg active":"col-5 pg"}>
              <img src={Cashe} alt="razorpya" />
                
                <p>No Cost EMI Tenure of 3 months</p>
              </div>

              <div onClick={()=>setSelected(6)} className={selected===6?"col-5 pg active":"col-5 pg"}>
              <img src={Cashe} alt="razorpya" />
                <p>No Cost EMI Tenure of 6 months</p>
              </div>

              <div onClick={()=>setSelected(2)} className={selected===2?"col-5 pg active":"col-5 pg"}>
              <img src={Razorpaylogo} alt="razorpya" />
                <p>Credit Card / Debit Card / Net Banking / UPI</p>
              </div>

              <div onClick={()=>{
                const shaVal = `${`UOYY0R_n`}|${uid}|${finalTotal()}|${address===1?(props.user.billing.first_name+' '+props.user.billing.last_name):(props.user.shipping.first_name+' '+props.user.shipping.last_name)}|${props.user.email}|${`cQ_kvgB0`}`
                console.log(shaVal)
                sha512(shaVal)
                .then(res=>{
                  setShaString(res)
                  setSelected(1)
                })
                }} className={selected===1?"col-5 pg active":"col-5 pg"}>
              <img src={Razorpaylogo} alt="razorpya" />
                <p>No Cost EMI on snapmint</p>
              </div>

              <div onClick={()=>{
                const shaVal = `Sog1Og|${uid}|${finalTotal()}|HellomitrProduct|${address===1?(props.user.billing.first_name+' '+props.user.billing.last_name):(props.user.shipping.first_name+' '+props.user.shipping.last_name)}|${props.user.email}|||||||||||001YXAlCyx3ssF7AtxluEA7g9QnnaHmi`
                console.log(shaVal)
                sha512(shaVal)
                .then(res=>{
                  setShaString(res)
                  setSelected(0)
                })
                }} className={selected===0?"col-5 pg active":"col-5 pg"}>
              <img src={Razorpaylogo} alt="razorpya" />
                <p>No Cost EMI on payubiz</p>
              </div>

            </div>
            {error.length>0&&<Alert className="alert" severity="error">{error}</Alert>}
            {
              selected===1?
              renderSnapMint():
              (selected===0?renderPayu():<Button disabled={error.length>0?true:false} onClick={()=>selected===2?openPayModal():openCasheModal()} className="btn" variant="contained" fullWidth>Pay now</Button>)
            }
            
            </div>





          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">

            <div className="shadow-sm totaldiv">
              <h5>Your order</h5>
              <div className="row m-auto justify-content-between">
                <p className="greytext">Subtotal:</p>
                <p><b>₹ {subtotal}</b></p>
              </div>

              <div className="row m-auto justify-content-between">
                <p className="greytext">Shipping:</p>
                <p><b>₹ {delivery?499:"-"}</b></p>
              </div>

              <div className="row m-auto justify-content-between">
                <p className="greytext">Discount:</p>
                <p><b>₹ {subtotal-total}</b></p>
              </div>

              <hr />
              <p className="total">₹ {finalTotal()}</p>
          </div>
        <div className="row">
          <div className="col-1">
            <GppGoodIcon />
          </div>
          <div className="col-10">
            <p>Safe and Secure Payments. Easy returns 100% Authentic product</p>
          </div>
        </div>

        </div>



        </div>


       
        {/* <Footer /> */}

    </div>
  )
}

const mapDispatchToProps = (dispatch)=>{
  return {
    emptySingleItem:()=>dispatch(emptySingleItem()),
    storeFinalItem:(item)=>dispatch(storeFinalItem(item))
  }
}

const mapStateToProps = ({user,cart,singleItem})=>{
return {
  user:user.user,
  cart,
  singleItem
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)