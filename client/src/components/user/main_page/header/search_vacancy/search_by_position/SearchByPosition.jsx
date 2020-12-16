import React, { useState, useRef, useEffect } from 'react'
import classes from './SearchByPosition.module.scss'
import { PositionsDropDown } from './PositionsDropDown'


export const SearchByPosition = props => {

    const positionRef = useRef()
    const positions = props.data.vacancies.map(p => p.position.toLowerCase())
    const uniqPositions = [...new Set(positions)]
    const [positionInput, setPositionInput] = useState() 
    const [filteredPosition, setFilteredPosition] = useState()
    const handleSetPosition =  (filter) => {
        let position = uniqPositions.filter(p => p === filter) 
        props.setPosition(position)
        setFilteredPosition(position)
        props.data.setAppearPositionsDropDown(false)
    }
    
      const handleFilterPosition = (filter) => {  
      props.setExample('')
      setFilteredPosition(filter)
      let position = uniqPositions.filter(p => p.toLowerCase().indexOf(filter.toLowerCase()) > -1)
      props.setPosition(position.length ? position : '') 
      setPositionInput(filter)
      }

    const handleCleanInput = () => {
      positionRef.current.value = ''
      setPositionInput('')
      setFilteredPosition('')
      props.setPosition('')
      props.setExample('')
      props.data.setAppearPositionsDropDown(false)
    }
    
    const closeDropDown = () => {
      setFilteredPosition(props.position)
      props.setPosition('')
      props.setPosition(filteredPosition)
      props.data.setAppearPositionsDropDown(false)

    }

    useEffect(() => {
            if (props.example) {
                props.setPosition(props.example)
                setFilteredPosition(props.example)
            }
    }, [props.example])

    useEffect(() => {
        props.setPosition(filteredPosition)
    }, [props.position])
    

    return (

          <>
          <div  className={classes.positionInput}>
          <input
            value={filteredPosition}
            placeholder="Запрос"
            ref={positionRef}
            onChange={() => handleFilterPosition(positionRef.current.value)}
            onClick={() => props.data.setAppearPositionsDropDown(true)}
          />
          {filteredPosition || positionInput || props.position ? <span  className={classes.cleanInputField} onClick={handleCleanInput}>&#10006;</span> : null}

        
          {  props.data.appearPositionsDropDown ? 
          <PositionsDropDown 
          positions={uniqPositions} 
          positionInput={positionInput}
          handleSetPosition={handleSetPosition}
          handleFilterPosition={handleFilterPosition}
          setFilteredPosition={setFilteredPosition}
          position={props.position}
          setPosition={props.setPosition}
          positionRef={positionRef}
          closeDropDown={closeDropDown}
          setAppearDropDown={props.data.setAppearPositionsDropDown}
          />  : null}
        </div>

            </>
    )
}