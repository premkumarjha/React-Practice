import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading,setIsLoading]=useState(false);


  /* CORs issue ko fix krne ka ye bhi ak tarika hai from front end side and 
  
  
  //https://stackoverflow.com/questions/76384362/how-do-you-setup-an-api-proxy-in-the-cra-dev-server
  
  */
  const URL = "https://dummyjson.com/products";

  useEffect(() => {
    fetchProduct();
  }, []);



  const fetchProduct = async () => {
    try {
        setIsLoading(true)
      const response = await axios.get("/products");
      setProductData(response?.data);
      setIsLoading(false)
    } catch (err) {
      console.log("err=>", err);
    }
  };

  
  return (
    <>
    
    {!isLoading && <table>
        <tr>
          <th>item1</th>
          <th>item2</th>
        </tr>
        {productData?.length && productData?.map((product) => (
          <tr>
            <td>{product?.id}</td>
            <td>{product?.id}</td>
          </tr>
         ))} 
      </table>}
      
    </>
  );
};
export default Test;
