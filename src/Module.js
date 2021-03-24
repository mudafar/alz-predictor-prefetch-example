import { useEffect } from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Module({ title, data, onFetch }) {
  useEffect(() => {
    if (!data) {
      onFetch(title)
    }
  }, [title, data, onFetch])

  return (
    <Jumbotron>
      <h1>{title}</h1>
      {data ? data.map((item, i) => <p key={i}>{item}</p>) : '...'}
    </Jumbotron>
  )
}