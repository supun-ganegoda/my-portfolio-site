import "./Interests.css";

const Interests = () => {
  return (
    <div className="interests" id="interests">
      <div className="main-text">
        <h3>
          <span>My</span> Interests
        </h3>
      </div>
      <div className="interest-content">
        <div className="box">
          <div className="s-icons">
            <i className="bx bx-code-alt"></i>
          </div>
          <h3>Web Design</h3>
          <p>Web Design with most popular frameworks</p>
          <a href="#readmore" className="btn">
            Read more
          </a>
        </div>

        <div className="box">
          <div className="s-icons">
            <i className="bx bxl-java"></i>
          </div>
          <h3>Java Development</h3>
          <p>Web Design with most popular frameworks</p>
          <a href="#readmore" className="btn">
            Read more
          </a>
        </div>

        <div className="box">
          <div className="s-icons">
            <i className="bx bx-mobile-alt"></i>
          </div>
          <h3>Mobile Development</h3>
          <p>Web Design with most popular frameworks</p>
          <a href="#readmore" className="btn">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default Interests;
