import './Footer.css'
import youtube_icon from "../../assets/youtube_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"

export function Footer()
{
    return( <>
     
       
      <div className="Footer">
        <div className="footer-img">
        <img src={youtube_icon} alt="youtube"></img>
        <img src={twitter_icon} alt="youtube"></img>
        <img src={facebook_icon} alt="youtube"></img>
        <img src={instagram_icon} alt="youtube"></img>
        </div>
        <ul className="footer-content">
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>

        </ul>
        <p>1997-2000 Netfilx, Inc.</p>
      </div>
    </>)
}