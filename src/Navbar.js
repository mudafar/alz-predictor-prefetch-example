import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


import { MODULES } from './constants'
import predictor from './predictor'



const { HEALTH, PERFORMANCE, USERS, LEADS, HOME } = MODULES

export default function Sidebar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" onClick={() => predictor.add(HOME)}>Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/users" onClick={() => predictor.add(USERS)}>Users</Nav.Link>
        <Nav.Link as={Link} to="/health" onClick={() => predictor.add(HEALTH)}>Health</Nav.Link>
        <Nav.Link
          as={Link}
          to="/performance"
          onClick={() => predictor.add(PERFORMANCE)}
        >
          Performance
        </Nav.Link>
        <Nav.Link as={Link} to="/leads" onClick={() => predictor.add(LEADS)}>Leads</Nav.Link>
      </Nav>
      <Button variant="danger" onClick={() => predictor.reset()}>Reset training</Button>
    </Navbar>
  )
}