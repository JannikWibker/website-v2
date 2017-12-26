const express = require('express')
const body = require('body-parser')
const compression = require('compression')
const next = require('next')

// this is just a placeholder
const db = {fn: () => console.log('database'), secret_info: '123abc'}

const dev = process.argv[2] === 'dev'

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(compression())

    server.use(body.json())

    server.use((req, res, next) => {
      req.db = db
      next()
    })

    const api = (db) => (req, res, next) => {
      console.log('api access')
      next()
    }



    server.use('/api', api(db))

    server.get('*', (req, res) => handle(req, res))

    server.listen(process.env.PORT || 3000, (err) => {
      if (err) throw err
      if(dev) console.log('> dev mode')
      console.log('> Ready on http://localhost:3000')
    })
})
