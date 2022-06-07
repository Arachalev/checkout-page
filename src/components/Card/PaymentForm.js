import React, { useState } from "react";
import Cards from "react-credit-cards";
// import useHook from "../../hooks/useHook";


//I generally prefer importing my css as modules to have neater components

import classes from "./PaymentForm.module.css";
import paypal from "../../assets/paypal.svg"
import master from "../../assets/master.svg"
import visa from "../../assets/visa.svg"
import discover from "../../assets/discover.png"
import "./PaymentForm.css"




const PaymentForm = () => {
  //use state hook to manage the cards details
  const [cardDetails, setCardDetails] = useState({
    number: "",
    // name: "",
    expiry: "",
    cvc: "",
    focus: "",
    postalCode:"",
    numberValue:""
  });


  const handleInputFocus = (e) => {
    setCardDetails({...cardDetails, focus: e.target.name });
  };

  //input handler which is to update the state as the user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

 





  //Attempt to use regex to show a custom value as the user
  //inputs their card details. Would work on the implementation later


  // const cardNumberHandler = (e) =>{
  //   // e.preventDefault()
  //   const { name, value } = e.target;
  //   // setCardDetails({ ...cardDetails, [name]: value });
  //   let splitNumber, finalNumber,cardNumber
  //     cardNumber =  cardDetails.number;
  //     splitNumber = cardNumber.match(/[\s\S]{1,3}/g) || []

  //     if(splitNumber)
  //     {
  //       finalNumber = splitNumber.join(" - ")
  //     }
  //     else
  //     {
  //       finalNumber = ""
  //     }

  //    setCardDetails({...cardDetails,[name]: value , numberValue:finalNumber})


  // }
 

  return (
    <div className={classes.paymentFormContainer}>
      <div className={classes.leftCard}>
        <div className={classes.leftHeadings}>
          <h4>Payment Information</h4>
          <p>Choose your method of payment</p>
        </div>
        <div  className={classes.cards}>

        <Cards
          cvc={cardDetails.cvc}
          expiry={cardDetails.expiry}
          focused={cardDetails.focus}
          // name ={cardDetails.name}
          name=" John Doe"
          number={cardDetails.number}
        />
        </div>

      </div>

      <div className={classes.rightForm}>
        <div className={classes.logos}>
          <span className={classes.cardLogos}><img src={visa} alt="visa logo"/></span>
          <span className={classes.cardLogos}><img src={discover} alt="discover logo"/></span>
          <span className={classes.cardLogos}><img src={master} alt="master card logo"/></span>
          <span className={classes.cardLogos}><img src={paypal} alt="paypal logo"/></span>

        </div>
        <form action="">
          <div className={classes.inputContainer}>
            <div className={classes.formInput}>
              <label>Credit card number</label>
              <input
                type="tel"
                maxLength="17"
                name="number"
                placeholder="Card number"
                onChange={handleInputChange}
                // value={cardDetails.numberValue}
                onFocus={handleInputFocus}
              />
              {/* {error && <p>Card number contains charachters</p>} */}

            </div>
            <div className={classes.formInput}>
              <label> Expiration date</label>
              <input
                type="tel"
                maxLength="4"
                pattern="\d*"
                name="expiry"
                placeholder="Expiry date"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
               

            </div>

            <div className={classes.formInput}>
              <label> Security code</label>
              <input
                type="tel"
                maxLength="3"
                name="cvc"
                placeholder="Card number"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className={classes.formInput}>
              <label> Postal code</label>
              <input
                type="tel"
                maxLength="9"
                name="postalCode"
                placeholder="Postal code"
                onFocus={handleInputFocus}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={classes.radioInput}>
            <input type="radio" />
            <label>Use this card for next time purchase</label>
          </div>
          <button className={classes.formButton}   type="submit">Add card</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
