// import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
// import classes from './FilterBlock.module.scss'

// export const FiltersBlock = () => {
//     let [filterValue, setFilterValue] = useState('')
//     let [filterLabel, setFilterLabel] = useState([])
//     let sp = document.getElementsByClassName('sp')

//     const handleRemoveFilter = (c, label) => {
//         let index = label !== null ? filterLabel.findIndex(el => el === label) : filterLabel.findIndex(el => el === c.label)
//         setFilterLabel(prevArray => [...prevArray.slice(0, index), ...prevArray.slice(index + 1)])
//         if (label) {
//             let inputIndex = categories.findIndex(el => el.label === label)
//                 sp[inputIndex].checked = false
//         } else if (!c && !label) {
//             for (let el = 0; el < sp.length; el++) {
//                 sp[el].checked = false
//             }
//             setFilterLabel('')
//         }      
//     }
//     let history = useHistory()
//     let setHistory = (e, c) => {
//         if (e.target.checked === true) {
//             setFilterLabel(prevArray => [...prevArray, c.label])
//         } else if (e.target.checked === false) {
//             handleRemoveFilter(c, null)
//             setFilterValue('')
//         }
//     }

//     useEffect(() => {
//         history.push(`/vacancies/extended_search/${filterValue}`)
//         setFilterLabel(filterLabel)
//     }, [filterValue, filterLabel])

//     return (
//                                     <div className={classes.labelFilter}>   
//                                         {filterLabel.map(l => (
//                                             <div className={classes.label}>
//                                                 <span className={classes.labelContent}>
//                                                     <p>{l}</p>
//                                                     <span onClick={() => handleRemoveFilter(null, l)}>&times;</span>
//                                                 </span>

//                                             </div>
//                                         ))}
//                                         {filterLabel.length > 1 ? <span onClick={() => handleRemoveFilter()} className={classes.reset}>Сбросить все</span> : null}
                                         
//                                     </div>
//     ) 
// }