// import
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// router
const productRouter = require('./router/productRouter')

app.get('/', (req, res) => { return res.send('hai') })
app.use('', productRouter)

app.listen(PORT, () => console.log(`connected at PORT ${PORT}`))