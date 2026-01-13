import { createServer } from 'node:http'
// import * as http from 'node:http'

const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Erick Corrales')
})

server.listen(8080, () => {
    console.log('Corriendo el sevidor en http://localhost:8080')
})
