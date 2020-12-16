import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useMessage } from '../../user/hooks/message.hook'
import classes from './Login.module.scss'

export const LoginForm = props => {
  const message = useMessage()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const form = {login, password}
  const loginRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()
  const error = props.error
  const user = props.user
  const loginHandler = data => {
     props.onHandleLogin(data)
  }

   useEffect(() => {
 if (user && user.token) {
     history.push(`/my/main-page`)
     history.go(0)
     
    } else if (error) {
      message(error)
    }
  }, [error, user, message, history])

  return ( 
    <div className={classes.container}>
      <a href="/">
      <img alt="work.ua logo" src="https://st.work.ua/i/press_kit/work_on_white.png"></img>
      </a>
      <h4><b>Вход</b> </h4>
      <div className={classes.wrapper}>
      <div className={classes.form}>
        <div>
          <input
            ref={loginRef}
            id="login"
            type="text"
            required
            className="validate"
            onChange={() => setLogin(loginRef.current.value)}
            name="login"
            placeholder="Логин"
          />
        </div>
        <div>
          <input
            ref={passwordRef}
              id="password"
              type="password"
               required 
               className="validate"
                onChange={() => setPassword(passwordRef.current.value)}
                name="password"
                placeholder="Пароль"
                className={classes.input}
                />
        </div>

      </div>
      <span>
      <button className="btn" onClick={() => loginHandler({...form})}>Войти</button>
      </span>
      </div>
      <span className={classes.register}>Еще не с нами? <a href="/register">Зарегистрироваться</a></span>
    </div>
  )
}