import "./footer.css";
import { ReactComponent as Signal } from '../../assets/icons/signal-solid.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook-circle-fill.svg';
import { ReactComponent as Github } from '../../assets/icons/github-fill.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter-fill.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube-fill.svg';
import { ReactComponent as AtLine } from '../../assets/icons/at-line.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin-box-fill.svg';

const Footer = () => {
  return (
    <div className="footer">

        <div className="nav__logo">
            <Signal/>
            <h3>Starter</h3>
          </div>

        <div>
            <ul className="footer-menu">
                <li>Home</li>
                <li>About</li>
                <li>Docs</li>
                <li>Github</li>
            </ul>
        </div>

        <div className="footer-icons">
            <Github className="icon"/>
            <Facebook className="icon"/>
            <Twitter className="icon"/>
            <Youtube className="icon"/>
            <Linkedin className="icon"/>
            <AtLine className="icon"/>

        </div>

        <p className="footer-copyright">
        &copy; Copyright 2023 this land pge task by <span style={{color:"var(--maincolor)"}}>Omar Rayes</span>
        </p>
    
    </div>
  )
}

export default Footer
