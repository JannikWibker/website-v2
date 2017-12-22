const express = require('express')
const compression = require('compression')
const next = require('next')

const dev = process.argv[2] === 'dev'

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(compression())

    server.get('*', (req, res) => handle(req, res))

    server.listen(process.env.PORT || 3000, (err) => {
      if (err) throw err
      if(dev) console.log('> dev mode')
      console.log('> Ready on http://localhost:3000')
    })
})
