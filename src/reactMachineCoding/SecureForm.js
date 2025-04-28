import React, { useState } from "react";
import DOMPurify from "dompurify";



/*

.>Jab hame API se raw HTML milta(mean not html data with tags and data and all) and uske UI me render karna ho to
usko hame sanitize karna padta hai so to prevent from XSS attack.

.>DOMPurify is a library that helps sanitize HTML and prevent XSS attacks. It removes any potentially harmful scripts or tags from the HTML content, making it safe to render in the browser.

.>we use dangerouslySetInnerHTML to render HTML content in React. when using dangerouslySetInnerHTML,use DOMPurify to sanitize the HTML content before rendering it. This ensures that any potentially harmful scripts or tags are removed, preventing XSS attacks.


.>Sanitize hamesa{koi bhi field ke liye nahi karte } nahi karte hai, jab raw html data  API se aata hai to usko xss atack se bachane ke liye sanitize karte hai, using DOMPurify.

.>If user ko restrict karna ki wo kuch specific tag or input na dale to uske liye Regx use karte hai.


*/



function SecureForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Sanitized Data:", sanitizedData);
    alert("Form Submitted Successfully!");
  };
  const data = 'lorem <b>ipsum</b>';
  return (
    <div>
      <h2>Secure Form with DOMPurify</h2>
      {data}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SecureForm;
