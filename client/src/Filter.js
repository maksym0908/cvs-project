import { Params } from "./params"

export const GetFilteredVacancies = (vacancies, category_filter) => {
let {city_param, position_param, category_param, advs, filter_by_category, filter_by_city, filter_by_student, filter_by_titles, filter_by_remote, filter_by_disability, company_name_param, extended_search, id} = Params()

        if (advs) {
                if (city_param && position_param) {
                        return vacancies.filter(v => v.cityValue === city_param && v.position.toLowerCase() === position_param)
                } else if (city_param && !position_param) {
                        return vacancies.filter(v => v.cityValue === city_param)
                } else if (!city_param && position_param) {
                        return vacancies.filter(v => v.position.toLowerCase() === position_param)
                }
        } else if (filter_by_category) {
                if (city_param) {
                        return vacancies.filter(v => v.cityValue === city_param && v.category === category_param)
                } else return vacancies.filter(v => v.category === category_param)
        } else if (filter_by_city) {
                return vacancies.filter(v => v.cityValue === city_param)
        } else if (filter_by_student) {
                if (filter_by_student && city_param) {
                        return vacancies.filter(v => v.category === category_param && v.cityValue === city_param).filter(v => v.another === "student")
                } else return vacancies.filter(v => v.category === category_param).filter(v => v.another === "student")
                
        } else if (filter_by_titles) {
                return vacancies.filter(v => v.position.toLowerCase() === position_param)
        } else if (filter_by_remote) {
                if (filter_by_remote && city_param) {
                        return vacancies.filter(v => v.category === category_param && v.cityValue === city_param).filter(v => v.typeOfEmployment === "remote-work")
                } else return vacancies.filter(v => v.category === category_param).filter(v => v.typeOfEmployment === "remote-work")
        } else if (filter_by_disability) {
                if (filter_by_disability && city_param) {
                        return vacancies.filter(v => v.category === category_param && v.cityValue === city_param).filter(v => v.another === "disability")
                } else return vacancies.filter(v => v.category === category_param).filter(v => v.another === "disability")
        } else if (company_name_param) {
                return vacancies.filter(v => company_name_param.includes(v.companyName))
        } else if (extended_search) {
                if (category_filter.length) {
                        return vacancies.filter(v => category_filter.includes(v.category))
                }
                return vacancies
        } else if (id) {
                return vacancies.filter(v => v.id === id)
        }
        
        else return vacancies
}