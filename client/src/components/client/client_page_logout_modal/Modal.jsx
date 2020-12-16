import React from 'react'
import ModalBlock from 'react-modal'
import { useHistory } from 'react-router-dom'
import { Delete } from '../../../assets/svgs/Svgs'
import classes from './Modal.module.scss'

export const Modal = props => {
let history = useHistory()
    const customStyles = {
      content : {
        width: 700,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom : 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)', 
        overflow: 'hidden'
      }, 
      overlay: {
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      }
    };

    const logout = () => {
      localStorage.removeItem('userData')
      localStorage.removeItem('savedVacancies')
      history.push('/login')
      history.go(0)
    }

    return (

  <ModalBlock
          isOpen={props.appear}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => props.setAppear(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <section className={classes.header}>
         <h5> <b>Вы уверены, что хотите выйти?</b> </h5>
         <span onClick={() => props.setAppear(false)}><Delete /></span>
          </section>
          <section className={classes.footer}>
            <button onClick={logout}>
              Да
            </button>
            <span>
              <span>
              или
              </span>
              <span onClick={() => props.setAppear(false)}> 
              Отменить
              </span>
            </span>
          </section>
        </ModalBlock>
    )
}