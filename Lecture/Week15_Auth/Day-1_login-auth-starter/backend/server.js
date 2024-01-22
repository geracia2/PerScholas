const express = require('express')
const cors = require('cors')

require('dotenv').config()

const mongoConfig = require('./config')

mongoConfig()

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
// middleware
const { authorize } = require('./middleware/authMiddleware')

const app = express()

const PORT = 8080

app.use(cors())
app.use(express.json())


// login point
app.use('/auth', authRoutes)
// add middleware before route, this also grabs req.body/params
// you could also put them inside specific routes inside the routes folder
app.use('/api/users', authorize, userRoutes)

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})

