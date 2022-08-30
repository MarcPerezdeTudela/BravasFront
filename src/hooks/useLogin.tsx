import axios from 'axios'
import { loginRequest } from '@customTypes/requests/loginRequest'

const LOGIN_URL = 'http://localhost:3030/api/login'

export default async function useLogin(body: loginRequest) {
  const response = await axios.post(LOGIN_URL, body)
  return response
}
