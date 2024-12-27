import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer footer-center bg-red-100  text-gray-700 rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link to='/' className="link link-hover">About us</Link>
          <Link to='/' className="link link-hover">Contact</Link>
          <Link to='/' className="link link-hover">Jobs</Link>
          <Link to='/' className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-8">
            <Link to='https://x.com/home'><FaTwitter className="text-2xl" /></Link>
            <Link to='https://www.facebook.com/'><FaFacebookSquare  className="text-2xl"/></Link>
            <Link to='https://www.youtube.com/'><FaYoutube  className="text-2xl"/></Link>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by PLATESHARE Org.</p>
        </aside>
      </footer>
    );
};

export default Footer;