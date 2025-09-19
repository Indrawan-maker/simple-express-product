import express from 'express'

const app = express()

const PORT = 8000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('<html><body>Hello From express</body></html>')
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
