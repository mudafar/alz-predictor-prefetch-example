import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


import Navbar from './Navbar'
import Home from './Home'
import Posts from "./Posts";
import Comments from "./Comments";
import Todos from "./Todos";
import Users from "./Users";
import { getPosts, getUsers, getComments, getTodos } from './api'
import { PROBABILITY_THRESHOLD } from './constants'
import predictor, { LINKS } from './predictor'


const fetchAndSet = (getData, setData) => async () => {
  const data = await getData()
  setData(data)
}

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])
  const [todos, setTodos] = useState([])
  const [alert, setAlert] = useState()

  const fetchPosts = fetchAndSet(getPosts, setPosts)
  const fetchUsers = fetchAndSet(getUsers, setUsers)
  const fetchComments = fetchAndSet(getComments, setComments)
  const fetchTodos = fetchAndSet(getTodos, setTodos)

  function showAlert(message) {
    setAlert(message)
    setTimeout(() => setAlert(), 4000)
  }

  function predict() {
    const { link, probability } = predictor.get()
    if (!link) {
      showAlert('No training data!, please click on any link')
      return
    }

    if (probability < PROBABILITY_THRESHOLD) {
      showAlert(` Prediction is *${link}* with probability < ${PROBABILITY_THRESHOLD},  more training is needed`)
      return
    }

    switch (link) {
      case LINKS.COMMENTS:
        fetchComments()
        break
      case LINKS.POSTS:
        fetchPosts()
        break
      case LINKS.USERS:
        fetchUsers()
        break
      case LINKS.TODOS:
        fetchTodos()
        break
      default:
        break
    }
    showAlert(`Prefetching *${link}* with probability: ${probability.toFixed(2)}`)
  }

  useEffect(predict, [])

  return (
    <Router>
      <Navbar onPredict={predict} />
      <Container fluid>
        {alert && (
          <Alert variant='primary'>
            {alert}
          </Alert>
        )}
        <Switch>
          <Route path="/posts">
            <Posts posts={posts} onFetch={fetchPosts} />
          </Route>
          <Route path="/comments">
            <Comments comments={comments} onFetch={fetchComments} />
          </Route>
          <Route path="/todos">
            <Todos todos={todos} onFetch={fetchTodos} />
          </Route>
          <Route path="/users">
            <Users users={users} onFetch={fetchUsers} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>

    </Router>
  );
}

export default App;
