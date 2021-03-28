import Jumbotron from 'react-bootstrap/Jumbotron'

import { PROBABILITY_THRESHOLD } from './constants'


export default function Home() {
  return (
    <Jumbotron>
      <h1>Home</h1>
      <p>Click on any navbar link to start training the model.</p>
      <p>Reload the page or click on Predict button to get the prediction.</p>
      <p>
        The model will try to predict next user action with highest probability.<br />
        If the the prediction probability is greater than {PROBABILITY_THRESHOLD}, then the app will prefetch needed data.
      </p>
    </Jumbotron>
  )
}