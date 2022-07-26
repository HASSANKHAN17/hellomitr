import React from 'react'

function TestPayment() {
  return (
    <div>
      <form action='https://test.payu.in/_payment' method='post'>
<input type="hidden" name="key" value="Sog1Og" />
<input type="hidden" name="txnid" value="t6svtqtjRdl4wss" />
<input type="hidden" name="productinfo" value="iPhone" />
<input type="hidden" name="amount" value="10" />
<input type="hidden" name="email" value="test@gmail.com" />
<input type="hidden" name="firstname" value="Ashish" />
<input type="hidden" name="lastname" value="Kumar" />
<input type="hidden" name="surl" value="http://localhost:3002/success" />
<input type="hidden" name="furl" value="http://localhost:3002/fail" />
<input type="hidden" name="phone" value="9988776655" />
<input type="hidden" name="hash" value="33b64dd1853ec4bcaa82d26bbef14fb06eed24a2dc50e13b03ea7f40a6b3da5e2d2a3a6736c94de4c57d1ba22f27aed00c45cb8c70be306262e4852d2d3db77d" />
<input type="submit" value="submit" /> 
</form>
        {/* <form id="snapmint" name="snapmint" method="post" 
action="https://sandboxapi.snapmint.com/v3/public/online_checkout">
<input type="hidden" name="token" value="UOYY0R_n"/>
<input type="hidden" name="merchant_confirmation_url" value="http://localhost:3000"/>
<input type="hidden" name="merchant_failure_url" value="http://localhost:3000"/>
<input type="hidden" name="checksum_hash" value="08d27ad105649507e1a029122877aa1bfa2c9520ca6d6aff583753b075c60f25e5581c56d9c3471686622e3072c044c208fa94d0d223b58ad783ede1a56aa29d"/>
<input type="hidden" name="order_id" value="eeeee12"/>
<input type="hidden" name="order_value" value="81500"/>
<input type="hidden" name="first_name" value="shaikh"/>
<input type="hidden" name="last_name" value="sharjeel"/>
<input type="hidden" name="full_name" value="shaikh sharjeel"/>
<input type="hidden" name="email" value="sharjeelarts@gmail.com"/>
<input type="hidden" name="mobile" value="7777788888"/>

<input type="hidden" name="shipping_address_line1" value="railway station road"/>

<input type="hidden" name="shipping_zip" value="431001"/>

<input type="hidden" name="billing_address_line1" value="railway station road"/>

<input type="hidden" name="billing_zip" value="431001"/>

<input type="hidden" name="products[][sku]" value="454"/>
<input type="hidden" name="products[][name]" value="Air Pods 2"/>
<input type="hidden" name="products[][quantity]" value="1"/>

<input type="hidden" name="products[][unit_price]" value="1500"/>

<input type="hidden" name="products[][sku]" value="545"/>
<input type="hidden" name="products[][name]" value="ipad pro m1"/>
<input type="hidden" name="products[][quantity]" value="1"/>

<input type="hidden" name="products[][unit_price]" value="80000"/>

<input type="submit" value="Make Payment"/>
</form> */}
    </div>
  )
}

export default TestPayment