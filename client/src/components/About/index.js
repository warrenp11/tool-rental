import React from "react";

function About() {
  return (
    <div>
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="assets\about_ph.jpg" alt="About Placeholder"></img>
                    </div>
                    <div className="col-md-6">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Id diam vel quam elementum pulvinar. Mauris pharetra et ultrices neque ornare. Varius duis at consectetur lorem donec. Tristique magna sit amet purus gravida quis. Nec ullamcorper sit amet risus nullam eget felis eget. Volutpat odio facilisis mauris sit amet. Aenean et tortor at risus viverra adipiscing at in tellus. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Pellentesque sit amet porttitor eget dolor. Leo urna molestie at elementum eu facilisis sed. Lobortis scelerisque fermentum dui faucibus in. Mattis enim ut tellus elementum sagittis. In pellentesque massa placerat duis.</p>
                        <button className="btn btn-outline-primary ms-3 px-4 rounded-pill" href="/contact">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;
