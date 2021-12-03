import "./footer.scss"

import { FaFacebookF , FaInstagram ,FaYoutube ,  FaLinkedin} from "react-icons/fa";

export default function Footer() {
    return (
        <div id="contacto">

            <div className="contenedor footer-content">
                <div className="contact-us">
                    <h2 className="brand">Carlos Orozco</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, tenetur.</p>
                </div>

                <div className="social-media">
                    <a href="#" className="social-media-icon">
                        <FaFacebookF className="icon"/>
                    </a>
                    <a href="#" className="social-media-icon">
                        <FaInstagram className="icon"/>
                    </a>
                    <a href="#" className="social-media-icon">
                        <FaYoutube className="icon"/>
                    </a>
                    <a href="#" className="social-media-icon">
                        <FaLinkedin className="icon"/>
                    </a>
                </div>
            </div>
            
        </div>
    )
}
