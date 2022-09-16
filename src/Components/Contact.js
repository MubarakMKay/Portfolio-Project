import '../Styles/Contact.css'
import LinkedIn from '../Images/LinkedIn.png'
import Twitter from '../Images/Twitter.png'
import Mail from '../Images/Mail.png'
import Phone from '../Images/Phone.png'

const Contact = () => {
    return ( 
        <div className="contact">
            <div className="contactDetails">
                <div>
                    <h1>Get In Touch.</h1>
                    <span>Hit me up Anytime.</span>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/mubaraqkalejaiye/"><img src={LinkedIn} alt="linkedIn Account" className="linkedIn" /></a>
                        <a href="https://twitter.com/Mubarak_MKay"><img src={Twitter} alt="Twitter Account" className="twitter" /></a>
                        <span>- Mubaraq</span>
                    </div>
                </div>
                <div>
                    <div className="contacts">
                        <a href="mailto:mubaraqkalejaiye@gmail.com"><img src={Mail} alt="Mail" /></a>
                        <div className="contactsDetails">
                            <span>mubaraqkalejaiye.gmail.com</span>
                            <span>Send a message Anytime!</span>
                        </div>
                    </div>
                    <div className="contacts">
                        <a href="tel:+2348119998150"><img src={Phone} alt="Phone" /></a>
                        <div className="contactsDetails">
                            <span>+234-8119-998150</span>
                            <span>Call Anytime!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactMessage">
                <div>
                    <div className='contactMessageText'>
                        <h2>Need a service?</h2>
                        <h3>Send a message</h3>
                    </div>
                    <div className="contactMessageInputs">
                        <input type="text" name="fullName" id="" placeholder='Enter fullname'/>
                        <input type="email" name="email" id="" placeholder='Enter email address'/>
                        <input type="text" name="message" id="" placeholder='Write a message'/>
                    </div>
                    <input type="button" value="Send Message" className="contactMessageButton"/>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;