const app = require('./app')

const port = process.env.PORT || 8500
const d = process.env.NODE_ENV_PROC || 'a'
app.listen(port, () => {
  console.info(`Listening: http://localhost:${port}`)
  console.info(d)
})
