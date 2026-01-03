const express =require('express')
const cors= require('cors')

const app = express()
app.use(cors())

app.get('/', (request, response) => {
   response.send ('welcome to express application')
})

app.listen(4000, '0.0.0.0', () => {
    console.log('server is started on port 4000')
})
