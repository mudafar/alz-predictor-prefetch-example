import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import Jumbotron from 'react-bootstrap/Jumbotron'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


import Navbar from './Navbar'
import Module from './Module'
import { getData } from './api'
import { MODULES } from './constants'
import predictor from './predictor'


const { HEALTH, PERFORMANCE, USERS, LEADS } = MODULES
const PROBABILITY_THRESHOLD = 0.7

function App() {
  const [data, setData] = useState({})
  const [alert, setAlert] = useState()


  async function fetchData(module) {
    const d = await getData()
    setData(prevData => ({ ...prevData, [module]: d }))
    setAlert()
  }

  useEffect(() => {
    const { module, probability } = predictor.get()
    if (module) {
      if (probability > PROBABILITY_THRESHOLD) {
        fetchData(module)
        setAlert(`Fetching ${module} from prediction, with probability: ${probability.toFixed(2)}`)
      } else {
        setAlert(`Prediction: ${module}: ${probability.toFixed(2)}`)
      }
    }
  }, [])

  return (
    <Router>
      <div>
        <Navbar />
        <Container fluid>
          {alert && (
            <Alert variant='primary'>
              {alert}
            </Alert>
          )}
          <Switch>
            <Route path="/performance">
              <Module data={data[PERFORMANCE]} onFetch={fetchData} title={PERFORMANCE} />
            </Route>
            <Route path="/users">
              <Module data={data[USERS]} onFetch={fetchData} title={USERS} />
            </Route>
            <Route path="/health">
              <Module data={data[HEALTH]} onFetch={fetchData} title={HEALTH} />
            </Route>
            <Route path="/leads">
              <Module data={data[LEADS]} onFetch={fetchData} title={LEADS} />
            </Route>
            <Route path="/">
              <Jumbotron>
                <h1>Home</h1>
                <p>Click on any navbar link to start training the model.</p>
                <p>Reload the page to get the prediction.</p>
                <p>
                  The model will try to predict next user action.<br/>
                  If the the prediction is greater than {PROBABILITY_THRESHOLD}, then the app will prefetch needed data.
                </p>
              </Jumbotron>
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
