import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-text">
        <h2>
          Contact <span>me</span>
        </h2>
        <h4>Find me through social media</h4>
        <div className="list">
          <li>
            <a href="#tele">+94 71 130 8186</a>
          </li>
          <li>
            <a href="#email">supunsudeepa@gmail.com</a>
          </li>
        </div>

        <div className="contact-icons">
          <a href="#facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#linkdin">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#instgram">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form action="submit">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="number" placeholder="Your phone no" required />
          <textarea cols={35} rows={10} placeholder="Your message" required />
          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
};
export default Contact;
