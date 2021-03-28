import posts from './posts.json'
import users from './users.json'
import comments from './comments.json'
import todos from './todos.json'


const MAX_TIMEOUT = 5000

const getJSON = (data) => () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(data),
    Math.random() * MAX_TIMEOUT)
})


export const getPosts = getJSON(posts)
export const getUsers = getJSON(users)
export const getComments = getJSON(comments)
export const getTodos = getJSON(todos)
