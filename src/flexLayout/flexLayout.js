
import React from 'react';
import "./flexLayout.css";
import { Link } from "react-router-dom";


const FlexLayout=()=>{

 
  return (
    <>
  <div class="container">
        <div class="header">
          
        </div>
        <div class="content">
            <div class="hero">Hero</div>
            <div class="main1">Main Content 1</div>
            <div class="main2">Main Content 2</div>
        </div>
        <div class="sidebar">Sidebar</div>
        <div class="extra">Extra Content</div>
        <div class="related">
            <div class="related-images">Related Images</div>
            <div class="related-posts">Related Posts</div>
        </div>
        <div class="footer">Footer</div>
    </div>
    </>
  );
};

export default FlexLayout;