import React from 'react'
import "./Footer.scss"
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import startupindia from './startup.png'
import Logo from '../../Images/logo.png'
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
import footerplay from './gaplay.jpeg'
function Footer() {
  return (
    <div className="footer row m-auto justify-content-between">
        <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <img src={Logo} alt="logo" className="logo" />
            <p className="subtitle">Desh ka online marketplace</p>
            <div className="startupindiadiv">
            <img src={startupindia} alt="startupindia" className="startupindia" />
            </div>

            <div>
              <img src={footerplay} alt="footerplay" className="footerplay" />
            </div>

            {/* <div className="row m-auto apps">
              <div className="row align-items-center m-auto googleplay">
                  <div>
                    <ShopIcon className="icon" />
                  </div>
                  <div className="ml-3">
                    <p>Get it on</p>
                    <p className="appname">Google Play</p>
                  </div>
              </div>

              <div className="row align-items-center m-auto appstore">
                  <div>
                    <AppleIcon className="icon" />
                  </div>
                  <div>
                    <p>Download on the</p>
                    <p className="appname">App Store</p>
                  </div>
              </div>
            </div> */}
        </div>
        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2">
            <h2>About Company</h2>
            <p><Link to="/aboutus" className="link">About Us</Link></p>
            <p><Link to="/contactus" className="link">Contact Us</Link></p>
            <p><span onClick={()=>window.location.href="https://d19fq2afrbh4en.cloudfront.net/ISO%209001%20HELLOMITR%20TECHNOLOGY.pdf"} className="cursor-pointer link">ISO 9001 2015 Certified</span></p>
            <p><span onClick={()=>window.location.href="https://d8rk3eocjlda.cloudfront.net/startup-certificate.pdf"} className="cursor-pointer link" >Startup Certified 2020</span></p>
        </div>
        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2">
            <h2>Legal Policy</h2>
            <p><Link to="/deliveryinfo" className="link">Delivery Information</Link></p>
            <p><Link to="/disclaimer" className="link">Disclaimer</Link></p>
            <p><Link to="/termsandconditions" className="link">Terms & Conditions</Link></p>
            <p><Link to="/privacypolicy" className="link">Privacy Policy</Link></p>
            <p><Link to="/sellerpolicy" className="link">Seller Policy</Link></p>
            <p><Link to="/returnpolicy" className="link">Return Policy</Link></p>
        </div>
        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2">
            <h2> Helpdesk</h2>
            <p><Link to="/faq" className="link">FAQs</Link></p>
            <p><span  className="link">Help Center</span></p>
            <p><span  className="link">How to Buy</span></p>
            <p><span onClick={()=>window.location.href="https://hellomitr.shiprocket.co/"} className="cursor-pointer link">Track Your Order</span></p>
            <p><Link to="/corporate" className="link">Corporate & Bulk Purchasing</Link></p>
        </div>
        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2">
            <h2>Contact Us</h2>
            <p>
              Noval Tech Park <br />
              #46/3, 4, GB Palya Hosur Road,<br />
              Bengaluru Karnataka 560068
            </p>
            <p>Email: helpline @ hellomitr.com</p>
            <p>Phone: 1800 - 572 - 8211</p> 
            <div className="row m-auto">
              <IconButton color="secondary">
                <FacebookRoundedIcon />
              </IconButton>

              <IconButton color="secondary">
                <TwitterIcon />
              </IconButton>

              <IconButton color="secondary">
                <YouTubeIcon />
              </IconButton>

              <IconButton color="secondary">
                <InstagramIcon />
              </IconButton>
            </div>


        </div>
    </div>
  )
}

export default Footer