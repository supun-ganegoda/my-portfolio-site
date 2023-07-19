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
          <img
            src={process.env.PUBLIC_URL + "/img/project1.png"}
            alt="entry-marks portal"
          ></img>
          <div className="layer">
            <h4>Entry Marks Calculation Portal</h4>
            <p>
              This is a website designed for calculate the government schools'
              grade 1 entry marks. Also the web site capable of document
              verification. The project is currently under development. I'm
              contributing to this project as the front-end developer.
            </p>
            <a
              href="https://entry-marks-portal.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <img
            src={process.env.PUBLIC_URL + "/img/project2.png"}
            alt="curio"
          ></img>
          <div className="layer">
            <h4>Curio</h4>
            <p>
              Curio, a full-stack app for expressing and voting on users'
              thoughts and ideas across diverse areas. Experience the
              React-powered frontend and backend hosted on Supabase, a powerful
              online database.
            </p>
            <a
              href="https://curio-beta.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <img
            src={process.env.PUBLIC_URL + "/img/project3.png"}
            alt="car-rent shop management system"
          ></img>
          <div className="layer">
            <h4>Car Rent Shop</h4>
            <p>
              The highlight of this project lies in the seamless integration of
              a MySQL backend database through a custom API end-point built with
              ASP.NET. Coupled with an interactive React front-end.
            </p>
            <a
              href="https://github.com/supun-ganegoda/car_rent_shop"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <img
            src={process.env.PUBLIC_URL + "/img/project4.png"}
            alt="hospital management system"
          ></img>
          <div className="layer">
            <h4>Hospital Management System</h4>
            <p>
              This desktop application meticulously crafted in C++, leveraging
              the powerful WindowsForms GUI framework. All data structures
              (Queues, Stacks, Maps) and algorithms are implemented from
              scratch, without relying on built-in libraries.
            </p>
            <a
              href="https://github.com/supun-ganegoda/car_rent_shop"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <img
            src={process.env.PUBLIC_URL + "/img/project5.png"}
            alt="arduino exploration rover"
          ></img>
          <div className="layer">
            <h4>Arduino Exploration Rover</h4>
            <p>
              This project is based on an ATmega328p microcontroller. I
              contributed to this project as team lead and low level hardware
              programme
            </p>
            <a
              href="https://www.linkedin.com/posts/supun-ganegoda_arduino-rover-gesture-activity-7060327977896574976-tNVF?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortPolio;
