import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tinder-backend-rodrigo.herokuapp.com',
})

export default instance
