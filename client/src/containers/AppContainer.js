import { connect } from 'react-redux'
import App from '../App'
import { login, removeSavedVacancy, saveVacancy} from '../redux/actions/clientActions'
import { createVacancy, deleteVacancy, editVacancy, getVacancies, register, setCurrentPage } from '../redux/actions/userActions'
function mapStateToProps(state) {

    return {
        user: JSON.parse(localStorage.getItem('userData')), 
        savedVacancies: localStorage.getItem('savedVacancies'),
        loginError: state.ClientReducer.error, 
        emptyState: state.UserReducer.length ? true : false,
        vacancies: state.UserReducer, 
        pagination: state.PaginationReducer, 
        registerError: state.UserRegisterReducer.error, 
        registerSuccess: state.UserRegisterReducer.success
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCreateVacancy: data => dispatch(createVacancy(data)),
        onEditVacancy: (id, data) => dispatch(editVacancy(id, data)),
        onDeleteVacancy: id => dispatch(deleteVacancy(id)), 
        onHandleLogin: data => dispatch(login(data)),
        onRemoveSavedVacancy: (vacancy, userId) => dispatch(removeSavedVacancy(vacancy, userId)), 
        onGetVacancies: () => dispatch(getVacancies()),
        onSetCurrentPage: page => dispatch(setCurrentPage(page)),  
        onHandleRegister: data => dispatch(register(data)), 
        onSaveVacancy: (vacancy, userId) => dispatch(saveVacancy(vacancy, userId)), 
        onRemoveSavedVacancy: (vacancy, userId) => dispatch(removeSavedVacancy(vacancy, userId))  
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer