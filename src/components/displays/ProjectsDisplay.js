import "./ProjectsDisplay.scss";
// Icons
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
// Bootstrap Routing
import { LinkContainer } from "react-router-bootstrap";

const ProjectsDisplay = ({ projects }) => {
  return (
    <div id="projectsDisplay">
      {projects.map((project, idx) => (
        <Card className="projectsDisplay-project" key={ idx }>
          <Card.Img variant="top" src={ project.images[0] } />
          <Card.Body>
            <Card.Title>
              <div className="projectsDisplay-project-name">{ project.name }</div>
              <div className="projectsDisplay-project-deployment">
                {project.deployed &&
                  <Badge bg="success">Deployed<span><AiFillCheckCircle/></span></Badge>
                }
                {!project.deployed &&
                  <Badge bg="danger"> Not Deployed<span><AiFillCloseCircle/></span></Badge>
                }
              </div>
            </Card.Title>

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