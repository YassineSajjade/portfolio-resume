import React, { Component } from 'react';
import './Navbar.css';
import './Mobile_menu.css';
class Navbar extends Component {

    constructor(props){
        super(props);

        this.state= {
            active:false,
            nav:false,
            aboutLink:false,
            resumeLink:false,
            contactLink:false,
            myProjectsLink:false,
        }
    }

    handleActive = () =>{
        this.setState({
            active: !this.state.active
        })
    }

    handleAbout = () =>{
        this.setState({
            aboutLink: true,
            resumeLink: false,
            contactLink: false,
            myProjectsLink: false
        })
    }
    handleResume = () =>{
        this.setState({
            aboutLink: false,
            resumeLink: true,
            contactLink: false,
            myProjectsLink: false
        })
    }
    handleContact = () =>{
        this.setState({
            aboutLink: false,
            resumeLink: false,
            contactLink: true,
            myProjectsLink: false
        })
    }
    handleMyProjects = () =>{
        this.setState({
            aboutLink: false,
            resumeLink: false,
            contactLink: false,
            myProjectsLink: true
        })
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
      componentWillUnmount() {
         window.removeEventListener('scroll', this.handleScroll);
       }

    handleScroll = () =>{
        const offset = window.scrollY;
        if(offset > 70){
            this.setState({
                nav:true
            })
        }else{
            this.setState({
                nav:false
            })
        }
    }

    render() {
        // console.log(window.scrollY);
        return (
            <>
            
                <div className={ this.state.nav ? "menu menu--active" : "menu" }>
                    <div className="container">
                                
                                <div className="row" style={{width:"100%"}}>
                                    <div className="menu__wrapper d-none d-lg-block col-md-12" style={{width:"100%"}}>
                                    {/* navbar navbar-expand-lg navbar-dark */}
                                        <nav className="">
                                            <ul className="">
                                                <li className="">
                                                    <a className={ this.state.aboutLink ? "link_active" : "null" } href="#about" onClick={this.handleAbout}>About</a>
                                                </li>
                                                <li className="">
                                                    <a className={ this.state.resumeLink ? "link_active" : "null" } href="#resume" onClick={this.handleResume} >Resume</a>
                                                </li>
                                                <li className="">
                                                    <a className={ this.state.myProjectsLink ? "link_active" : "null" } href="#myprojects" onClick={this.handleMyProjects} >My projects</a>
                                                </li>
                                                <li className="">
                                                    <a className={ this.state.contactLink ? "link_active" : "null" } href="#contact" onClick={this.handleContact} >Contact</a>
                                                </li>
                                                
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="menu__wrapper col-md-12 d-lg-none" style={{marginTop:"20px"}}>
                                        <button className="menu__mobile-button" type="button" onClick={this.handleActive}>
                                            {/* <span className="navbar-toggler-icon"></span> */}
                                            <span><i className="fas fa-bars" aria-hidden="true" ></i></span>
                                        </button>
                                    </div>
                                </div>
                    </div>
                </div>
                {/* Mobile Menu */}
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
                                <a className="" href="#about" onClick={this.handleActive}>About</a>
                            </li>
                            <li className="">
                                <a className="" href="#resume" onClick={this.handleActive}>Resume</a>
                            </li>
                            <li className="">
                                <a className="" href="#myprojects" onClick={this.handleActive}>My Projects</a>
                            </li>
                            <li className="">
                                <a className="" href="#contact" onClick={this.handleActive}>Contact</a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
            </>
        )
    }
}
export default Navbar;