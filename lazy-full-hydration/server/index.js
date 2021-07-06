import express from 'express'
import ssr from './ssr'

const app = express()

app.get('/', ssr())
app.use(express.static('dist/client', {
  extensions: ['js']
}))

app.listen(3000, () => console.log('Listening on port 3000!'))
