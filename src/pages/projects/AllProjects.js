import "./AllProjects.scss";
// Components
import ProjectsDisplay from "../../components/displays/ProjectsDisplay";
// Data
import { projects } from "../../data/projectsData";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllProjects = () => {
  return (
    <Container id="allProjects">
      <Row>
        <Col id="allProjects-sec-1">
          <div id="allProjects-header">
            <h1>Projects</h1>
          </div>
        </Col>
      </Row>

      <Row>
        <Col id="allProjects-sec-2">
          <div id="allProjects-list-wrapper">
            <ProjectsDisplay projects={ projects }/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AllProjects;