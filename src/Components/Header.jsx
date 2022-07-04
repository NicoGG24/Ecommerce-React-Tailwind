import NavBar from "./NavBar";
import Logo from "./Logo";
import CartWidget from "./CartWidget"

const Header = () => {

    return(
        <header className="flex flex-col gap-10">
            <div className="flex items-center justify-between mt-12 ml-32 mr-32">
                <Logo />
                <NavBar m="mr-64" />
                <CartWidget />
            </div>
            <div className=" flex justify-center bg-black">
                <span className="text-white text-xs">FREE SHIPPING & RETURNS! <strong>DETAILS</strong></span>
            </div>

        </header>
    );


};



export default Header;