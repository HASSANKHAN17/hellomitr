import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/Header/SubHeader'
import {Link} from 'react-router-dom'
function FrequentlyAsked() {
  return (
    <div>
        <Header />
<SubHeader />
        <div className="container FAQ">
            <h1 className="center my-4">FAQ's</h1>

<h2>SHIPPING</h2>
<h3>What Shipping Methods Are Available?</h3>
<p>we are currently partner with shiprocket for shipping domestic carriers and deliver orders under instant delivery complete in 2 hrs from location based delivery points through our partners.</p>
<h3>Do You Ship Internationally?</h3>
<p>We don’t ship internationally because currently our services only for India.</p>
<h3>How Long Will It Take To Get My Package?</h3>
<p>We deliver the product/package within 2 hours* but sometimes it takes more so we contact the buyer to update our location to him so we deliver package on time and he collect it.<br/>
shipping partner takes minimum 2-5 days maximum as per Pin-codes and distance based on consumer locations.</p>
<h2>PAYMENT</h2>
<h3>What Payment Methods Are Accepted?</h3>
<p>We are partnered with most famous payment gateway’s in India which are CCavenue, Paytm, Cashfree, Zestmoney EMI , Razorpay, payumoney etc , pay with your favorite and most trusted payment gateway.</p>
<h3>Is Buying On-Line Safe?</h3>
<p>Yes , Shoppers are 100% secure purchasing on Hellomitr as we’re using most advanced and 100% secure payment gateway to pay on the website of Hellomitr and shoppers information will never be shared with any third party/organization/person ever. Shoppers details and privacy is our priority to protect.</p>
<h2>Order &amp; Returns</h2>
<h3>How do I place an Order?</h3>
<p>Shopper need to create an account with Hellomitr which is completely free and thats how shopper can keep order history and place new order in their shopping time on Hellomitr</p>
<h3>How Can I Cancel Or Change My Order?</h3>
<p>You can cancel and change order in cart also compare even with other relevant similar product but prices and specifications differences check and purchase as your conveniences.</p>
<h3>Do I need an account to place an order?</h3>
<p>Yes, as its mandatory to create an account to start shopping on Hellomitr.</p>
<h3>How Do I Track My Order?</h3>
<p>Once you successfully placed an order with Hellomitr then you will get a unique order ID which you enter and can track status. To track shipping consignment you will get a unique consign number from us via mail or sms.</p>
<h3>How Can I Return a Product?</h3>
<p>To get a refund you need to submit a request to our support portal or mail us at helpline@hellomitr.com.<br/>
Submit your proof of delivery and reason why you want a refund if you are eligible then we will issue a Instant refund against your order.<br/>
Read our Refund Policy : <Link to="/returnpolicy">https://www.hellomitr.com/return/</Link></p>
<h2>How to avail Debit Card EMI?</h2>
<h3>What are the steps to avail a Debit EMI?</h3>
<p>Find the product you want to buy and visit the product detail page. If the product is available on your Debit EMI and your account is eligible, you will find “Debit EMI” within EMI section where you can check available tenures and interest rates. To complete the purchase, add the product to cart and continue to payment page. On payment page, you will need to select “EMI Menu” and then add Bank’s Debit card. Select the appropriate tenure and continue with transaction. You will get re-directed to bank page to complete the payment similar to debit card.</p>
<h3>How does this work, will my bank debit my account when I avail Debit EMI option?</h3>
<p>No, your bank account will not be debited. Your bank has pre-approved an overdraft facility which will be used for this payment and you need to pay monthly installments to your bank as per the EMI option selected by you.</p>
<h3>I have 5K in my bank account and want to buy product worth 15K. Can I use 5K from my bank account and avail remaining 10K through Debit EMI?</h3>
<p>You will need to make the complete payment of 15K using Debit EMI option. Your bank will deduct monthly EMI amount from your bank account basis the EMI option chosen by you.</p>
<h3>How do I check my eligibility for Debit EMI?</h3>
<p>* Your bank will send to you an email &amp; SMS confirming your eligibility for Debit Card EMI.<br/>
* When will I be charged?<br/>
* First installment will be deducted 30 days from date of transaction</p>
<h3>How will I pay back my EMI?</h3>
<p>Your bank will auto-enable standing instruction on your SB A/C to enable debit of monthly payments for EMI. Please make sure you keep sufficient balance in your SB A/C to cover for EMI amount. In case you wish to re-pay the amount early, you can contact your bank to close the EMI. Your bank might levy additional charges for pre-closure of the loan.</p>
<h3>What charges I need to pay to avail Debit EMI?</h3>
<p>You will not pay any additional charges to Hellomitr for availing Debit EMI option. However your bank will charge you interest which is built into the monthly installment which you pay. You can check the interest charges and EMI amount on payment page before proceeding to make the payment. If you are availing EMI using a HDFC bank or a Kotak bank credit or debit card, you will be charged a processing fee of ₹ 199 by banks &amp; For Axis bank credit card or debit card, minimum transaction fee will be ₹99 and maximum will be 1% of the order value.</p>
<h3>I have seen No Cost EMI being offered on products on Hellomitr Platform. Will I also get No Cost EMI if I pay using Debit EMI?</h3>
<p>Currently we do not offer No Cost EMI on debit card EMIs. To check whether product qualifies for No Cost EMI , see EMI tenures on payment detail page.</p>
<h3>What if I cancel or return the product?</h3>
<p className="mb-5">If your product qualifies for return, you can cancel the order or return the product within 7 days. Your EMI payment will be canceled by the bank. Please note, your bank may charge you foreclosure or cancelation fees<br/>
We’re Here to Help ! <Link to="/contactus">Contact us</Link></p>
		</div>
        <Footer/>
    </div>
  )
}

export default FrequentlyAsked