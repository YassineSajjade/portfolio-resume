import React, { Component } from 'react';
import logoMobApp from '../images/logo2.png';
import logoWeatherApp from '../images/weather-icon.png';
import imgCovid19 from '../images/covid-19.PNG';
import imgGrocStore from "../images/groc-store.PNG";
import video from '../videos/boune-app1.mp4';
import video2 from '../videos/weatherapp_complet.mp4';
import './Myprojects.css';

class Myprojects extends Component {

    constructor(props){
        super(props);

        this.btnClose =  React.createRef();
        this.btnClose2 =  React.createRef();

        this.state = {
            display: false,
            display2: false
        };
    }

    // ***** Open & Close for Coupon management APP *****
    closeVideo = () =>{
        this.setState({
            display: false
        });
        this.btnClose.current.pause();
    }
    openVideo = () =>{
        this.setState({
            display: true
        })
    }

    // ***** Open & Close for Weather APP *****
    closeVideo2 = () =>{
        this.setState({
            display2: false
        });
        this.btnClose2.current.pause();
    }
    openVideo2 = () =>{
        this.setState({
            display2: true
        })
    }

    render() {

        const demo = this.state.display ? 
            <div className="frame_video" style={{display:'block', overflow: 'auto'}}>
                <div className="container" style={{width:"80%",background:"#0E3994",marginTop:"10%"}}>
                    <div className="row close_video">
                        <span onClick={this.closeVideo}>
                            <i className="fas fa-times"></i>
                        </span>
                    </div>
                    <div className="row video">
                        <video style={{height:"30rem"}} ref={this.btnClose} controls>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                    
                </div>
            </div> :
            <div className="frame_video" style={{display:'none'}}>
            <div className="container" style={{width:"80%",background:"#0E3994",marginTop:"10%"}}>
                <div className="row close_video">
                    <span onClick={this.closeVideo}>
                        <i className="fas fa-times"></i>
                    </span>
                </div>
                <div className="row video">
                    <video style={{height:"30rem"}} ref={this.btnClose} controls>
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
            
            </div>
        </div>

        const demo2 = this.state.display2 ? 
            <div className="frame_video" style={{display:'block', overflow: 'auto'}}>
                <div className="container" style={{width:"80%",background:"#0E3994",marginTop:"10%"}}>
                    <div className="row close_video">
                        <span onClick={this.closeVideo2}>
                            <i className="fas fa-times"></i>
                        </span>
                    </div>
                    <div className="row video">
                        <video style={{height:"30rem"}} ref={this.btnClose2} controls>
                            <source src={video2} type="video/mp4"/>
                        </video>
                    </div>
                    
                </div>
            </div> :
            <div className="frame_video" style={{display:'none'}}>
            <div className="container" style={{width:"80%",background:"#0E3994",marginTop:"10%"}}>
                <div className="row close_video">
                    <span onClick={this.closeVideo2}>
                        <i className="fas fa-times"></i>
                    </span>
                </div>
                <div className="row video">
                    <video style={{height:"30rem"}} ref={this.btnClose2} controls>
                        <source src={video2} type="video/mp4"/>
                    </video>
                </div>
            
            </div>
        </div>

        return (
            <section className="section_myprojects container" id="myprojects">
                {demo}
                {demo2}
                <h2 className="section_title" data-aos="fade-right">My projects_</h2>

                <div className="card mb-3" data-aos="fade-right">
                    <div className="row no-gutters" >
                        <div className="col-md-5 colImg" >
                            <img className="imgCovid19 hvr-bounce-in" src={imgCovid19} alt=""/>
                        </div>
                        <div className="col-md-7 colDesc">
                            <div className="card-body">
                                <h5 className="card-title">WEB SITE FOR COVID-19</h5>
                                <p className="card-text">web site full responsive for COVID-19 CORONAVIRUS PANDEMIC STATISTICS</p>
                                <p className="card-text-link"><a className="text-muted" href="https://covid19-pandemic-statistics.netlify.app">https://covid19-pandemic-statistics.netlify.app/</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" data-aos="fade-right">
                    <div className="row no-gutters">
                        <div className="col-md-5 colImg" >
                            <img className="logoMobApp hvr-bounce-in" src={logoMobApp} alt=""/>
                        </div>
                        <div className="col-md-7 colDesc">
                            <div className="card-body">
                                <h5 className="card-title">ANDROID APP FOR COUPON MANAGEMENT</h5>
                                <p className="card-text">A mobile application(android) to take advantage of available offers and manage coupons(vouchers)</p>
                                <p className="card-text-link"><small className="text-muted" onClick={this.openVideo}>watch demo of the APP</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" data-aos="fade-right">
                    <div className="row no-gutters">
                        <div className="col-md-5 colImg" >
                            <img className="logoMobApp hvr-bounce-in" src={imgGrocStore} alt=""/>
                        </div>
                        <div className="col-md-7 colDesc">
                            <div className="card-body">
                                <h5 className="card-title">WEB SITE FOR A FOOD STORE</h5>
                                <p className="card-text">web site full responsive for a store of foods</p>
                                <p className="card-text-link"><a className="text-muted" href="https://groc-store.netlify.app">https://groc-store.netlify.app</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" data-aos="fade-right">
                    <div className="row no-gutters">
                        <div className="col-md-5 colImg" >
                            <img className="logoMobApp hvr-bounce-in" src={logoWeatherApp} alt=""/>
                        </div>
                        <div className="col-md-7 colDesc">
                            <div className="card-body">
                                <h5 className="card-title">(Android & IOS) APP FOR WEATHER CONDITION</h5>
                                <p className="card-text">A mobile hybrid application(Android & IOS) gives you the real time weather condition and forecast </p>
                                <p className="card-text-link"><small className="text-muted" onClick={this.openVideo2}>watch demo of the APP</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

        )
    }
}
export default Myprojects;