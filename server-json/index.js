const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/Transactions/DataMock/', (request, response) => {
    if (request.method === 'GET') {
        const transactions = require('./Transactions/DataMock/index.js')
        console.dir(transactions)
        response.status(200).jsonp(transactions())
    }
})

server.listen(port, () => {
    console.log('JSON Server is running')
})