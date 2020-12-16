import { useLocation } from "react-router-dom";

export const Params = () => {
    let useQuery = () => {
        return new URLSearchParams(useLocation().search);
}
let query = useQuery()
const city_param = query.get("city")
const position_param = query.get("position")
const category_param = query.get("category")
const advs = query.get("advs")
const filter_by_category = query.get("by-category")
const filter_by_city = query.get("by-city")
const filter_by_student = query.get("stud")
const filter_by_titles = query.get("by-titles")
const filter_by_remote = query.get("by-remote")
const filter_by_disability = query.get("by-disability")
const company_name_param = query.get("company-name")
const page = query.get("page")
const extended_search = query.get("extended-search")
const id = query.get("id")
return {city_param, position_param, category_param, advs, filter_by_category, filter_by_city, filter_by_student, filter_by_titles, filter_by_remote, filter_by_disability, company_name_param, page, extended_search, id}
}