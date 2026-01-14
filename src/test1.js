import React, { useState, useEffect } from "react";
import axios from "axios";
import { set } from "react-hook-form";

const Test = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const [count, setCount] = useState(0);
  /* CORs issue ko fix krne ka ye bhi ak tarika hai from front end side and 
  
  
  //https://stackoverflow.com/questions/76384362/how-do-you-setup-an-api-proxy-in-the-cra-dev-server
  
  */
  const URL = "https://dummyjson.com/products";

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  const fetchProduct = async (retryCount = 0) => {
    //You are declaring a function parameter, not a local variable, retryCount is created automatically whenever the function is called.When you call fetchProduct() ⇒ retryCount = 0,When you call fetchProduct(1) ⇒ retryCount = 1,When you call fetchProduct(2) ⇒ retryCount = 2,No need to declare it with let or const. It's part of the function definition. JavaScript creates a new private variable for that argument every time the function runs.
    //let count = 0;
    try {
      setIsLoading(true);
      const response = await axios.get("/products");
      setProductData(response?.data);
      setIsLoading(false);
    } catch (err) {
      //How can we implement a retry logic for failed API calls in React, where the request automatically retries up to 3 times with a delay between each retry?"
      //let count = 0;
      if (retryCount <= 3) {
        setTimeout(() => {
          //setCount((prev) => prev + 1);
          fetchProduct(retryCount + 1);
        }, 3000);
      }

      console.log("err=>", err);
    }
  };

  return (
    <>
      {!isLoading && (
        <table>
          <tr>
            <th>item1</th>
            <th>item2</th>
          </tr>
          {productData?.length &&
            productData?.map((product) => (
              <tr>
                <td>{product?.id}</td>
                <td>{product?.id}</td>
              </tr>
            ))}
        </table>
      )}
      <button onClick={() => fetchProduct()}>Fetch Product</button>
    </>
  );
};
export default Test;
