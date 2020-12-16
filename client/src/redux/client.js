import { LOGIN, REMOVE_SAVED_VACANCY, SAVE_VACANCY } from "./actions/clientActions"


export const ClientReducer = (state = [], action) => {

    switch (action.type) {

        case LOGIN:
                localStorage.setItem('userData', JSON.stringify({
                    token: action.data.token,
                    userId: action.data.userID,
                    name: action.data.name,
                    surname: action.data.surname,
                    id: action.data.id
                }))

                if (action.data.savedVacancies !== 'undefined') {
                    localStorage.setItem('savedVacancies', action.data.savedVacancies)
                }     
                if (action.error.response.data.messag) {        
                    return {error: action.error.response.data.message}
                }
                

        case SAVE_VACANCY:
            const savedVacancies = localStorage.getItem('savedVacancies')
            if (action.data) {
                if (savedVacancies) {
                    const updatedArr = savedVacancies.split(",")
                    localStorage.setItem('savedVacancies', [...updatedArr, action.data.vacancyId])
                    localStorage.getItem('savedVacancies')
                } else {
                    localStorage.setItem('savedVacancies', action.data.vacancyId)
                    localStorage.getItem('savedVacancies')
                }
            }
            return localStorage.getItem('savedVacancies')

            case REMOVE_SAVED_VACANCY:
                const updatedSavedVacanciesArr = localStorage.getItem('savedVacancies').split(",")
                const savedVacancyIndex = updatedSavedVacanciesArr.findIndex(vac => vac === action.data.vacancyId)
                const newSavedVacanciesArr = [...updatedSavedVacanciesArr.slice(0, savedVacancyIndex),
                    ...updatedSavedVacanciesArr.slice(savedVacancyIndex + 1)]
                    localStorage.setItem('savedVacancies', newSavedVacanciesArr)
                return localStorage.getItem('savedVacancies')
            


        default:
            return state
    }
}