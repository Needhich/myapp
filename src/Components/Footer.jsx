import  './Footer.css';
import chef from '../Assets/chef.png';
import instagram from '../Assets/instagram.png';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
import linkdin from '../Assets/linkedin.png';
import git from '../Assets/github.png';
function Footer(){
    return(
        <div>
        <div className="footertopsec">
        <div className="chefsec">
            <img src={chef} alt="chef" />
            <p className="cheftext">Bentilzone</p>
        </div>
        </div>
        <div className="footerbottomsec">
            <div className="copyrighttext">© 2023 Bentilzone™. All Rights Reserved.</div>
            <div className="socialicons">
                <img src={instagram} alt="instagram" />
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={linkdin} alt="linkdin" />
                <img src={git} alt="git" />
            </div>
        </div>
        </div>
    )
}
export default Footer;