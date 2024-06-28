import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> Ja-Zhua Cheng</h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/experience"> Experience </Link>
                <Link to="/hobbies"> Hobbies</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;