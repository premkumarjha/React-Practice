import React, { useEffect, useState } from "react";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState();
  useEffect(() => {
    console.log("CreditCard component loaded");
  }, []);

  const inputHandler = (e) => {
    console.log("inputHandler", e.target.value);

    //1.>total length 16 and each 4 digit ke baad - lagana hai + try same ke date ke liye 2 digit ke baad / lagana hai.
    //2.>Extract Numbers from a String
    //3.>Remove All Special Characters from a String
    //4.>Validate an Indian Aadhaar Number (XXXX-XXXX-XXXX)
    //5.>Validate an Indian PAN Card (AAAAA1234A)
    //6.>Validate an credit card number (AAAAA1234A)
    //7.>Validate a Phone Number (US Format: (123) 456-7890)

    //8.>Validate an Email Address //will see it lettter
    //9.>Validate a Password (Min 8 Characters, 1 Uppercase, 1 Number, 1 Special Character) ////will see it lettter
    
    if (e?.target?.value.length <= 19) {
      //16 length and 3 "-" added
      const inputValue = e?.target?.value.replace(/\D/g, ""); // Remove non-digit characters
      let formatted = inputValue?.match(/.{1,4}/g)?.join("-") || inputValue;
      setCardNumber(formatted);
    }
  
  };
  return (
    <>
      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => inputHandler(e)}
      />
    </>
  );
};

export default CreditCard;
