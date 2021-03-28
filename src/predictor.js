import ALZ from 'alz-predictor'


export const LINKS = {
  USERS: 'users',
  POSTS: 'posts',
  TODOS: 'todos',
  COMMENTS: 'comments',
  HOME: 'home',
}


export default (function predictor() {
  const STORAGE_KEY = 'alz-predictor'
  const PREDICT_LINK_MAP = {
    [LINKS.USERS]: 'u',
    [LINKS.POSTS]: 'p',
    [LINKS.TODOS]: 't',
    [LINKS.COMMENTS]: 'c',
    [LINKS.HOME]: 'h',
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

  function addPrediction(link) {
    predictor.add(PREDICT_LINK_MAP[link])
    // todo: debounce saving
    saveToStorage()
  }

  function getPrediction() {
    const predictions = predictor.predict()
    const sortedPredictions = Object.keys(predictions).sort((a, b) => predictions[b] - predictions[a])

    const probability = predictions[sortedPredictions[0]]
    const link = getByValue(PREDICT_LINK_MAP, sortedPredictions[0])

    return ({
      link,
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

