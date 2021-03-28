import { useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import Loader from "./Loader";

export default function Comments({ comments, onFetch }) {
  useEffect(() => {
    if (!comments.length) {
      onFetch()
    }
  }, [comments, onFetch])

  if (!comments.length){
    return <Loader />
  }

  return (
    comments.map(comment => (
      <Toast key={comment.id}>
        <Toast.Header closeButton={false}>
          <strong className="mr-auto">{comment.name}</strong>
          <small>{parseInt(Math.random()*10)} mins ago</small>
        </Toast.Header>
        <Toast.Body>{comment.body}</Toast.Body>
      </Toast>
    ))
  )

}