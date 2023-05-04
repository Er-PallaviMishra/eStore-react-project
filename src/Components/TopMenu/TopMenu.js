import React from "react";
import "./_topmenu.scss";
import { connect } from "react-redux";
import {getTopMenu} from "../../redux/actions/topMenu";
const TopMenu = (props) => {
    return (
        <>
            <header className="menuHeader">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <nav className="menu">
                                <ul>
                                    {props.state.topMenu.map((item, index) => (
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
const mapStateToprops=(state)=>{
    return {state};
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getMenu:dispatch(getTopMenu())
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(TopMenu);