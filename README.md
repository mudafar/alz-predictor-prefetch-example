# Prefetch example app using alz-predictor
A simple react demo app that learns user navigation behavior/sequence, predict and prefetch resources for next user action.  

## Description
1. To train alz-predictor, navigate through the provided links:
    - Home
    - Users
    - Health
    - Performance
    - Leads

2. To get prediction, simply reload current app page, an alert will show the current prediction (with highest probably). If the prediction is greater than `PROBABILITY_THRESHOLD (0.7)` , then it'll prefetch data for that link.

3. This app use `localStorage` to persist training. A `Reset Training` button is provided.

## Usage

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
