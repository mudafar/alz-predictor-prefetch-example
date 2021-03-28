import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Loader from "./Loader";


export default function Posts({ posts, onFetch }) {
  useEffect(() => {
    if (!posts.length) {
      onFetch()
    }
  }, [posts, onFetch])

  if (!posts.length){
    return <Loader />
  }

  return (
    <Container fluid>
      <Row>
        {posts.map(post => (
          <Card style={{ width: '18rem', margin: '1rem' }} border="info" key={post.id} >
            <Card.Header>{post.title}</Card.Header>
            <Card.Body>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
}