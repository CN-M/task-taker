import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
dotenv.config()

const { PORT } = process.env

const app: Express = express()
const port: string | number = PORT || 3000

app.get('/', (req: Request, res: Response) => {
    const msg = req.query.msg
    const name = req.query.name
    const age = req.query.age

    console.log(msg)
    console.log(name)
    console.log(age)
    res.json({
        message: "Hello Guys!"
    })
})


app.listen(port, () => {
  console.log(`Server running on PORT ${port}`)  
})