const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');

require('dotenv').config()
const port = process.env.PORT
const app = express()
const router = express.Router()
require('./routes/routes')(router, {});

const corsOptions = {
    origin: '*',
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use('/api', router);

app.use(express.static(process.cwd() + '/../client/dist/client/'))

app.listen(port, () => { })
