


const NavBar = ({m}) => {

    return (
        <nav className={`flex justify-around list-none w-1/3 text-lg font-bold ${m}`} >
            <li><a href="#">Shoes</a></li>
            <span>/</span>
            <li><a href="#">Clothing</a></li>
            <span>/</span>
            <li><a href="#">Accessories</a></li>
        </nav>


    );

};


export default NavBar;