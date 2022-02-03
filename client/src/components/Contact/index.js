import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <p>Have Some Questions For Us?</p>
              <p>
               Looking to rent a tool or have a question about what tool is right fot the job? Feel free to react out to us with any questions or concerns. 
              </p>
            </div>
            <div className="col-md-6">
              <form action="">
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="John Smith"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email  "
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
