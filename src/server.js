

import { appendFile } from "node:fs"
import http from "node:http"


const server = http.createServer((request, response) => {
  return response.end("Hello")
})

server.listen(3333)
