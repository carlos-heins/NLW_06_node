import express from 'express'

const app = express()


app.get("/test", (req, res) => {
    return res.send("Olá garai")
})


app.post("/test-post", (req, res) => {
    return res.send("olá, nlw: método post que tu já conhece fião")
})
app.listen(3000, () => {
    console.log("Server is running on port: 3000")
})