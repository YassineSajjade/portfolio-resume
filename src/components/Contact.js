import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

class Contact extends Component {

    sendEmail= (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4u3xu66', 'template_2e2rf5q', e.target, 'user_53jsRktFU77cOjJD0Huyv')
          .then((result) => {
                  alert("Your message send with success !!");
                  console.log(result.text);
          }, (error) => {
              console.log(error.text);
              alert(error.text)
          });

          e.target.reset();
      }

    render() {
        return (
            <div className="contact_background" id="contact">
                <div  className="container contact_section">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="contact_title" data-aos="fade-right" >Get in touch_</p>
                        </div>
                    </div>
                    <div className="row contacts">
                        <div className="col-md-5 col-lg-4">
                            <div className="contact_list">
                                <dl>
                                    <dt>PHONE:</dt>
                                    <dd>+212 6-7518-1648</dd>
                                    <dt>EMAIL:</dt>
                                    <dd>yassinesajjade@gmail.com</dd>
                                </dl>
                            </div>
                            <div className="contact_social">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com" className="hvr-pulse">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/YassineSajjade" className="hvr-pulse">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/yassine-sajjade-bb493918a/" className="hvr-pulse">Linkedin</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-5">
                            <div className="contact_form">
                                <p className="contact_form_title">Or just write me a letter here</p>
                                <form onSubmit={this.sendEmail}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your name" name="name" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your e-mail" name="email" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" className="form-control" placeholder="Type your message here" name="message" required>
                                        </textarea>
                                    </div>
                                    <button className="btn btn_send" type="submit">send</button>
                                </form>
                                <p className="footer">© 2020 Yassine Sajjade. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;