import { useEffect } from "react"
import Table from "react-bootstrap/Table"
import Loader from "./Loader"

export default function Users({ users, onFetch }) {
  useEffect(() => {
    if (!users.length) {
      onFetch()
    }
  }, [users, onFetch])

  if (!users.length){
    return <Loader />
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map( user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </tbody>
    </Table>

  )
}