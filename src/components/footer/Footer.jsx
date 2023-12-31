// import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-medai-text">Follow us on social media</div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
          <SiInstagram color="#c0392b"/>
          </div>
          <div className="footer-social-media-icon">
          <FaTelegramPlane color="blue"/>
          </div>
          <div className="footer-social-media-icon">
          <FaFacebook color="#2980b9"/>
          </div>
          <div className="footer-social-media-icon">
          <IoLogoYoutube color="red"/>
          </div>
          {/* <div className="footer-social-media-icon">
          <BsTwitter color="skyblue"/>
          </div> */}
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authors</li>
            <li className="footer-link">Blog</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Iraq - Baghdad - Alrashid St
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              123-456-789
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              info@fakeemail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis aperiam fugiat ullam distinctio iusto sunt, numquam,
            quis reiciendis pariatur error itaque? Voluptatem libero maiores
            eveniet fugiat provident architecto minima pariatur! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquam perferendis
            nemo hic laborum aspernatur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
