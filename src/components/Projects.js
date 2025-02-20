import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import google  from "../assets/img/google.jpg";
import eCom from "../assets/img/eCom.jpg";
import portfolio from "../assets/img/portfolio.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chat-Ai",
      description: "Google Gemini Clone",
      imgUrl: google,
      githubUrl: "https://github.com/jaykamde/chatt_Ai",
    },
    {
      title: "E-Commerce",
      description: "Shopping Website",
      imgUrl: eCom,
      githubUrl: "https://github.com/jaykamde/E-commerce",
    },
    {
      title: "Portfolio",
      description: "Personal Portfolio",
      imgUrl: portfolio,
      githubUrl: "https://github.com/yourusername/portfolio",
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are mine some Latest Project I have Build.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                    <Tab.Pane eventKey="second">
  <div style={{ padding: "20px" }}>
    <h2 style={{ fontWeight: "bold", textAlign: "center" }}>Roles & Responsibilities</h2>

    {/* Tantra Fiesta - PR Club Member */}
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ fontWeight: "bold", color: "#007bff" }}>PR Club Member - Tantra Fiesta</h3>
      <ul>
        <li>Managed public relations and communication for college fest.</li>
        <li>Engaged with sponsors and external organizations to promote events.</li>
        <li>Organized campaigns to increase event participation and outreach.</li>
      </ul>
    </div>

    {/* Abhivaykte - SRC Member */}
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ fontWeight: "bold", color: "#28a745" }}>SRC Member - Abhivaykte</h3>
      <ul>
        <li>Actively participated in student representation and decision-making.</li>
        <li>Coordinated various cultural and academic activities within the college.</li>
        <li>Worked towards improving student engagement and campus experience.</li>
      </ul>
    </div>

    {/* Business Analytics Internship */}
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ fontWeight: "bold", color: "#ff5733" }}>Business Analytics Internship</h3>
      <ul>
        <li>Worked on data-driven insights and business intelligence solutions.</li>
        <li>Analyzed datasets to identify trends and make strategic recommendations.</li>
        <li>Utilized tools like Excel, Power BI, and SQL for data visualization.</li>
      </ul>
    </div>

    {/* AWS Cloud Internship (Course + Internship) */}
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ fontWeight: "bold", color: "#f39c12" }}>AWS Cloud Internship (Course + Internship)</h3>
      <ul>
        <li>Completed hands-on training in AWS cloud computing services.</li>
        <li>Deployed and managed cloud infrastructure using AWS tools.</li>
        <li>Gained practical experience in cloud security, networking, and storage.</li>
      </ul>
    </div>
  </div>
</Tab.Pane>



<Tab.Pane eventKey="third">
  <div style={{ textAlign: "center", padding: "20px" }}>
    {/* Professional Heading */}
    <h2 style={{ color: "white", marginBottom: "10px" }}>My Resume</h2>
    
    {/* Short Description */}
    <p style={{ color: "white", fontSize: "16px", maxWidth: "600px", margin: "0 auto 20px" }}>
      Here is my professional resume, showcasing my skills, experience, and projects.  
      Click the button below to view my resume in detail.
    </p>

    {/* Centered Button */}
    <button
      onClick={() => window.open("https://drive.google.com/file/d/1BWqwzbP0AIcxMmFMlB33t_A1d6vE0PUp/view", "_blank")}
      style={{
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
      onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
    >
      See My Resume
    </button>
  </div>
</Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
