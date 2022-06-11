import React from 'react'
import "./Header.scss"
import {Link} from 'react-router-dom'
import iconImage from '../../Images/logo.png'
import {connect} from 'react-redux'
import Button from '@mui/material/Button'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge';
import { withRouter } from 'react-router-dom';
import "./Header.scss"
import Geocode from "react-geocode";
import {compose} from "redux";
import SearchIcon from '@mui/icons-material/Search';
const Header = (props) => {
	const [searchItem,setSearchItem]=React.useState("")
	const [error,setError]=React.useState("")
	const [pincode,setPincode]=React.useState("")
	const handleSubmit = (e)=>{
		e.preventDefault()
		props.history.push("/categories",searchItem)
	}//sd

	const getGeo = async ()=>{
		window.navigator.geolocation.getCurrentPosition((loca)=>{
		  let location = {lat:loca.coords.latitude,lng:loca.coords.longitude}

		  if(location.lat&&location.lng){
			Geocode.setApiKey("AIzaSyDg9VFUCC0kNvQASEIR3Yt823_Lkrwp9YU");

			Geocode.setLanguage("en");
			
			Geocode.setRegion("in");
			
			Geocode.setLocationType("ROOFTOP");
			
			Geocode.enableDebug();
			
			Geocode.fromLatLng(location.lat, location.lng).then(
			  (response) => {
				const address = response.results[0].formatted_address;
				var locationArr = address.split(',');
				let pin = ""
				locationArr.map((item)=>{
					let arr = item.split(" ")
					arr.map(it=>{
						if(parseInt(it)){
							pin = parseInt(it)
						}
					})
				})
				setPincode(pin)
			  },
			  (error) => {
			  })
		}
		},(err)=>setError(err.message));
	  }
	React.useEffect(()=>{
		getGeo()
		

	},[])
	return (
      <div className="header row m-auto align-items-center">
		  <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
		  <img onClick={()=>props.history.push("/")} className="logo-img" src={iconImage} alt="img" />
		  </div>
		  <div className="center col-6 col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 pincode">
			<p><b>{pincode?`Deliver to ${pincode}`:"can't access location"}</b></p>
		  </div>


		  <div className="col-7 col-xs-7 col-sm-7 col-md-7 col-lg-6 col-xl-6">
			
			<div className="row inputrow align-items-center">
			
			<div>
			<SearchIcon className="searchicon" color="secondary" />
			</div>

			<div className="ml-2">
			<form onSubmit={handleSubmit}>
			<input placeholder="search items.." value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
			</form>
			</div>


			</div>			  

		  </div>


		  <div className="col-5 col-xs-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 icon-container">

			<span className='cart-container'>
			<Badge badgeContent={props.cart.length} color="primary">
			<IconButton onClick={()=>props.history.push("/cart")} className="icon-bg cart" color="tertiary">
				<ShoppingBagIcon className="icon" />
			</IconButton>
			</Badge>
			</span>

			<span >
			<IconButton onClick={()=>!props.userToken?props.history.push("/signup"):props.history.push("/myprofile")} className="icon-bg" color="tertiary">
				<AccountCircleIcon className="icon" />
			</IconButton>
			</span>

		  </div>

		  {/* <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 row imgdiv m-auto align-items-center justify-content-center">
			<div>
		  <img onClick={()=>props.history.push("/")} className="cursor-pointer" src={iconImage} alt="img" />
		  </div>
		  <p>{pincode?`Deliver to ${pincode}`:"can't access location"}</p>
		  </div>

		  <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 inputdiv m-auto">
			<form onSubmit={handleSubmit}>
			<input placeholder="search for items.." value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
			</form>
		  </div>

		  <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 icondiv m-auto row justify-content-end">

		  <Link to="cart">
		  <Badge badgeContent={props.cart.length} color="primary">
			<IconButton className="icon-bg-cart" color="tertiary">
				<ShoppingBagIcon className="icon" />
			</IconButton>
			</Badge>
			</Link>

			<Link to={!props.userToken?"signup":"myprofile"}>
			<IconButton className="icon-bg" color="tertiary">
				<AccountCircleIcon className="icon" />
			</IconButton>
			</Link>
			
		  </div> */}
	  </div>
    );

}
const mapStateToProps =({user,cart})=>{
	return {
		userToken:user.user,
		cart
	}
	}
	export default compose(
		withRouter,
		connect(mapStateToProps)
	  )(Header);