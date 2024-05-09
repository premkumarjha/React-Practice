import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const URL = "https://dummyjson.com/products";

  useEffect(() => {
    fetchProduct();
  }, []);
/* 

//
display :none
visility:hidden //check 

const array='HareKrishan';
//count of each char;

const output=array.reduce((c,acc)=>{
if(!acc[c]){
    acc[c]=1
return acc
}else{

}

},{})

{h:1,a:n,}
*/
  const fetchProduct = async () => {
    try {
        setIsLoading(true)
      const response = await axios.get(URL);
      setProductData(response?.data);
      setIsLoading(false)
    } catch (err) {
      console.log("err=>", err);
    }
  };

  //https://dummyjson.com/products  //
  //fetch data and show in table
//thunk, saga or..
//flux , mobix
  return (
    <>
    {isLoading ? ' ' :''}
      <table>
        <tr>
          <th>item1</th>
          <th>item2</th>
        </tr>
        {productData.map((product) => (
          <tr>
            <td>{product?.item1}</td>
            <td>{product?.item2}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default Test;
