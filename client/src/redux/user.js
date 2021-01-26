import { GET_VACANCIES, REGISTER, DELETE_VACANCY, CREATE_VACANCY, EDIT_VACANCY, SET_CURRENT_PAGE, GET_VACANCIES_FROM_LOCAL_STORAGE } from "./actions/userActions"



export const UserReducer = (state = [], action) => {
    
    switch (action.type) {
        case GET_VACANCIES:
            if (!action.data) {
                return state
            } else {
                localStorage.setItem('vacancies', JSON.stringify(action.data))
               return action.data
            } 

            case GET_VACANCIES_FROM_LOCAL_STORAGE:

                return action.vacancies

            case CREATE_VACANCY:
                state.push(action.data)
                return state

    
            case DELETE_VACANCY:
                const vacancyIndex = state.findIndex(vac => vac.id === action.data)
                 return[...state.slice(0, vacancyIndex),
                    ...state.slice(vacancyIndex + 1)]



                case EDIT_VACANCY:
                    state[0].map(vac => {
                        if (vac.id === action.data.vacancy.id) {
                            const index = state[0].findIndex(vac => vac.id === action.data.vacancy.id)
                            state[0][index] = action.data.vacancy
                            return vac
                        } else return state[0]
                    })

        default:
            return state
    }
}

export const UserRegisterReducer = (state = [], action) => {
    
    switch (action.type) {
        case REGISTER:
            if (action.data.message) {
                return {message: action.data.message}
            }  else if (action.error.response.data.error) {
                return {error: action.error.response.data.error}
            }
    
        default:
           return state
    }
}



export const PaginationReducer = (state = [], action) => {

    switch (action.type) {
        case SET_CURRENT_PAGE:
            return action

        default:
            return state
    }
}