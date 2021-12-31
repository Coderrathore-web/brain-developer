import React from "react"
import "./Footer.css"
const Footer = ()=>{
    return(
        <div className="footer_CopyRight" >
            
            <div className="footer_links">
                <ul>
                    <li> <a href="/about-us">About Us</a></li>
                    <li><a href="/service">Services</a></li>
                    <li><a href="/contactus">Contact Us</a></li>
                    <li><a href="/products">Products</a></li>
                   
                </ul>
            </div>
            <div className="off_add">
                <h3>Head Office:</h3>
                <p>Near Bus Stand,Indira Nagar ,Jatahan Road,Padrauna(U.P.) 274304</p>
                
            </div>
       
            <h3>Brain Developer &#169; 2021  &nbsp; &nbsp; &nbsp;  All Rights Reserved</h3>
        </div>
    )
}
export default Footer;