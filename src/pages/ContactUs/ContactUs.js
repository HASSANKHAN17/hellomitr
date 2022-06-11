import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/Header/SubHeader'
import "./ContactUs.scss"
import OwnMarker from './OwnMarker'
import GoogleMapReact from 'google-map-react';
function ContactUs() {
  return (
    <div>
        <Header />
<SubHeader />
        <div className="my-5 container ContactUs">

            <div className="row">
            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h1>How can we
                    help you?</h1>
                    <p>We are available 6 days a week!</p>
                    <h3>1800 572 8211</h3>
                    <p>Monday – Friday: 9:00-6:00</p>
                    <p>Saturday & Sunday : Holiday Off</p>
                    <h5>helpline@hellomitr.com</h5>
                </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div style={{ height: '50vh', width: '100%' }} >
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDg9VFUCC0kNvQASEIR3Yt823_Lkrwp9YU'}}
            defaultCenter={{center:{lat:59.95,lng:30.33}}}
            defaultZoom={11}
            >
            <OwnMarker 
            lat = {59.95}
            lng={30.33}
            text="Hellomitr"
            />
            
            </GoogleMapReact>
  </div>
            </div>
               
            </div>
           
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs