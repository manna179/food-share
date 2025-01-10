import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer footer-center bg-red-400  text-gray-700 rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link to='/extraSection' className="link link-hover font-semibold">About us</Link>
          <Link to='/faq' className="link link-hover font-semibold">Contact</Link>
          <Link to='/addsFood' className="link link-hover font-semibold">Jobs</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-8">
            <Link to='https://x.com/home'><FaTwitter className="text-5xl" /></Link>
            <Link to='https://www.facebook.com/'><FaFacebookSquare  className="text-5xl"/></Link>
            <Link to='https://www.youtube.com/'><FaYoutube  className="text-5xl"/></Link>
          </div>
        </nav>
        <aside>
          <p className="text-slate-700">Copyright © {new Date().getFullYear()} - All right reserved by PLATESHARE Org.</p>
        </aside>
      </footer>
    );
};

export default Footer;