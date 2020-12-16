import React, { useEffect, useRef } from 'react'
import ReactPagination from "react-paginate"
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { Params } from '../../../../params'
import classes from './Pagination.module.scss'

export const Pagination = props => {

    const { city_param, position_param, category_param, advs, filter_by_category, filter_by_city, filter_by_student, filter_by_titles, filter_by_remote, filter_by_disability, company_name_param, extended_search} = Params()
    let useQuery = () => {
        return new URLSearchParams(useLocation().search);
}
    let query = useQuery()
    let current_page = query.get("page")
    let page = parseInt(current_page - 1, 0) 
    const totalVacancies = props.vacancies.length
    const pageCount = totalVacancies / props.vacanciesPerPage

    let done = useRef(true)
    let prevPageNumberRef = useRef(page)
    let prevPageNumber = prevPageNumberRef.current
    let history = useHistory()
    const buildHref = page => {
        if (advs) {
                if (city_param && position_param) {
                  return  `?city=${city_param}&position=${position_param}&advs=1&page=${page}`
                } else if (city_param && !position_param) {
                   return `?city=${city_param}&advs=1&page=${page}`
                } else if (!city_param && position_param) {
                    return `?position=${position_param}&advs=1&page=${page}`
                }
            return `?advs=1&page=${page}`
        }
        else if (filter_by_category) {
            if (city_param) {
                return `?city=${city_param}&category=${category_param}&by-category=1&page=${page}`
            }
            return `?category=${category_param}&by-category=1&page=${page}`
        }
        else if (filter_by_city) {
            return `?city=${city_param}$by-city=1&page=${page}`
        }
        else if (filter_by_student) {
            if (city_param) {
               return `?city=${city_param}&category=${category_param}&stud=1&page=${page}`
            }
            return `?category=${category_param}&stud=1&page=${page}`
        } else if (filter_by_titles) {
            return `?position=${position_param}&by-titles=1&page=${page}`
        } else if (filter_by_remote) {
            if (filter_by_remote && city_param) {
                return  `?city=${city_param}&category=${category_param}&by-remote=1&page=${page}`
            }
           return `?category=${category_param}&by-remote=1&page=${page}`
        } else if (filter_by_disability) {
            if (filter_by_disability && city_param) {
                return `?city=${city_param}&category=${category_param}&by-disability=1&page=${page}`
            }
                return `?category=${category_param}&by-disability=1&page=${page}`
        } else if (company_name_param) {
                return `?company-name=${company_name_param}&page=${page}`
        } else if (extended_search) {
                return `?extended-search=1$page=${page}`
        }
        
    };
    const handlePageChange = (currentPage) => {
        if (advs) {
            if (city_param && position_param) {
                return  history.push(`?city=${city_param}&position=${position_param}&advs=1&page=${currentPage.selected + 1}`)
              } else if (city_param && !position_param) {
                 return  history.push(`?city=${city_param}&advs=1&page=${currentPage.selected + 1}`)
              } else if (!city_param && position_param) {
                  return history.push(`?position=${position_param}&advs=1&page=${currentPage.selected + 1}`)
                  
              }  return history.push(`?advs=1&page=${currentPage.selected + 1}`)
              
        } else if (filter_by_category) {
            if (city_param) {
                return history.push(`?city=${city_param}&category=${category_param}&by-category=1&page=${currentPage.selected + 1}`)
            }
            return history.push(`?category=${category_param}&by-category=1&page=${currentPage.selected + 1}`)
        } else if (filter_by_city) {
            return history.push(`?city=${city_param}&by-city=1&page=${currentPage.selected + 1}`)
        } else if (filter_by_student) {
                if (city_param) {
                    history.push(`?city=${city_param}&category=${category_param}&stud=1&page=${currentPage.selected + 1}`)
                }
            return history.push(`?category=${category_param}&stud=1&page=${currentPage.selected + 1}`)
        } else if (filter_by_titles) {
            return history.push(`?position=${position_param}&by-titles=1&page=${currentPage.selected + 1}`)
        } else if (filter_by_remote) {
            if (filter_by_remote && city_param) {
                return history.push(`?category=${category_param}&city=${city_param}&by-remote=1&page=${currentPage.selected + 1}`)
            }
            history.push(`?category=${category_param}&by-remote=1&page=${currentPage.selected + 1}`)
        } else if (filter_by_disability) {
            if (filter_by_disability && city_param) {
                return history.push(`?category=${category_param}&city=${city_param}&by-disability=1&page=${currentPage.selected + 1}`)
            }
            history.push(`?category=${category_param}&by-disability=1&page=${currentPage.selected + 1}`)
        } else if (company_name_param) {
            history.push(`?company-name=${company_name_param}&page=${currentPage.selected + 1}`)
        } else if (extended_search) {
            history.push(`?extended-search=1&page=${currentPage.selected + 1}`)
        }
    }

    const handleCurrentPageChange = () => {
        done.current = true
        if (prevPageNumber !== current_page && done.current === true) {
            props.setCurrentPage(current_page)

        } else if (prevPageNumber === current_page) {
            done.current = false
        }
    }


    useEffect(() => {
        prevPageNumberRef.current = current_page
        handleCurrentPageChange()
    })




    return (
        <div>
            <ReactPagination
                previousLabel="Назад"
                nextLabel="Следующая"
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName={classes.container}
                activeClassName={classes.active}
                activeLinkClassName={classes.activeLink}
                pageLinkClassName={classes.pageLink}
                disabledClassName={classes.disabled}
                hrefBuilder={buildHref}
                disableInitialCallback={true}
                forcePage={page}
                previousClassName={classes.next_forward}
                nextClassName={classes.next_forward}
            />
        </div>
    )
}