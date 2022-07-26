import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import SignUp from './components/Auth/SignUp'
import LogIn from './components/Auth/LogIn'
import ItemDetail from './components/Item/ItemDetail'
import Cart from './components/Cart/Cart'
import Checkout from './components/Cart/Checkout'
import MyProfile from './components/Dashboard/MyProfile/MyProfile'
import Categories from './components/Categories/Categories'
import Orders from './components/Dashboard/Orders/Orders'
import OrderDetail from './components/Dashboard/Orders/OrderDetail';
import Transaction from './components/Transaction/Transaction'
import Addresses from './components/Dashboard/Addresses/Addresses'
import TransactionSingle from './components/Transaction/TransactionSingle';
import Otp from './components/Auth/Otp'

//pages 
import AboutUs from './pages/AboutUs/AboutUs';
import DeliveryInfo from './pages/DeliveryInfo/DeliveryInfo';
import Disclaimer from './pages/Disclaimer/Disclaimer'
import TermsAndConditions from './pages/TermsandConditions/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import SellerPolicy from './pages/SellerPolicy/SellerPolicy';
import ReturnPolicy from './pages/ReturnPolicy/ReturnPolicy';
import FrequentlyAsked from './pages/FAQ/FrequentlyAsked';
import ContactUs from './pages/ContactUs/ContactUs';
import Corporate from './pages/CorporateandBP/Corporate';
import MaintenanceMode from './MaintenanceMode';
import TestPayment from './components/TestPayment';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/itemdetail" component={ItemDetail} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/cart" component={Cart} />
      <Route path="/categories" component={Categories} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/myprofile" component={MyProfile} />
      <Route path="/orders" component={Orders} />
      <Route path="/addresses" component={Addresses} />
      <Route path="/transaction" component={Transaction} />
      <Route path="/singletransaction" component={TransactionSingle} />
      <Route path="/orderdetail" component={OrderDetail} />
      <Route path="/otp" component={Otp} />
      <Route path="/testpayment" component={TestPayment} />


      {/* static pages  */}
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/deliveryinfo" component={DeliveryInfo} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/termsandconditions" component={TermsAndConditions} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
      <Route path="/sellerpolicy" component={SellerPolicy} />
      <Route path="/returnpolicy" component={ReturnPolicy} />
      <Route path="/faq" component={FrequentlyAsked} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/corporate" component={Corporate} />
    </Switch>
  );
}

export default App;
