import React from 'react'
import "./Home.scss"
import Header from './Header/Header'
import SubHeader from './Header/SubHeader'
import Item from './Item/Item'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import bannermid from '../Images/banners/bannermid.jpg'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Footer from './Footer/Footer'
import bannerdiv1 from '../Images/banners/bannerdiv1.jpeg'
import bannerdiv2 from '../Images/banners/bannerdiv2.jpg'
//import CarouselCard1 from "./carousel-cards/CarouselCard1";
//import Carousel from "./carousel/Carousel";
import bannerdiv3 from '../Images/banners/bannerdiv3.jfif'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../Images/carousel1banner/tecnoarrival.png'
import img2 from '../Images/carousel1banner/slider2.jpeg'
import img3 from '../Images/carousel1banner/slider3.jpeg'
import imgemi from '../Images/carousel1banner/76232_2eh273ye.png'
import img4 from '../Images/carousel1banner/reno8newarrival.png'
import img5 from '../Images/carousel1banner/slider5.jpeg'
import img6 from '../Images/carousel1banner/slider6.1.png'
import img7 from '../Images/carousel1banner/slider7.jpeg'
import img8 from '../Images/carousel1banner/slider8.1.png'
import img9 from '../Images/carousel1banner/firebolt_banner.png'
import c2img1 from '../Images/carousel2banner/cashebanner.jpeg'
import WooCommerceAPI from 'woocommerce-api'
import tcllogo from '../Images/brands/tclcropped.jpg'
import samsunglogo from '../Images/brands/Samsung-Symbol.png'
import xiaomilogo from '../Images/brands/Xiaomi-Logo.png'
import realmelogo from '../Images/brands/1200px-Realme-realme-_logo_box-RGB-01_with_out_back_ground.svg.png'
import vivologo from '../Images/brands/vivo logo.png'
import oppologo from '../Images/brands/OPPO_LOGO_2019.png'
import Loading from './Lottie/Loading'
import {ReactComponent as NewArrivals} from '../Images/icons/new-product-1.svg'
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded';
import HeadphonesBatteryRoundedIcon from '@mui/icons-material/HeadphonesBatteryRounded';
import WatchRoundedIcon from '@mui/icons-material/WatchRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios'
function Home(props) {
    const [smartphone,setSmartPhone]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [ledtv,setLedtv]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [laptop,setLaptop]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [Accessories,setAccessories]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [shoes,setShoes]=React.useState([])
    const [smartwatch,setSmartWatch]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [men,setMen]=React.useState([])
    const [women,setWomen]=React.useState([])
    const [loading,setLoading]=React.useState(false)
    const [newArrivals,setNewArrivals]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [height,setHeight]=React.useState(45)
    //https://shop.hellomitr.com/
    React.useState(()=>{
        //setLoading(true)
        if(window.innerWidth<750){
            setHeight(250)
        }
        var WooCommerce = new WooCommerceAPI({
            url: 'https://api.hellomitr.com/',
            consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
            consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
            wpAPI: true,
            version: 'wc/v1',
            queryStringAuth:true
          });
          //WooCommerce.getAsync("products?category=126&per_page=100&category=193include")
          WooCommerce.getAsync("products?orderby=date&order=desc&per_page=12")
            .then((result) => {
            let arr = JSON.parse(result.toJSON().body)
            let a = arr.slice(0,4) //index to n-1
            let b = arr.slice(4,8)
            let c = arr.slice(8,12)
            setNewArrivals({batch1:a,batch2:b,batch3:c})
            })
          WooCommerce.getAsync("products?category=126&per_page=12")
            .then((result) => {
                let arr = JSON.parse(result.toJSON().body)
                let a = arr.slice(0,4) //index to n-1
                let b = arr.slice(4,8)
                let c = arr.slice(8,12)
            setSmartPhone({batch1:a,batch2:b,batch3:c})
            })
            .catch((error) => {
            });
            WooCommerce.getAsync("products?category=181&per_page=12")
            .then((result) => {
                let arr = JSON.parse(result.toJSON().body)
                let a = arr.slice(0,4) //index to n-1
                let b = arr.slice(4,8)
                let c = arr.slice(8,12)
            setLedtv({batch1:a,batch2:b,batch3:c})
            })
            .catch((error) => {
            });
            WooCommerce.getAsync("products?category=97&per_page=12")
            .then((result) => {
             let arr = JSON.parse(result.toJSON().body)
            let a = arr.slice(0,4) //index to n-1
            let b = arr.slice(4,8)
            let c = arr.slice(8,12)
            setLaptop({batch1:a,batch2:b,batch3:c})
            })
            .catch((error) => {
            });
            WooCommerce.getAsync("products?category=193&per_page=12")
            .then((result) => {
             let arr = JSON.parse(result.toJSON().body)
            let a = arr.slice(0,4) //index to n-1
            let b = arr.slice(4,8)
            let c = arr.slice(8,12)
            setAccessories({batch1:a,batch2:b,batch3:c})
            })
            .catch((error) => {
            });
            
            WooCommerce.getAsync("products?category=103&per_page=12")
            .then((result) => {
             let arr = JSON.parse(result.toJSON().body)
            let a = arr.slice(0,4) //index to n-1
            let b = arr.slice(4,8)
            let c = arr.slice(8,12)
            setSmartWatch({batch1:a,batch2:b,batch3:c})
            })
            .catch((error) => {
            });
            // WooCommerce.getAsync("products?search=men&per_page=6")
            // .then((result) => {
            // setMen(JSON.parse(result.toJSON().body))
            // })
            // .catch((error) => {
            // });
            // WooCommerce.getAsync("products?search=women&per_page=6")
            // .then((result) => {
            // setWomen(JSON.parse(result.toJSON().body))
            // //setLoading(false)
            // })
            // .catch((error) => {
            // //setLoading(false)
            // });
    },[])
//yguytguytyu
    return (
        loading?<Loading />:<div className="home">
            <Header id="1" />
            <SubHeader />
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={22}
                totalSlides={8}
                isPlaying
                >
                <Slider>
                <Slide index={0}><img className="carousel1" src={img9} alt="img4" /></Slide>
                <Slide index={1}><img className="carousel1" src={img4} alt="img9" /></Slide>
                <Slide index={2}><img className="carousel1" src={imgemi} alt="img6" /></Slide>
                <Slide index={3}><img className="carousel1" src={img1} alt="img1" /></Slide>
                <Slide index={4}><img className="carousel1" src={img8} alt="img8" /></Slide>
                <Slide index={5}><img className="carousel1" src={img6} alt="img1" /></Slide>
                <Slide index={6}><img className="carousel1" src={img7} alt="img2" /></Slide>
                <Slide index={7}><img className="carousel1" src={img5} alt="img5" /></Slide>
                </Slider>
            </CarouselProvider>

            <section className="carousel dod">
                <h2><NewArrivals /> New Arrivals</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={height}
                totalSlides={3}
                >
                <Slider
                 
                
                >
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    newArrivals.batch1.length>0?(
                        newArrivals.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    newArrivals.batch2.length>0?(
                        newArrivals.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    newArrivals.batch3.length>0?(
                        newArrivals.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                {/* <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div> */}
            </CarouselProvider>
                

            </section>


            <section className="shadow-sm brands">
            <h1>Shop by Brands</h1>
            <div className="row m-auto justify-content-center align-items-center" onClick={()=>props.history.push("/categories","tcl")}>
                <div className="col-3">
                    <img src={tcllogo} alt="applelogo" />
                </div>

                <div className="col-3" onClick={()=>props.history.push("/categories","samsung")}>
                    <img src={samsunglogo} alt="samsunglogo" />
                </div>

                <div className="col-3" onClick={()=>props.history.push("/categories","oppo")}>
                    <img src={oppologo} alt="oppologo" />
                </div>

                
            </div>


            <div className="row m-auto justify-content-center align-items-center">
            <div className="col-3" onClick={()=>props.history.push("/categories","vivo")}>
                    <img src={vivologo} alt="vivologo" />
                </div>

                <div className="col-3" onClick={()=>props.history.push("/categories","xiaomi")}>
                    <img src={xiaomilogo} alt="xiaomilogo" />
                </div>

                <div className="col-3" onClick={()=>props.history.push("/categories","realme")}>
                    <img src={realmelogo} alt="realmelogo" />
                </div>

            </div>
              
            </section>




            <section className="trending">
                <h2><SmartphoneRoundedIcon className="icon" /> Smartphones</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={height}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch1.length>0?(
                        smartphone.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch2.length>0?(
                        smartphone.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch3.length>0?(
                        smartphone.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                {/* <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div> */}
            </CarouselProvider>
            </section>

            {/* popular section carousal */}


            {/* <section className="shadow-sm popularitems" style={{textAlign:"center"}}>
                    <h1>Check Your Eligibility</h1>
                    <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={height}
                totalSlides={3}
                isPlaying
                >
                <Slider>
                <Slide index={0}><img className="c2" src={c2img1} alt="c12img1" /></Slide>
                <Slide index={1}><img className="c2" src={img2} alt="img2" /></Slide>
                <Slide index={2}><img className="c2" src={img3} alt="img3" /></Slide>
                </Slider>
            </CarouselProvider>
            </section> */}

                <section className="trending">
                <h2><SmartphoneRoundedIcon className="icon" />More On Smartphones</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={height}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch3.length>0?(
                        smartphone.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch2.length>0?(
                        smartphone.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch1.length>0?(
                        smartphone.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                {/* <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div> */}
            </CarouselProvider>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={height}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch2.length>0?(
                        smartphone.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch1.length>0?(
                        smartphone.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch3.length>0?(
                        smartphone.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                {/* <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div> */}
            </CarouselProvider>
            </section>




            {/* <section className="trending">
                <h2><TvRoundedIcon className="icon" /> LED TVs</h2>
                 <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={height}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    ledtv.batch1.length>0?(
                        ledtv.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    ledtv.batch2.length>0?(
                        ledtv.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    ledtv.batch3.length>0?(
                        ledtv.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                

            </CarouselProvider>
            </section> */}









            {/* <section className="trending">
                <h2><LaptopMacRoundedIcon className="icon" /> Laptop</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={height}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    laptop.batch1.length>0?(
                        laptop.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    laptop.batch2.length>0?(
                        laptop.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    laptop.batch3.length>0?(
                        laptop.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
            </CarouselProvider>
            </section> */}









            <section className="trending">
                <h2><HeadphonesBatteryRoundedIcon className="icon" /> Accessories</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={height}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    Accessories.batch1.length>0?(
                        Accessories.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    Accessories.batch2.length>0?(
                        Accessories.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    Accessories.batch3.length>0?(
                        Accessories.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                {/* <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div> */}
            </CarouselProvider>
            </section>




            <section className="trending">
                <h2><WatchRoundedIcon className="icon" /> Smartwatch</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={height}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    smartwatch.batch1.length>0?(
                        smartwatch.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    smartwatch.batch2.length>0?(
                        smartwatch.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    smartwatch.batch3.length>0?(
                        smartwatch.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                {/* <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div> */}
            </CarouselProvider>
            </section>

        

           

            <Footer />
        </div>
    )
}

export default Home
