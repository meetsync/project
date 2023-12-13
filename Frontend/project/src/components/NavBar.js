import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../style/Main.css";

function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <header>
        <h3> MeetSync Simplify Scheduling </h3>
        <nav ref = {navRef}>
            <a href = "/#"> Create An Event Name </a>
            <a href = "/#"> Choose Date & Time </a>
            <a href = "/#"> Set Your Availability </a>
            <a href = "/#"> Sharing the Meeting </a>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
            </button>
        </nav>
        <button className = "nav-btn" onClick={showNavBar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default NavBar


//<Route path="/datetime-picker" element={<StaticDateTimePickerLandscape />} />