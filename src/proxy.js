import { createProxyMiddleware } from 'http-proxy-middleware';

/*  

//CORs issue ko fix krne ka ye bhi ak tarika hai from front end side and


//npm install http-proxy-middleware --save-dev

VVVVIIIMMPP ===>jab ye setup karo file name proxy.js hi rakho and npm start again must jarur karo, else proxy wala ye jo config kiya wo kaam nahikarega
//file name setupProxy.js mar rakho, phir o run nahi hot hai..can check, keep proxy .js or any other;

//must re run like npm start.

//pkg.json me bhi   "proxy": "https://dummyjson.com",  add

*/

module.exports = function(app) {
  app.use(
    '/products',
    createProxyMiddleware({
      target:"https://dummyjson.com",
      changeOrigin: true,
     
    })
  );
}