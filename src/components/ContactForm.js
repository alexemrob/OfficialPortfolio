import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-start">
                <div className="text-white ">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Your Name:</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="First Last"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email Address:</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <a className="submit-button nav-link d-flex justify-content-center cursor-pointer hover:bg-indigo-300" href="mailto:alexemrob@gmail.com" role="button">SEND</a>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;