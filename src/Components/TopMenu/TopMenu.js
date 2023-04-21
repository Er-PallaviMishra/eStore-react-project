import React from "react";
import "./_topmenu.scss";

const menu = ['Home', 'Women', 'Men', 'Kids', 'Best seller'];
const TopMenu = () => {
    return (
        <>
            <header className="menuHeader">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <nav className="menu">
                                <ul>
                                    {menu.map((item, index) => (
                                        <p key={index}>
                                            <a href="/">{item}</a>
                                        </p>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default TopMenu;