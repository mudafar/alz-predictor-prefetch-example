import { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Loader from "./Loader";

export default function Todos({ todos, onFetch }) {
  useEffect(() => {
    if (!todos.length) {
      onFetch()
    }
  }, [todos, onFetch])


  if (!todos.length){
    return <Loader />
  }


  return (
    <ListGroup>
      {todos.map(todo => (
        <ListGroup.Item key={todo.id} active={todo.completed}>{todo.title}</ListGroup.Item>
      ))}
    </ListGroup>
  )
}