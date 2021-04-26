import React, { Component } from 'react';
import picture from '../images/profile.png';
import './About.css';

class About extends Component {
    render() {
        return (
            <>
            {/* About : 1 */}
                <div className="about" id="about">
                    <div className="container">
                        <div className="row personal-profile">
                            <div className="col-md-4 personal-profile-image">
                                <img src={picture} alt="profile-avatar" />
                            </div>
                            <div className="col-md-8">
                                <p className="personal-profile__name">Yassine Sajjade</p>
                                <p className="personal-profile__work">Mobile & Web developer</p>
                                <div className="personal-profile__contacts">
                                    <div className="contact-list contact-list__opacity-titles">
                                        <dl>
                                            <dt>AGE:</dt>
                                            <dd>21</dd>
                                            <dt>PHONE:</dt>
                                            <dd>+212 6-7518-1648</dd>
                                            <dt>EMAIL:</dt>
                                            <dd>yassinesajjade@gmail.com</dd>
                                            <dt>ADDRESS:</dt>
                                            <dd>Sidi maarouf, CASABLANCA</dd>
                                        </dl>
                                    </div>
                                </div>
                                <p className="personal-profile__social">
                                    <a href="https://github.com/YassineSajjade" className="hvr-pulse"><i className="fab fa-github-square"></i></a>
                                    <a href="https://www.linkedin.com/in/yassine-sajjade-bb493918a/" className="hvr-pulse"><i className="fab fa-linkedin"></i></a>
                                    <a href="https://www.facebook.com" className="hvr-pulse"><i className="fab fa-facebook-square"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* About : 2 */}
                <section className="section_about">
                    <div className="container">
                        <h2 className="section_title " data-aos="fade-right">Hi_</h2>
                        <p>I am Junior Mobile & Web developer able to build applications from the ground up(concept, navigation, layout and programming).
                        Skilled at writing well-designed, testable and efficient code using current best practices.
                        Passionate,fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.
                        </p>
                        
                    </div>
                </section>
                <hr/>
            </>
        )
    }
}
export default About;