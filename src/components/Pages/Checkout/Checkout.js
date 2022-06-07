import React from "react";
import classes from "./Checkout.module.css";
import PaymentForm from "../../Card/PaymentForm";
import Header from "../../Header/Header";


//checkout page component which would contain the header, payment form and payment details.
//If there are multiple pages, we could use react router and render these pages as an outlet in the app component
 
const Checkout = () => {
  return (
    <div className={classes.checkoutContainer}>
      <div className={classes.headerContainer}>
      <Header />

      </div>
      <hr />
      <PaymentForm />
      <hr />

      <div className={classes.checkoutDetails}>
        <div className={classes.prices}>
          <div className={classes.pricesContainer}>
            <p>Subtotal</p>
            <p>₦2497.00</p>
          </div>
          <div className={classes.pricesContainer}>
            <p>Estimated TAX</p>
            <p>₦119.64</p>
          </div>
          <div className={classes.pricesContainer}>
            <p>
              Promotional Code:<span>ZKXLM9A</span>
            </p>
            <p>₦-60.00</p>
          </div>
        </div>
        <hr />
        <div className={classes.payment} >
          <button>Complete payment</button>
          <p>TOTAL: ₦2556.64</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
