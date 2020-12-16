const express = require('express')
const app = express()
const config = require('config')
const path = require('path')
const firebase = require('firebase')
const cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json({limit: '50mb', extended: true})

firebase.initializeApp(config.get('fire-base'))
app.use(cors())
 
app.use('/api', jsonParser, require('./routes/clientRoutes'))     
app.use('/api', jsonParser, require('./routes/userRoutes'))         
  

  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
 

const PORT = config.get('port') || 5000  

      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    }) 