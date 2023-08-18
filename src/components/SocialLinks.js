import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/geydieDev/">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/kajed.maramba99?mibextid=ZbWKwL">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://instagram.com/jade_lang_naman?igshid=MzRlODBiNWFlZA==">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;