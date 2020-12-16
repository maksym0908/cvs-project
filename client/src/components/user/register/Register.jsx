import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMessage } from '../hooks/message.hook'
import classes from './Register.module.scss'

export const Register = props => {
    const message = useMessage()
    const history = useHistory()
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const form = {name, surname, login, password}
    const loginRef = useRef()
    const passwordRef = useRef()
    const error = props.error
    const success = props.success 
    const registerHandler = data => {
       props.handleRegister(data)
    }

    useEffect(() => {
        if (error) {
            message(error)
        } 
        else if (success) {
            message(success)
            setTimeout(() => {
                history.push('/my')
            }, 1000)
        }
    }, [error,])

    return (
        <div>
            <div className={classes.container}>
      <a href="/">
      <img src="https://st.work.ua/i/press_kit/work_on_white.png"></img>
      </a>
      <h4><b>Зарегистрируйтесь</b> </h4>
      <p>Вам станут доступны все функции сайта, которые помогут найти замечательную работу.</p>
      <div className={classes.wrapper}>
      <div className={classes.form}>
        <div>
          <input
            ref={loginRef}
            id="name"
            type="text"
            required
            className="validate"
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Имя"
          />
          <input
            ref={loginRef}
            id="surname"
            type="text"
            required
            className="validate"
            onChange={(e) => setSurname(e.target.value)}
            name="surname"
            placeholder="Фамилия"
          />
          <input
            ref={loginRef}
            id="login"
            type="email"
            required
            className="validate"
            onChange={(e) => setLogin(e.target.value)}
            name="login"
            placeholder="Эл. почта"
          />
        </div>
        <div>
          <input
            ref={passwordRef}
              id="password"
              type="password"
               required 
               className="validate"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Пароль"
                className={classes.input}
                />
        </div>

      </div>
      <span>
      <button className="btn" onClick={() => registerHandler({...form})}>Зарегистрироваться</button>
      </span>
      </div>
    </div>
        </div>
    )
}