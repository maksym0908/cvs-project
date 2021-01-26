const { Router } = require('express')
const userRouter = Router()
const firebase = require('firebase')
const db = firebase.database()
const fs = firebase.firestore()
const vacanciesRef = db.ref('vacancies')  
const users = fs.collection('credentials')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');
const {check, validationResult} = require('express-validator')



userRouter.get('/vacancies', (req, res) => {  
        vacanciesRef.once("value", function(vac) {
                    res.send(Object.values(vac.val()))         
    })  
}) 


userRouter.post('/register', [
    check('login', 'Некорректный email').isEmail(), 
    check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
], async (req, res) => {
    let id = uuidv4()
    let arr = []
    await users.get().then(function(querySnaphot) {
        querySnaphot.forEach( async function(doc) {
           arr.push(doc.data().login)
        })
    }) 
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ error:
                errors.array()[0].msg
  }
        )
        }
        const {name, surname, login, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        if (arr.includes(login)) {
            res.status(400).json({error: 'Такой пользователь уже существует'})
        }
      else await users.doc(id).set({
            name: name, 
            surname: surname,  
            login: login, 
            password: hashedPassword, 
            id: id
        }
        ).then(() => {
            console.log("Document was successfully written!");
            res.status(201).json({message: 'Пользователь создан'})
        }).catch((e) => { 
            console.error("Error writing document: ", e)
        })
        

    } catch (e) {
        res.status(500).json({message: 'Что то пошло не так, попробуйте снова'})
    }
})
     

module.exports = userRouter   