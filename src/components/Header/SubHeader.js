import React from 'react'
import mobile from '../../Images/subheader/smartphone (2).png'
import ledtv from '../../Images/subheader/tv-monitor (1).png'
import Laptop from '../../Images/subheader/laptop.png'
import Accessories from '../../Images/subheader/bags (1).png'
import Smartwatch from '../../Images/subheader/smartwatch.png'
import Furniture from '../../Images/subheader/furnitures.png'
import "./SubHeader.scss"
import {Link} from 'react-router-dom'

function SubHeader() {
  return (
    <div className="shadow-sm subheader row m-auto justify-content-between">
        <Link to="/categories?category=126" className=" row m-auto align-items-center justify-content-center itemcontainer">
            <div className="mr-3">
            <img src='/assets/subheader/mobile.jpeg' alt="mobile" />
            </div>
            
            <div>
            <h5 style={{color:"black"}}>Mobile</h5>
            </div>
        </Link>

        <Link to="/categories?category=181" className=" row m-auto align-items-center justify-content-center itemcontainer">
            <div className="mr-3">
            <img src='/assets/subheader/ledtv.jpeg' alt="ledtv" />
            </div>

            <div>
            <h5>LED TVs</h5>
            </div>


        </Link>

        <Link to="/categories?category=97" className=" row m-auto align-items-center justify-content-center itemcontainer">
            <div className="mr-3">
            <img src='/assets/subheader/laptop.jpeg' alt="mobile" />
            </div>

            <div>
            <h5>Laptop</h5>
            </div>

        </Link>

        <Link to="/categories?category=193" className=" row m-auto align-items-center justify-content-center itemcontainer">
            <div className="mr-3">
            <img src='/assets/subheader/headphones.jpeg' alt="mobile" />
            </div>

            <div>
            <h5>Accessories</h5>
            </div>

        </Link>

        <Link to="/categories?category=124" className=" row m-auto align-items-center justify-content-center itemcontainer">
            <div className="mr-3">
            <img src='/assets/subheader/shoes.jpeg' alt="mobile" />
            </div>

            <div>
            <h5>Shoes</h5>
            </div>

        </Link>

        <Link to="/categories?category=103" className=" row m-auto align-items-center justify-content-center itemcontainer">
            <div className="mr-3">
            <img src='/assets/subheader/smartwatch.jpeg' alt="mobile" />
            </div>

            <div>
            <h5>Smartwatch</h5>
            </div>

        </Link>

        <Link to="/categories?category=104" className=" row m-auto align-items-center justify-content-center itemcontainer">
            <div className="mr-3">
            <img src='/assets/subheader/jacket.jpeg' alt="mobile" />
            </div>

            <div>
            <h5>Men</h5>
            </div>

        </Link>

        <Link to="/categories?category=152" className=" row m-auto align-items-center justify-content-center itemcontainer">
            <div className="mr-3">
            <img src='/assets/subheader/clothes.jpeg' alt="mobile" />
            </div>

            <div>
            <h5>Women</h5>
            </div>

        </Link>

        <Link to="/categories?category=174" className=" row m-auto align-items-center justify-content-center itemcontainer">
            <div className="mr-3">
            <img src='/assets/subheader/furniture.jpeg' alt="mobile" />
            </div>

            <div>
            <h5>Furniture</h5>
            </div>
        </Link>
    </div>
  )
}

export default SubHeader