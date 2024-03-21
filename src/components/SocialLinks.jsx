import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';


function SocialLinks(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/apaccatu/" className="elements">
                <FaInstagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5571999575358&text=Ol%C3%A1%2C%20&app=web" className="elements">
                <FaWhatsapp/>
            </a>
            <a href="https://www.facebook.com/apaccatu" className="elements">
                <FaFacebook/>
            </a>
        </div>
    );
}
export default SocialLinks;