import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./sideMenu.css"
const ResponsiveMenu=()=>{

    //ak div lo as header
    const [isShow,setIsShow]=useState(false);

    return(

        <>
        <div style={{position:'relative',backgroundColor:'#50c5e6'}}>
        <div>
        <button onClick={()=>setIsShow(true)} className="menu">☰</button>
        <ul className="menuitem" >
        <li><Link to="/abcd">abcd</Link></li>
        <li><Link to="/efgh">efgh</Link></li>
        <li><Link to="/ijkl">ijkl</Link></li>
        <li><Link to="/mnop">mnop</Link></li>
        </ul>
        </div>
        {isShow && <div className="sidebar">
            <button onClick={()=>setIsShow(false)}>cross icon</button>
        <ul style={{display:'flex',flexDirection:'column',justifyContent: "space-evenly",padding: "10px",marginLeft:40,}} >
        <li><Link to="/abcd">abcd</Link></li>
        <li><Link to="/efgh">efgh</Link></li>
        <li><Link to="/ijkl">ijkl</Link></li>
        <li><Link to="/mnop">mnop</Link></li>
        </ul>

        </div> }
        
        </div>
        </>
    )
};

 export default ResponsiveMenu;