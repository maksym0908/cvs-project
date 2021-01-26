export const GET_VACANCIES = 'GET_VACANCIES'
export const GET_VACANCIES_FROM_LOCAL_STORAGE = 'GET_VACANCIES_FROM_LOCAL_STORAGE'
export const CREATE_VACANCY = 'CREATE_VACANCY'
export const REGISTER = 'REGISTER'
export const EDIT_VACANCY = 'EDIT_VACANCY'
export const DELETE_VACANCY = 'DELETE_VACANCY'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE' 

export const getVacanciesFromLocalStorage = () => {
    const vacancies = JSON.parse(localStorage.getItem('vacancies')) 
    return {
        type: GET_VACANCIES_FROM_LOCAL_STORAGE, 
        vacancies
    }
}

export const getVacancies = () => {
    debugger
    return {
        type: GET_VACANCIES, 
        request: {
            method: 'get', 
            url: `/vacancies`
        } 
    }
}

export const createVacancy = (data) => {
    return {
        type: CREATE_VACANCY, 
        request: {
            method: 'post', 
            url: '/client/create',
            body: data 
        }
    }
}


export const editVacancy = (id, data) => {
    
    return {
        type: EDIT_VACANCY,
        request: {
            method: 'put', 
            url: `/client/vacancies/${id}`, 
            body: data 
        }

    }
}

export const deleteVacancy = (id) => {
    return {
        type: DELETE_VACANCY, 
        request: {
            method: 'delete', 
            url: `/client/vacancies/${id}`
        }
    }
}

export const register = data => {
    return {
        type: REGISTER, 
        request: {
            method: 'post', 
            url: '/register', 
            body: data
        }
    }
}

export const setCurrentPage = (currentPage = 1) => {
    return {
        type: SET_CURRENT_PAGE, 
        currentPage
    }
}
