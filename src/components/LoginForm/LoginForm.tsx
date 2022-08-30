import React, { useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { loginResponse } from '@customTypes/responses/loginResponse'
import { loginRequest } from '@customTypes/requests/loginRequest'
import useLogin from '@hooks/useLogin'

export default function LoginForm() {
  const userNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body: loginRequest = {
      userName: userNameRef.current?.value,
      password: passwordRef.current?.value,
    }

    useLogin(body).then((response) => {
      const { token }: loginResponse = response.data
      token ? sessionStorage.setItem('token', token) : null
    })
  }

  return (
    <Form onSubmit={onSubmit}>
      <h1>Login</h1>
      <input ref={userNameRef} type='text' placeholder='Username' />
      <input ref={passwordRef} type='password' placeholder='Password' />
      <button type='submit'>Login</button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 420px;
`
