import "./ShowProject.scss";
// React
import { useState, useEffect } from "react";
// Routing
import { useParams } from "react-router-dom";
// Data
import { projects } from "../../data/projectsData";
// Image gallery
import ImageGallery from "react-image-gallery";
// Icons
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from 'react-bootstrap/Badge';

const ShowProject = () => {
  // Formatted data
  const [projectImages, setProjectImages] = useState(null);
  // Hooks
  const { id } = useParams();

  //----- Format project images on load
  useEffect(() => {
    let formattedImages = projects[id].images.map(url => {
      return { original: url };
    });

    setProjectImages(formattedImages);
  }, []);

  if(projectImages) {
    return (
      <Container id="showProject">
        <Row>
          <Col>
            <div id="showProject-header">
                <h1>{ projects[id].name }</h1>
                <div className="showProject-header-deployment">
                  {projects[id].deployed &&
                    <Badge bg="success">Deployed<span><AiFillCheckCircle/></span></Badge>
                  }

                  {!projects[id].deployed &&
                    <Badge bg="danger">Not Deployed<span><AiFillCloseCircle/></span></Badge>
                  }
                </div>
              </div>
            </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={ 12 } lg={ 6 }>
            <div id="showProject-images-wrapper">
              <ImageGallery 
                items={ projectImages }
                showFullscreenButton={ false }
                showPlayButton={ false }/>
            </div>
          </Col>

          <Col md={ 12 } lg={ 5 }>
            <div id="showProject-info">
              <div>
                <span className="showProject-info-label">Description: </span>
                { projects[id].about }
              </div>

              {projects[id].website !== "" &&
                <div>
                  <span className="showProject-info-label">Website: </span>
                  <a href={projects[id].website} target="_blank" rel="noreferrer">{ projects[id].website }</a>
                </div>
              }

              <div className="showProject-info-tech">
                <span className="showProject-info-label">Tech: </span>
                {projects[id].tech.map((tech, idx) => (
                  <Badge key={ idx } className="showProject-info-badge" bg="secondary">{ tech }</Badge>
                ))}
              </div>

              <div>
                <span className="showProject-info-label">Client Repo: </span>
                <a href={projects[id].repos.client} target="_blank" rel="noreferrer">{ projects[id].repos.client }</a>
              </div>

              <div>
                <span className="showProject-info-label">Server Repo: </span>
                <a href={projects[id].repos.server} target="_blank" rel="noreferrer">{ projects[id].repos.server }</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ShowProject;