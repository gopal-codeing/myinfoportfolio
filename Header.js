// import './Header.css'
import '../Portflio/Header.css';

import { Link } from "react-router-dom";
const Header = () => {
    const url = "https://as2.ftcdn.net/v2/jpg/05/20/38/59/1000_F_520385947_a4B3J7lVWMTin4stqz6ItXBI8n2NdFps.jpg";
    return (<>
        <div class="navbar">
            {/* <img src={url} alt="Logo" /> */}
            <a class="navbar-brand" href="#">Ram</a>
            <Link to="/">Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/skill"> Skill</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
        </div>

    </>);
}

export default Header;