import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/Header/SubHeader'
import img from './china-electronic-wholesale.jpg'
function Corporate() {
  return (
    <div>
        <Header />
<SubHeader />
        <div className="my-5 container center Corporate">
            <img src={img} alt="img" />
            <h3>For corporate and bulk purchasing contact</h3>
            <h1 className="mb-5">corporate@hellomitr.com</h1>

        </div>
        <Footer/>
    </div>
  )
}

export default Corporate