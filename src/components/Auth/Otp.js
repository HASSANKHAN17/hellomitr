import React from 'react'
import OtpInput from 'react-otp-input';
import Button from '@mui/material/Button'
import "./Auth.scss"
import Alert from '@mui/material/Alert'
import {connect} from 'react-redux'
import {setUser} from '../redux/user/userActions'
import axios from 'axios'
//import SMS from 'smsalert'

function Otp(props) {
    const [otp,setOtp]=React.useState("")
    const [gotp,setGotp]=React.useState("")
    const [error,setError]=React.useState("")

    const {user,checkout,mobile}=props.location.state

    React.useState(()=>{
        let val = Math.floor(100000 + Math.random() * 9000);
        setGotp(val)

        axios.post(`https://www.smsalert.co.in/api/push.json?apikey=61b13b4d558f4&sender=HLMITR&mobileno=${mobile}&text=Your order verification code for Hellomitr is ${val}`)
        .then(res=>{
        })
        .catch(err=>{
        })
        // const sms = new SMS( 'mannsoni07@gmail.com',  "Hellomitr@123@");
        // sms.send(9665276786, `otp is ${gotp}`,"HLMITR").then((responseMessage) => {
        // console.log(responseMessage);
        // })
        // .catch(err=>{
        //     console.log(err.response)
        // })
    },[])

    const handleOtp=(o)=>{
        setOtp(o)
        if(o.length===6){
            let got = gotp.toString()
            if(o===got){
                //verified
                setError("")
                props.setUser(user)
                if(checkout){
                    props.history.push("/checkout")
                }else{
                    props.history.push("/myprofile")
                }
            }else{
                setError("Invalid OTP")
            }
        }
        
    }

  return (
    <div className="shadow authcontainer otp">
        <h1>Enter otp </h1>
        <p className="codesent">Code sent to <b>{mobile}</b></p>

        <OtpInput
        
          value={otp}
          shouldAutoFocus
          onChange={(o)=>handleOtp(o)}
          numInputs={6}
          containerStyle="otpcontainer"
          inputStyle="otpinput"
          focusStyle={{border:"2px solid #FE6003"}}
      />
      {error.length>0?<Alert  severity="error">{error}</Alert>:null}
      <Button onClick={()=>handleOtp(otp)} className="mt-2 mb-4" variant="contained">Validate</Button>
      <p className="recieve">Didn't receive the code? <Button variant='text'>resend</Button></p>
    </div>
  )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        setUser:(user)=>dispatch(setUser(user))
    }
}

export default connect(null,mapDispatchToProps)(Otp)