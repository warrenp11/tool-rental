import React from "react";
import image from '../../assets/tool-about.png';

function About() {
  return (
    <div>
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={image} alt="About-tool"></img>
                    </div>
                    <div className="col-md-6">
                        <h3>About Us</h3>
                        <p>There is always the right tool for the job and that begins with us. At rent-a-tool we are here to lend out tools so you won’t have pay those outrages price to buy them and only use them once. We are here to help with any small or big job you may have.</p>
                        <button className="btn btn-outline-primary ms-3 px-4 rounded-pill" href="/contact">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;
