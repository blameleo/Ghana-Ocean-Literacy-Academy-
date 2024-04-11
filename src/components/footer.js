// Footer.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="footer-container flex flex-col justify-center items-center">
        {/* Social Media Icons */}
        <div className="flex gap-2 justify-center">
          <a
            href="https://www.instagram.com/folaghana/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://twitter.com/folaghana"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/company/folaghana/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCsxCJFI4NpXDA886c0mm4Dg"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          
          <a
            href="mailto:info@folagh.org"
            className="mx-1"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
        <div className="copyright-text text-center mt-4 text-sm">
          © 2024 FOLA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
