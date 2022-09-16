import '../Styles/Footer.css'
import LinkedIn from '../Images/LinkedIn.png'
import Twitter from '../Images/Twitter.png'
import Mail from '../Images/Mail.png'

const Footer = () => {
    return ( 
        <div className="footer">
            <div>
                <div className="footerName">
                    <hr />
                    <h1>Mubaraq Kalejaiye.</h1>
                    <hr />
                </div>
                <div className="footerSocials">
                    <a href="https://www.linkedin.com/in/mubaraqkalejaiye/"><img src={LinkedIn} alt="linkedIn Account" className="linkedIn" /></a>
                    <a href="https://twitter.com/Mubarak_MKay"><img src={Twitter} alt="Twitter Account" className="twitter" /></a>
                    <a href="mailto:mubaraqkalejaiye@gmail.com"><img src={Mail} alt="Mail" /></a>
                </div>
                <div className="footerOthers">
                    <span>Copyright</span>
                    <span>&copy;</span>
                    <span>2022 | All Rights Reserved</span>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;