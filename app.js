const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// task 1 - respond hello world
app.get("/", async (req, res) => {
    res.send("<h1>Hello, World!</h1>")
})

// task 2 - sum of array of integer
app.post("/sum", async (req, res) => {
    const { array } = req.body
    console.log(array, typeof (array), req.body, typeof (req.body))
    const sum = array.reduce((a, b) => a + b)
    res.status(200).json({ status: 200, data: sum })
})
async function sum(){
    const array = [1,2,3,4,5,6,7,8,9,10]
    const sum = array.reduce((a, b) => a + b)
    console.log(`sum of array of integers ${array} = ${sum}`)
}
sum()

// task 3 - file read and count words
app.get("/file", async (req, res) => {
    const fileData = fs.readFileSync("data.txt", "utf8")
    const splitData =  fileData.split(/\s+/);
    res.status(200).json({ status: 200, text: fileData, count: splitData.length })
})
async function fileRead(){
    const fileData = fs.readFileSync("data.txt", "utf8")
    const splitData =  fileData.split(/\s+/);
    console.log(`count of words in ${fileData} is ${splitData.length}`)

}
fileRead()

app.listen("3001", (err) => {
    if (err) console.log(err)
    console.log("server starts: http://localhost:3001")
})