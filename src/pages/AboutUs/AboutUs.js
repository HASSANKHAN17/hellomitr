import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/Header/SubHeader'
import img1 from './aboutushead.png'
import "./AboutUs.scss"
import img2 from './aboutus-1.png'
import img3 from './about-us-2.jpg'
import img4 from './about-us-3.jpg'
import YoutubeEmbed from '../../components/utils/YoutubeEmbed'

function AboutUs() {
  return (
    <div>
        <Header />
        <SubHeader />
        <div className="aboutus">
            <img className="center-img" src={img1} alt="img1" />
            <h1>Effective and reliable<br/>
            Shopping place for Indian Shoppers</h1>
            <p className="p1">
            Within our platform, millions of people around India connect, both online and offline, to make, sell and buy unique goods. We also offer a wide range of Seller Services and tools that help creative entrepreneurs start, manage and scale their businesses.
            </p>

            <div className="row row-1 justify-content-center ">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <h3>
                    Start-up Certified 2020-
                    Indian Marketplace
                    </h3>
                    <p>
                    Our mission is to re-imagine commerce in ways that build a more fulfilling and lasting world, and we’re committed to using the power of business to strengthen communities and empower people.
                    </p>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <h3>
                ISO Marked certified 2021
                High Standard Maintain for Support
                    </h3>
                    <p>
                    We maintain highest standard & quality supportive way for our customer support
                    </p>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <h3>
                Instant Delivery Ninja Team
                to deliver products to our customers on high standards
                    </h3>
                    <p>
                    We deliver the products on instant basis to our customers mostly nearby location set by us for our customers.
                    Currently we are present in limited cities for now.

                    </p>
                </div>
            </div>



            <div className="au-section-2">
            <h1>
            Your local merchant groceries
            provider now also online with us
            </h1>
                <div className="row imgcontainer">
                    <div className="col-12 col-sm-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img className='center-img' src={img2} alt="img2" />
                    </div>
                    <div className="col-12 col-sm-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h2>Top quality products and approved suppliers with quality verified by Hellomitr Team!</h2>
                        <h5>They are listed after a complete verification.</h5>
                        <p>We are the first Indian E-commerce start-up started working on different ideology to improve the lifestyle of Rural/Urban people and make sure they also become the part of Digital India..</p>

                        <p>Delivery to our customers within an hour is our priority.</p>
                        <p>Working on easy payments options simultaneously.</p>
                        <p>Hellomitr Pay Later featured payment mode  ( Coming Soon ) for our partner merchants.</p>
                    </div>
                </div>



                <div className="row imgcontainer">
                <div className="col-12 col-sm-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{textAlign:"right"}}>
                <h2>Many years of experience and a high level of consumer confidence</h2>
                        <h5>Developed for over 2 years on the market</h5>
                        <p>“Quality in a service or product is not what you put into it. It is what the customer gets out of it.</p>

                        <p>We Make a customer, not a sale.</p>
                        <p>Satisfaction is a rating. Loyalty is a brand.</p>
                        <p>If you are not taking care of your customer, your competitor will.</p>

                        
                    </div>

                    <div className="col-12 col-sm-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img className='center-img' src={img3} alt="img2" />
                    </div>
                   
                </div>



                <div className="row imgcontainer">
                <div className="col-12 col-sm-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img className='center-img' src={img4} alt="img2" />
                    </div>
                    

                <div className="col-12 col-sm-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h2>Filling your happiness is what we care about. !</h2>
                        <h5>Delivery from Nearby is a great thing for shoppers.</h5>
                        <p>Through this Model,  We are nothing but bringing smiles to people’s faces as we are delivering a product instantly at per their need. Its best opportunity and demands full control of inventory due to the convenience of goods.</p>

                        <p>We deals with Local merchants interventions</p>
                        <p>Easy Payments Terms</p>
                        <p>Local Support agent to help</p>
                    </div>
                </div>

            </div>







            <section className="last-section">
                <h1>We deliver the loyalty & care to our customers not just branded products.</h1>
                <YoutubeEmbed embedId="P2xKJKo9w0M" />
                <blockquote>Imagine your customer is your best friend—listen to their concerns, be a shoulder to lean on and then shift the focus from what went wrong to how you can help make it right!</blockquote>
                <p><b>We work on our customer requirement according to their needs.</b></p>
                <p><b>you wish and we deliver</b></p>
            </section>



        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs