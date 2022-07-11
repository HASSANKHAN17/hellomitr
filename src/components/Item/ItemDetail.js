import React from 'react'
import Header from '../Header/Header'
import SubHeader from '../Header/SubHeader'
import "./ItemDetail.scss"
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Footer from '../Footer/Footer'
import Item from './Item'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import {addToCart,increaseItemCount,decreaseItemCount,removeFromCart} from '../redux/cart/cartActions'
import {storeSingleItem} from '../redux/SingleItem/singleItemActions'
import {connect} from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton'
import RemoveIcon from '@mui/icons-material/Remove';
import buynowpaylater from './WhatsApp Image 2022-02-15 at 2.49.46 PM.jpeg'
import bajajfinance from './bajajfinance.jpeg'
import zestmoney from './zest.jpeg'
import hdfc from './hdfc.jpeg'
import icici from './icici.jpeg'
import AddCardIcon from '@mui/icons-material/AddCard';
import kotak from './KOTAKBANK.NS.png'
import {BrowserView, MobileView} from 'react-device-detect';
import instacred from './instacred.jpeg'
import WooCommerceAPI from 'woocommerce-api'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import emiimg from './emiimg.png'
import {ReactComponent as RankingSVG} from './ranking-1.svg'
import cashelogo from '../../Images/CASHe Logo.png'
import casheNameLogo from './logo-1.png'
function ItemDetail(props) {

  var WooCommerce = new WooCommerceAPI({
    url: 'https://api.hellomitr.com/',
    consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
    consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
    wpAPI: true,
    version: 'wc/v1',
    queryStringAuth:true
  });
  let details = props.location.state;
    const [image,setImage]=React.useState(details?details.images[0].src:"")
    const [value, setValue] = React.useState('1');
    const [inCart,setInCart] = React.useState([])
    const [data,setData]=React.useState([])
    const [reviews,setReviews]=React.useState([])
    const [variation,setVariation]=React.useState({})
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderOff = ()=>{
    return Math.ceil(100-(details.price/details.regular_price*100))
  }
  React.useEffect(()=>{
    if(props.cart.length>0){
      let av = props.cart.filter(item=>item.id===details.id)
      if(av.length>0){
        setInCart(av)
      }
    }else{
      setInCart([])
    }
    WooCommerce.getAsync(`products?category=${props.cid}&per_page=5`)
            .then((result) => {
            setData(JSON.parse(result.toJSON().body))
            })
            .catch((error) => {
            });
            WooCommerce.getAsync(`products/reviews`)
            .then((result) => {
            setReviews(JSON.parse(result.toJSON().body))
            })
            .catch((error) => {
            });
           
  },[props.cart])
  return (
    <div>
    <Header id="1" />
    <SubHeader />

    <section className="itemdetail-container">

    <div className="row m-auto  itemdetail">
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 imagediv">
            <img src={image} alt="watch" className="mainimg" />
            
            <div className=" imagerow">
            {
              details.images.length>0?details.images.map((item,index)=><img key={index} src={item.src} 
              onClick={()=>setImage(item.src)} alt="watch" className="subimg" />):null
            }
            </div>
        </div>



        <div className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 productdetail'>
            <h1 className="productname">{details.name}</h1>
            <p>
                <span className="ratingdiv">{details.average_rating} <StarIcon /></span>
                <span className="ratingreview">({details.rating_count} Ratings & Reviews)</span>
            </p>
            <p><b>Highlight Features</b></p>
            <p dangerouslySetInnerHTML={{__html: details.short_description}} />

            <div className="availableoffers">
              <p><b>Shop now pay later with <img src={casheNameLogo} alt="CASHe" className='cashenamelogo' /></b></p>
              <p><img src={cashelogo} alt="cashe" /> No Cost EMI - 3 M & 6 M</p>
              <p><img src={cashelogo} alt="cashe" /> Zero Downpayment</p>

            </div>



            <section className="pricerow m-auto row align-items-center">
                <div className="price">₹{details.price}</div>
                <div className="mrp">{details.regular_price}</div>
                {details.regular_price&&details.price?<div className="poff">{renderOff()}% off</div>:null}
            </section>

            <p className='mt-3'>You Save: ₹{details.regular_price?details.regular_price-details.price:0} <br />
            (Inclusive of all taxes)
            </p>


            {
              details.variations.length>0&&<div  className="row m-auto variationdiv">
                {
                  details.variations.map((item,index)=>(
                  <>
                  <BrowserView>
                  <div onClick={()=>{
                    if(item.price!=="" && item.regular_price!==""){
                      details.regular_price = item.regular_price;
                      details.price = item.price;
                    }
                    setImage(item.image[0].src)
                    setVariation(item)
                    }} className={"variation cursor-pointer"} key={index}>
                    <img src={item.image[0].src} className="center-img" alt="attimg" />
                    <div>
                    <p>{item.attributes[0].option}</p>
                    </div>
                  </div>
                  </BrowserView>

                    <MobileView>
                    <div onClick={()=>{
                    if(item.price!=="" && item.regular_price!==""){
                      details.regular_price = item.regular_price;
                      details.price = item.price;
                    }
                    setImage(item.image[0].src)
                    setVariation(item)
                    }} className={"variation col-5 cursor-pointer"} style={{marginTop:10}}  key={index}>
                    <img style={{width:"100%"}} src={item.image[0].src} className="center-img" alt="attimg" />
                    <div>
                    <p>{item.attributes[0].option}</p>
                    </div>
                  </div>
                  
                    </MobileView>
                  </>

                  ))
                }
              </div>
            }

            {inCart.length<=0?(details.in_stock?<div className="row m-auto">
                <Button onClick={()=>props.addToCart(details)} variant="contained">Add to cart</Button>
                <Button onClick={()=>{
                  if(props.user){
                    props.storeSingleItem(details)
                    props.history.push("/checkout",true)
                  }else{
                    props.storeSingleItem(details)
                    props.history.push("/signup",true)
                  }
                  
                  }} variant="contained" className="ml-3">Quick Buy</Button>
            </div>:
            <Button variant="contained" disabled>out of stock</Button>
            ):
            <div className="row m-auto align-items-center">
              <IconButton  onClick={()=>inCart[0].count===1?props.removeFromCart(details):props.decreaseItemCount(details.id)} color="primary" className="iconbutton">
                <RemoveIcon />
              </IconButton>
              <div className="count">
                <h2>{inCart[0].count}</h2>
              </div>
              <IconButton disabled={inCart[0].count===2?true:false} onClick={()=>props.increaseItemCount(details.id)} color="primary" className="iconbutton">
                <AddIcon />
              </IconButton>
            </div>
            }
            <p className="mt-3">Sold by: <b>Hellomitr outlook</b></p>
        </div>




          <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-3 col-xl-3 shadow buynowpaylater">
            {/* <img src={buynowpaylater} /> */}
            <p className="heading"><img src={emiimg} alt="emiimg" className="mr-2" /> Buy Now Pay Later Offers</p>
            <hr />
            <p><img src={bajajfinance} alt="bjf"/> Bajaj Finserv No Cost EMI</p>
            <p><img src={zestmoney} alt="zest" /> ZestMoney No Cost EMI</p>
            <p><img src={hdfc} alt="hdfc" /> HDFC Buy Now Pay Later</p>
            <p><img src={icici} alt="hdfc" /> ICICI Bank Debit Card EMI</p>
            <p><img src={kotak} alt="hdfc" className="mr-2" /> Kotak Bank Debit Card EMI</p>
            <p><img src={instacred} alt="hdfc" className="mr-2" /> Instacred Cardless EMI</p>
            <Button startIcon={<AddCardIcon />} fullWidth variant="contained">Get Bajaj Insta EMI Card</Button>
          </div>









    </div>

    <Box className="descriptionreviewtab" sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Description" value="1" />
            <Tab label="Review" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {/* item specification section */}
            <div className="specificationdiv">
            <p dangerouslySetInnerHTML={{__html: details.description}} />
            </div>


            {/* atributes section */}
            <section className="attributes"> 
                {
                  details.attributes.map((item,index)=>(
                    <div className="row align-items-center">
                    <p className="col-4 key">{item.name}</p>
                    <p className="col-8 value">{item.options.map(op=><p>{op}</p>)}</p>
                    </div>
                  ))
                }

            
            </section>





            
        </TabPanel>
        <TabPanel value="2">

                {/* <div className="review-container">
                    <div className="row m-auto">
                        <div className=" imgcontainer">
                        <Avatar alt="Remy Sharp" className="avatar" src="assets/images/avatars/001-man.svg" />
                        </div>
                        <div className=" detailcontainer">
                            <p className="name">John Schemen</p>
                            <div className="row mx-auto">
                            <Rating name="read-only" value={4.6} readOnly />
                            <p className="rating">4.6</p>
                            <p className="timeline">2.6 years ago</p>
                            </div>
                        </div>
                    </div>
                    <p className="review">Non in ex veniam dolore. Cupidatat voluptate minim consequat ullamco laboris. Sit culpa veniam esse labore elit irure eiusmod ullamco laborum qui ut fugiat. Sint ullamco nulla dolore est anim consectetur incididunt dolor deserunt nisi dolore et officia. Amet consectetur aute pariatur nulla pariatur Lorem nostrud id minim sunt sint irure.</p>
                </div> */}



   
        </TabPanel>
      </TabContext>
    </Box>
    </section>
    <section className="mt-5 mx-5 dod">
                <h2><RankingSVG  /> Recommended Items</h2>
                <div className="row  justify-content-around">

                {
                    data.length>0?(
                        data.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2 itemdod">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
            </section>


    <Footer />

    </div>
  )
}

const mapStateToProps = ({cart,user})=>{
  return {
    cart,
    user:user.user
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    removeFromCart:(item)=>dispatch(removeFromCart(item)),
    addToCart:(item)=>dispatch(addToCart(item)),
    increaseItemCount:(id)=>dispatch(increaseItemCount(id)),
    decreaseItemCount:(id)=>dispatch(decreaseItemCount(id)),
    storeSingleItem:(item)=>dispatch(storeSingleItem(item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemDetail)

{/* <div className="row imagerow">
            <CarouselProvider
                naturalSlideWidth={10}
                naturalSlideHeight={2}
                totalSlides={3}
                isPlaying
                >
                <Slider>
                {
                details.images.map((item,index)=><Slide index={index}><img key={index} src={item.src} 
                onClick={()=>setImage(item.src)} alt="watch" className="subimg" /></Slide>)
                }
                </Slider>
            </CarouselProvider>
            </div> */}