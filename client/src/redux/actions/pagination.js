export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const setCurrentPage = (currentPage = 1) => {
    return {
        type: SET_CURRENT_PAGE, 
        currentPage
    }
}




