import React from 'react'
import Header from '../../Header/Header'
import SubHeader from '../../Header/SubHeader'
import Menu from '../Menu/Menu'
import {connect} from 'react-redux'
import {Button} from '@mui/material'
import AddressModal from './AddressModal'
import "./Addresses.scss"
function Addresses(props) {
    let {user} = props;
    const [open,setOpen]=React.useState(false)
    const [type,setType]=React.useState("shipping")
  return (
    <div>
        <AddressModal id={user.id} open={open} setOpen={setOpen} type={type} />
        <Header />
        <SubHeader />
        <div className="row dashboard-container">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Menu id={5} />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 dashboard-subcontainer">
                    <h1>My Addresses</h1>
                    <div className="shadow-sm addresscontainer">
                        <h3>Shipping Address <Button onClick={()=>{
                        setType("shipping")
                        setOpen(true)
                    }}>edit address</Button></h3>
                        <h5>{user.shipping.first_name} {user.shipping.last_name}</h5>
                        <p>{user.shipping.phone}</p>
                        <p>{user.shipping.address_1}</p>
                        <p>{user.shipping.state}</p>
                        <p>{user.shipping.postcode}</p>
                    </div>

                    <div className="shadow-sm addresscontainer">
                    <h3>Billing Address <Button onClick={()=>{
                        setType("billing")
                        setOpen(true)
                    }}>edit address</Button></h3>
                        <h5>{user.billing.first_name} {user.billing.last_name}</h5>
                        <p>{user.billing.phone}</p>
                        <p>{user.billing.address_1}</p>
                        <p>{user.billing.state}</p>
                        <p>{user.billing.postcode}</p>
                    </div>
             <div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}
const mapStateToProps = ({user})=>{
    return {
        user:user.user
    }
    }
export default connect(mapStateToProps)(Addresses)