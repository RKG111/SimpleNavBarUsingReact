import React from "react";

const Navbar = () => {

    return (
        <nav className="NavbarItems">
            <ul className="menu">
                <li><a className="button" href="#">Home</a></li>

                <div class="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <ul>

                            <li><a href="#">Item 1</a></li>
                            <li><a href="#">Item 2</a></li>
                                <li className="dropdown-2">

                                <a className="dropbtn-2" href="#">Item 3`{'>'}` </a>
                                
                                    
                                    <div class="dropdown-content-2">
                                        <ul>

                                            <li><a href="#">SubItem 1</a></li>
                                            <li><a href="#">SubItem 2</a></li>
                                            <li><a href="#">SubItem 3</a>

                                            </li>
                                        </ul>
                                    </div>
                                
                            
                                </li>
                        </ul>
                    </div>
                </div>

                <li><a className="button" href="#">Contact</a></li>
                <li><a className="button" href="#">About</a></li>
            </ul>
        </nav>
    );


}

export default Navbar;