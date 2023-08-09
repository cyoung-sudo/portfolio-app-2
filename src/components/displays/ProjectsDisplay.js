import "./ProjectsDisplay.scss";
// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// Bootstrap Routing
import { LinkContainer } from "react-router-bootstrap";

const ProjectsDisplay = ({ projects }) => {
  return (
    <div id="projectsDisplay">
      {projects.map((project, idx) => (
        <Card className="projectsDisplay-project" key={ idx }>
          <Card.Img variant="top" src={ project.images[0] } />
          <Card.Body>
            <Card.Title>{ project.name }</Card.Title>
            <Card.Text>{ project.about }</Card.Text>
            <LinkContainer to={ `/projects/${ idx }` }>
              <Button variant="primary">View</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProjectsDisplay;