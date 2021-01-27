export const LOGIN = 'LOGIN'
export const SAVE_VACANCY = 'SAVE_VACANCY'
export const REMOVE_SAVED_VACANCY = 'REMOVE_SAVED_VACANCY'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'




 
export const login = (data) => {
    debugger
    return { 
        type: LOGIN, 
        request: {
            method: 'post', 
            url: '/client/login', 
            body: data
        }
    }   
}


export const saveVacancy = (vacancyId, userId) => {
    return {
        type: SAVE_VACANCY, 
        request: {
            method: 'post',  
            url: '/client/save-vacancy', 
            body: {vacancyId, userId}
        }
    }
}

export const removeSavedVacancy = (vacancyId, userId) => {
    return {
        type: REMOVE_SAVED_VACANCY, 
        request: {
            method: 'delete',
            url: `/client/remove-saved-vacancy/${vacancyId}/${userId}`
        }
    }
}
