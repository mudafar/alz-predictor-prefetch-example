const data = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
]


export const getData = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(
    [...data[Math.floor(Math.random() * data.length)]]),
    Math.random() * 10000)
})
