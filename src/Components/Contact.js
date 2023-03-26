import React, { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwC0YMIe8yovnT4XR_PHuchYdSaFiUK2s03HBfh6Se9EnSt6KhymnNoG79wvgIeZwSm/exec";
  // const form = document.forms["submit-to-google-sheet"];
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then(() => {
        setMsg("Message sent successfully!");
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        setTimeout(function () {
          setMsg("");
          setName("");
          setMail("");
          setMessage("");
        }, 5000);
      })
      .catch((error) => console.error("Error!", error.message));
  };
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left" data-aos="fade-up">
            <h1 className="sub-title">Contact Me</h1>
            <a
              href="mailto:vefaayazwx@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <p>
                <i className="fas fa-paper-plane"></i>vefaayazwx@gmail.com
              </p>
            </a>
            <a href="tel:905445207381" target={"_blank"} rel="noreferrer">
              <p>
                <i className="fas fa-phone-square-alt"></i>+905445207381
              </p>
            </a>
            <div className="social-icons">
              <a
                href="https://linkedin.com/in/ayazvefa"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/ayazwx"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://twitter.com/ayazwx"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                href="https://instagram.com/_ayazwx"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <a href="assets/cv/Resume - Vefa Ayaz.pdf" download className="btn">
              Download CV
            </a>
          </div>
          <div className="contact-right" data-aos="fade-up">
            <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                name="Email"
                placeholder="Your Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="btn">
                {loading ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>
            <span id="msg">{msg && msg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
