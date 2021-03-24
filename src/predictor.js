import ALZ from 'alz-predictor'

import { MODULES } from './constants'


export default (function predictor() {
  const STORAGE_KEY = 'alz-predictor'
  const PREDICT_MODULE_MAP = {
    [MODULES.PERFORMANCE]: 'p',
    [MODULES.HEALTH]: 'h',
    [MODULES.USERS]: 'u',
    [MODULES.LEADS]: 'l',
    [MODULES.HOME]: 'o',
  }

  function getByValue(object, searchValue) {
    for (let [key, value] of Object.entries(object)) {
      if (value === searchValue)
        return key;
    }
  }

  let predictor = new ALZ()

  const storedALZ = localStorage.getItem(STORAGE_KEY)
  if (storedALZ) {
    predictor.loadJSON(storedALZ)
  }


  function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(predictor))
  }

  function addPrediction(module) {
    predictor.add(PREDICT_MODULE_MAP[module])
    // todo: debounce saving
    saveToStorage()
  }

  function getPrediction() {
    const predictions = predictor.predict()
    const sortedPredictions = Object.keys(predictions).sort((a, b) => predictions[b] - predictions[a])

    const probability = predictions[sortedPredictions[0]]
    const module = getByValue(PREDICT_MODULE_MAP, sortedPredictions[0])

    return ({
      module,
      probability,
    })
  }

  function reset() {
    predictor = new ALZ()
    saveToStorage()
  }

  return ({
    add: addPrediction,
    get: getPrediction,
    reset,
  })

})()

