import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API,
  headers: {
    'Content-Type': 'application/json;',
  },
})

const tenant = process.env.NEXT_PUBLIC_TENANT

export class AuthService {
  static async signIn(
    username: string,
    password: string,
  ) {
    try {
      const { data } = await httpClient.post(`/${tenant}/auth/login`, {
        username,
        password,
      })

      localStorage.setItem('token', data.accessToken)

      return data
    } catch (error) {
      console.log(error)
      throw new Error('Internal server error!')
    }
  }
}
