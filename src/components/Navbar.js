import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component{
    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                {/* <div className="menu-icons">
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-times"></i>
                </div> */}
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}>                      
                    </i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {/* <ul className="nav-menu active"> */}
                    {/* <li>
                    <a><i className="fa-solid fa-house-user">Home</i></a>
                    </li>  */}
                    {MenuItems.map((item, index) => {
                        return (
                            // <li key={index}>
                            //     <a className={item.cName} href="/">
                            //         <i className={item.icon}></i>
                            //         {item.title}
                            //     </a>
                            // </li>
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                        {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;