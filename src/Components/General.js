import '../Styles/General.css';
import Mubaraq from '../Images/Mubaraq.jpg';
import LinkedIn from '../Images/LinkedIn.png'
import Twitter from '../Images/Twitter.png'

const General = () => {
    return ( 
        <div className="general">
            <div className="navBar">
                <h1 className="name">Mubaraq Kalejaiye</h1>
                <nav className="nav">
                    <ul>
                        <li>About Me</li>
                        <li>Projects</li>
                        <li>Contact Me</li>
                    </ul>
                </nav>
            </div>
            <div className="generalOthers">
                <div className="generalDetails">
                    <h2>HI THERE</h2>
                    <h3>I AM MUBARAQ KALEJAIYE</h3>
                    <h4>A dedicated Frontend Web Developer and Medical Student</h4>
                    <div className="generalDetailsLinks">
                        <a href="https://www.linkedin.com/in/mubaraqkalejaiye/"><img src={LinkedIn} alt="linkedIn Account" className="linkedIn" /></a>
                        <a href="https://twitter.com/Mubarak_MKay"><img src={Twitter} alt="Twitter Account" className="twitter" /></a>
                    </div>
                </div>
                <img src={Mubaraq} alt="Mubaraq" className="image" />
            </div>
        </div>
     );
}
 
export default General;