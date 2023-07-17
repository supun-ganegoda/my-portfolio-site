import "./Portfolio.css";

const PortPolio = () => {
  return (
    <div className="portfolio" id="portpolio">
      <div className="main-text">
        <h3>
          Latest<span> Projects</span>
        </h3>
      </div>

      <div className="portfolio-content">
        <div className="row">
          <img src="project1.jpg" alt="project 1"></img>
          <div className="layer">
            <h4>Entry Marks Calculation Portal</h4>
            <p>
              This is a website for calculate the government's schools' grade 1
              entry marks{" "}
            </p>
            <a href="#blank" target="_blank">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <img src="project1.jpg" alt="project 1"></img>
          <div className="layer">
            <h4>Point of Sales System</h4>
            <p>
              This is a website for calculate the government's schools' grade 1
              entry marks{" "}
            </p>
            <a href="#blank" target="_blank">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <img src="project1.jpg" alt="project 1"></img>
          <div className="layer">
            <h4>Curio an Full-stack App</h4>
            <p>
              This is a website for calculate the government's schools' grade 1
              entry marks{" "}
            </p>
            <a href="#blank" target="_blank">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortPolio;
