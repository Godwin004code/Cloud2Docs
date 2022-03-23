import { Link } from "react-router-dom";
import { FaCaretDown, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = ({ shownav, setShownav }) => {
  const removeNav = () => {
    setShownav(false);
  };
  return (
    <>
      <motion.nav animate={{ opacity: [0, 1] }}>
        <ul>
          <li style={{paddingBlockStart: '1.5rem'}}>
Logo
            <motion.span
            whileTap={{rotate: 360}}>
              <FaTimes className="times" onClick={removeNav} />
            </motion.span>
          </li>
          <li onClick={removeNav}>
            <Link to="/">Introduction</Link>
          </li>

          <li onClick={removeNav}>
            <Link to="/category">
              Categories
            </Link>
           
          </li>
          <li onClick={removeNav}>
           <Link to="/howto"> <span>How To</span></Link>
          </li>
          <li>
            <span>
              Interview Questions <FaCaretDown />{" "}
            </span>
            <div className="submenu">
              <ul>
                <li onClick={removeNav} style={{paddingBlockStart: '1.5rem'}}>
                  <Link to="/jsq">JavaScript</Link>
                </li>
                <li onClick={removeNav}>
                  <Link to="/reactq">React</Link>
                </li>
                <li onClick={removeNav}>
                  <Link to="/pyq">Python</Link>
                </li>
              </ul>
            </div>
          </li>
          
        </ul>
      </motion.nav>
    </>
  );
};


export default Navbar;
