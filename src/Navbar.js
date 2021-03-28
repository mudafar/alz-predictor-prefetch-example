import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


import predictor, { LINKS } from './predictor'


const { POSTS, COMMENTS, USERS, TODOS, HOME } = LINKS


export default function Sidebar({ onPredict }) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/" onClick={() => predictor.add(HOME)}>Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/users" onClick={() => predictor.add(USERS)}>Users</Nav.Link>
        <Nav.Link as={Link} to="/posts" onClick={() => predictor.add(POSTS)}>Posts</Nav.Link>
        <Nav.Link
          as={Link}
          to="/comments"
          onClick={() => predictor.add(COMMENTS)}
        >
          Comments
        </Nav.Link>
        <Nav.Link as={Link} to="/todos" onClick={() => predictor.add(TODOS)}>Todos</Nav.Link>
      </Nav>
      <Button variant="primary" onClick={onPredict} style={{ marginRight: '1rem' }}>Predict</Button>

      <Button variant="danger" onClick={() => predictor.reset()}>Reset training</Button>
    </Navbar>
  )
}