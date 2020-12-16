const { Router } = require('express')
const clientRouter = Router()
const config = require('config')
const sgMail = require('@sendgrid/mail')
const firebase = require('firebase')
sgMail.setApiKey(process.env.SENDGRID_API_KEY || config.get('SENDGRID_API_KEY'))
const db = firebase.database()
const fireStoreRef =  firebase.firestore()
const vacanciesRef = db.ref('vacancies')  
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const Vacancy = require('../client/models/vacancy')
 

let vacancies = []  
let data = []
data.push(vacancies)
  

//api/admin/vacancies
clientRouter.post('/client/create', async (req, res) => {
    let now = new Date().toLocaleDateString()
    let newVacancyRef = db.ref(`vacancies/`).push()
    let id = newVacancyRef.key
    let vacancy = new Vacancy(req.body, now, id)
    try {
        function addNewVacancy() {
            newVacancyRef.set({...vacancy})
        } 
        await addNewVacancy() 
        res.status(201).json({ vacancy })
        console.log('Вакансия: ', req.body.position, 'успешно добавлена')
    } catch (error) {
            res.status(500).json({ message: "Error adding document: ", error})
    }
 
})
// put is on the roadmap
clientRouter.put('/client/vacancies/:id', (req, res) => {

    let vacancy = vacancies.find(vac => vac.id == req.params.id)
    vacancy.position = req.body.position || vacancy.position 
    vacancy.email = req.body.email || vacancy.email
    vacancy.phone = req.body.phone || vacancy.phone
    vacancy.description = req.body.description || vacancy.description
    

        let vacancyData = {
          position: req.body.position, 
          email: req.body.email,
          phone: req.body.phone,
          description: req.body.description 
        };
       
        
        let newVacancyKey = vacanciesRef.child(`/${req.body.id}/`) 
        res.json({vacancy})
        return newVacancyKey.update(vacancyData);
})
//api/admin/vacancies
clientRouter.delete('/client/vacancies/:id', (req, res) => {

    let index = vacancies.filter(vac => vac.id == req.params.id)

    if (!index) return res.sendStatus(404)

    res.send(req.params.id) 
    let deleteVacancyRef = db.ref(`vacancies/${req.params.id}`)
    deleteVacancyRef.remove()   
   .then(function() {
       console.log("Remove succeeded.")
     })  
     .catch(function(error) { 
       console.log("Remove failed: " + error.message)
     }); 
       
}) 

clientRouter.post('/client/login', [
    check('login', 'Введите корректный email').normalizeEmail().isEmail(), 
    check('password', 'Введите пароль').exists()
] , async (req, res) => {  
    const errors = validationResult(req)
    const { login, password } = await req.body
    if (!errors.isEmpty()) {
        return res.status(400).json(
            {message: errors.array()[0].msg}
    )
    } else {
        let arr = []
        await fireStoreRef.collection('credentials').get().then(function(querySnaphot) {
            querySnaphot.forEach( async function(doc) {
               arr.push(doc.data())
            }) 
        })  
        const user = arr.filter(u => u.login === login)
        loggedInUser = [...user]  
        const isMatchLogin = await loggedInUser[0].login.includes(login)
        const isMatchPassword = await bcrypt.compare(password, loggedInUser[0].password)
        if (!isMatchPassword || !isMatchLogin) { 
            res.status(400).json({ message: 'Неверный логин или пароль'})
          } else {
            const token = jwt.sign(
              { userID: login }, 
              config.get('jwtSecret'), 
              {expiresIn: '1h'}
          )
          res.json({ token, userID: login, name: loggedInUser[0].name, surname: loggedInUser[0].surname, id: loggedInUser[0].id, savedVacancies: loggedInUser[0].savedVacancies})
          }
    }

}) 

clientRouter.post('/client/save-vacancy', async (req, res) => {
    const {vacancyId, userId} = req.body
    const userRef = fireStoreRef.collection('credentials').doc(userId)
    userRef.update({
        savedVacancies: firebase.firestore.FieldValue.arrayUnion(vacancyId)
    }).then(res.json({vacancyId}))
})

clientRouter.delete('/client/remove-saved-vacancy/:vacancyId/:userId', async (req, res) => {
    const vacancyId = req.params.vacancyId
    const userId = req.params.userId
    const userRef = fireStoreRef.collection('credentials').doc(userId) 
    userRef.update({
        savedVacancies: firebase.firestore.FieldValue.arrayRemove(vacancyId)
    }).then(res.json({vacancyId}))
})
module.exports = clientRouter    