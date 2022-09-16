import '../Styles/Details.css'
import LinkedIn from '../Images/LinkedIn.png'
import Twitter from '../Images/Twitter.png'

const Details = () => {
    return ( 
        <div className="details">
            <div className="detailsProper">
                <h1>About Me</h1>
                <span>Mubaraq kalejaiye is a dedicated and focused Frontend Web Developer who aims to become better in all aspects on his journey to becoming a Fullstack Developer.</span>
                <div className="detailsLinks">
                    <a href="https://www.linkedin.com/in/mubaraqkalejaiye/"><img src={LinkedIn} alt="linkedIn Account" className="linkedIn" /></a>
                    <a href="https://twitter.com/Mubarak_MKay"><img src={Twitter} alt="Twitter Account" className="twitter" /></a>
                </div>
            </div>
        </div>
     );
}
 
export default Details;