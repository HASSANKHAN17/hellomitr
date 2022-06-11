import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./DeliveryInfo.scss"
import SubHeader from '../../components/Header/SubHeader'
function DeliveryInfo() {
  return (
    <div>
        <Header />
        <SubHeader />
        <div className="container DeliveryInfo">
            <h1 className="my-5 center">Shipping and Delivery Policy</h1>
            <p className="l2">
            For International buyers, We do not accept international orders currently. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post/or Local delivery by Permotors authorized by Hellomitr only. Orders are shipped within 1 or 2 working days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. Hellomitr is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities or direct customers within 24hrs to 48 hrs working days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be deliver to registered address of the buyer as per the credit/debit card only at all times(Unless specified at the time of Order). Hellomitr is in no way responsible for any damage to the order while in transit to the buyer. Hellomitr is proud to use Razorpay ,cashfree, Payumoney, CCavenue and Ingenico-Paynimo  for fast, easy and efficient secure payments. All major credit cards are accepted.
            </p>

            <h4>Shipping & Delivery Policy (Services)</h4>
            <p className="l2">
            Delivery of our services will be confirmed on your mail ID & sms to registered mobile number as specified during registration. For any issues in utilizing our services you may contact our helpdesk on (helpline@hellomitr.com)
            </p>

            <p className="l2">
            How the delivery charge is calculated for multiple units and some products.
            </p>
            <p className="l2">
            The shipping charge is based on the weight of the product. For multiple products ordered from the same category the program adds up the weight of all the units ordered and charges a single delivery fee.
            </p>

            <p className="l2">
            Thus, a customer who orders three books weighing 200gms, 250gms and 400gms is charged a single delivery fee of a consignment weighing more than 500gms but less than one kg. The customer is not charged for three different consignments weighing less than 500gms each. Thus the customer will pay a delivery fee of Rs 99 for ordering the three books as a single order instead of Rs 142 if he orders them separately. Order above ₹ 999 is free to deliver.
            </p>

            <p className="l2">
            However, the delivery fee is calculated separately when a customer orders different products. Thus, if a customer orders a Shirts he will pay separate delivery charges for each product. This is because the products are being sourced and shipped from different cities.
            </p>

            <p className="l2">
            The minimum weight taken into account is 250gms (only for documents) for domestic shipments.
            </p>

            <p className="l2">
            The weight of the product has been built in into the delivery charge of each product. This will automatically be added to the product cost at the payment stage. The delivery cost of a consignment weighing 3 Kg to be shipped within India will be = INR 299.
            </p>

            <p className="l2">
            The delivery charge is arrived at by multiplying the weight of the product with the slab rate.
            </p>

            <h4>BO Clause</h4>
            <p className="l2 mb-5">
            We as a Hellomitr shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.
            </p>
        </div>
        <Footer/>
    </div>
  )
}

export default DeliveryInfo