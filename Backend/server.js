require('dotenv').config()
const app = require("./src/app")
const connectDb = require("./src/config/db")
const dns = require("dns")

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

connectDb()

app.listen(3000, ()=>{
    console.log("Server running on port 3000...")
})