import LogoutBtn from "./LogoutBtn";
import { Link } from "react-router-dom";

const Header = () => {


    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <Link to={'/'} className="text-2xl font-bold">Notes App</Link>
                <div className="flex gap-5">
                <LogoutBtn /> 
                <Link className="bg-green-500 text-white px-6 py-2 rounded-full" to="/login">Login</Link>
                </div>
        </header>
    );
};

export default Header;
