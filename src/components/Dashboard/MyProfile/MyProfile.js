import React from 'react'
import Header from '../../Header/Header'
import SubHeader from '../../Header/SubHeader'
import Menu from '../Menu/Menu'
import "./MyProfile.scss"
import PersonIcon from '@mui/icons-material/Person';
import {connect} from 'react-redux'
import WooCommerceAPI from 'woocommerce-api'
import {setUser} from '../../redux/user/userActions'
function MyProfile(props) {
    var WooCommerce = new WooCommerceAPI({
        url: 'https://api.hellomitr.com/',
        consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
        consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
        wpAPI: true,
        version: 'wc/v1',
        queryStringAuth:true
      });
    let {user} = props;
    React.useEffect(()=>{
        WooCommerce.getAsync(`customers?email=${props.user.email}`)
        .then((response) => {
          props.setUser(JSON.parse(response.toJSON().body)[0])
        })
        .catch(err=>{
        })
    },[])
  return (
    <div>
        <Header />
        <SubHeader />
        <div className="row dashboard-container">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Menu id={4} />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 dashboard-subcontainer myprofile">
                <h1><PersonIcon /> My Profile</h1>
                <div className="row section1 align-items-center justify-content-around">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <img src={user.avatar_url} alt="useravtar" /> 
                        </div>
                        <div className="shadow-sm cont col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <h3>{user.orders_count}</h3>
                            <p>Total Orders</p>
                        </div>
                        <div className="shadow-sm cont col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <h3>{user.total_spent}</h3>
                            <p>Total Spent</p>
                        </div>
                        <div className="shadow-sm cont col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <h3>{user.last_order.id?user.last_order.id:"-"}</h3>
                            <p>Last Order</p>
                        </div>
                </div>

                <div className="shadow-sm row justify-content-between section2">
                    <div className="">
                        <p className="key">Firstname</p>
                        <p className="value">{user.first_name?user.first_name:"-"}</p>
                    </div>
                    <div className="">
                    <p className="key">Lastname</p>
                        <p className="value">{user.last_name?user.last_name:"-"}</p>
                    </div>
                    <div className="">
                    <p className="key">Email</p>
                        <p className="value">{user.email?user.email:"-"}</p>
                    </div>
                    <div className="">
                    <p className="key">Phone</p>
                        <p className="value">{user.phone?user.phone:"-"}</p>
                    </div>
                    <div className="">
                    <p className="key">Username</p>
                        <p className="value">{user.username?user.username:"-"}</p>
                    </div>
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
const mapDispatchToProps = (dispatch)=>{
    return {
      setUser:(user)=>dispatch(setUser(user))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(MyProfile)