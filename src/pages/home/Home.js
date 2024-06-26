import "./Home.scss";
// Icons
import { ImFilesEmpty } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
// Bootstrap
import Button from "react-bootstrap/Button";
// Bootstrap Routing
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  return (
    <div id="home">
      <div id="home-wrapper">
        <div id="home-info">
          <CgProfile size={ 70 }/>
          <h1>Christopher Young</h1>
          <div>Computer Science, B.S.</div>
          <div>University of California, Santa Cruz</div>
        </div>

        <div id="home-projects">
          <ImFilesEmpty size={ 70 }/>
          <h1>Projects</h1>
          <div>Full-stack projects that use the MERN stack (MongoDB-Atlas, Express, React, and Node) & React projects</div>
          <LinkContainer to="/projects">
            <Button variant="primary">View Projects</Button>
          </LinkContainer>
        </div>

        <div id="home-contact">
          <AiOutlineMail size={ 70 }/>
          <h1>Contact</h1>
          <a href="mailto:cyoungcs20@gmail.com" title="email link" target="_blank" rel="noreferrer">Email</a>
          <a href="https://github.com/cyoung-sudo" title="github link" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Home;