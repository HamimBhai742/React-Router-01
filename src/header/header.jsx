import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="flex gap-7 bg-purple-600 p-3 text-white text-xl">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/review">Review</Link>
                <Link to="/users">Users</Link>
                <Link to="/comments">Posts</Link>
                <Link to='/fake'>Fake</Link>
            </div>
            <div id="detail">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Header;