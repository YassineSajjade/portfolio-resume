import React, { Component } from 'react';
import './Mobile_menu.css';

class Mobile_menu extends Component {
   
    
    constructor(props){
        super(props);
       
        this.state = {
            active:false
        };
    }
    
    handleActive = () =>{
        this.setState({
            active: !this.state.active
        })
    }

    
    

    render() {
        if(this.props.active){
            this.setState({
                active:true
            })
        }else{
            this.setState({
                active:false
            })
        }

        
        return (
            <div className={this.state.active ? "mobile-menu d-lg-none active" : "mobile-menu d-lg-none"}>
                <div className="container">
                    <div className="mobile-menu__close" onClick={this.handleActive}>
                        <span>
                            <i className="fas fa-times"></i>
                        </span>
                    </div>
                    <nav className="mobile-menu__wrapper" >
                        <ul className="">
                            <li className="">
                                <a className="" href="#">Aboute</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Resume</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Mobile_menu;