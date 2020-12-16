module.exports = class Vacancy {
    constructor(vacancy, createdAt, id) {
        this.description = vacancy.description
        this.phone = vacancy.phone
        this.position = vacancy.position
        this.createdAt = createdAt
        this.id = id
        this.cityValue = vacancy.cityValue
        this.cityLabel = vacancy.cityLabel
        this.image = vacancy.image
        this.category = vacancy.category
        this.typeOfEmployment = vacancy.typeOfEmployment
        this.another = vacancy.another
        this.sallary = vacancy.sallary
        this.companyName = vacancy.companyName
        this.address = vacancy.address
        this.ownerName = vacancy.ownerName
        this.ownerId = vacancy.ownerId
    }
}