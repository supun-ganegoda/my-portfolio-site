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
          <p>HTML5, CSS3, JavaScript, React, Node, Express, ASP.NET</p>
          <a href="#readmore" className="btn">
            Read more
          </a>
        </div>

        <div className="box">
          <div className="s-icons">
            <i className="bx bxl-java"></i>
          </div>
          <h3>Java Development</h3>
          <p>JavaFx, Hibernate, Spring, Android</p>
          <a href="#readmore" className="btn">
            Read more
          </a>
        </div>

        <div className="box">
          <div className="s-icons">
            <i className="bx bx-desktop"></i>
          </div>
          <h3>Desktop Applications</h3>
          <p>C#, .NET, WPF</p>
          <a href="#readmore" className="btn">
            Read more
          </a>
        </div>

        <div className="box">
          <div className="s-icons">
            <i class="bx bxs-invader"></i>
          </div>
          <h3>Hardware Programming</h3>
          <p>C, C++, Arduino</p>
          <a href="#readmore" className="btn">
            Read more
          </a>
        </div>

        <div className="box">
          <div className="s-icons">
            <i class="bx bxs-virus"></i>
          </div>
          <h3>Ethical Hacking</h3>
          <p>Metasploit, beef, Nmap, Kismet</p>
          <a href="#readmore" className="btn">
            Read more
          </a>
        </div>

        <div className="box">
          <div className="s-icons">
            <i class="bx bxl-figma"></i>
          </div>
          <h3>UI/UX Design</h3>
          <p>Figma, Adobe XD</p>
          <a href="#readmore" className="btn">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default Interests;
