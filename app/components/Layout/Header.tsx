import { MdLogout } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const Header = () => {
    return (
        <header className="bg-p-white text-white p-4 shadow-md sticky top-0 z-[2]">
            <div className="max-w-7xl mx-auto flex justify-between items-center font-poppins">
                <img src="https://almonds.vouch.club/images/almond-logo.png" className="h-12" alt="Almonds Logo" />
                <nav>
                    <ul className="flex space-x-4 items-center">
                        <li><a href="/" className="text-gray-500 text-xl hover:text-black"><MdOutlinePhone /></a></li>
                        <li><a href="/" className="text-gray-500 text-xl hover:text-black"><MdLogout /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
