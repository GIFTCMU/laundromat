const http = require('http')
const fs = require('fs')
const { profile } = require('console')
const indexpage = fs.readFileSync(`${__dirname}/webpages/index.html`,'utf-8')
const processpage = fs.readFileSync(`${__dirname}/webpages/process.html`,'utf-8')
const receiptpage = fs.readFileSync(`${__dirname}/webpages/receipt.html`,'utf-8')
const walletpage = fs.readFileSync(`${__dirname}/webpages/wallet.html`,'utf-8')
const loginpage = fs.readFileSync(`${__dirname}/webpages/login.html`,'utf-8')
const profilepage = fs.readFileSync(`${__dirname}/webpages/profile.html`,'utf-8')
const server = http.createServer((req,res)=>{
    const pathname =req.url
    console.log("url =",pathname)
    if(pathname==="/"|| pathname==="/home"){
        res.end(indexpage)
    }else if( pathname==="/process"){
        res.end(processpage)
    }else if( pathname==="/receipt"){
        res.end(receiptpage)
    }else if( pathname==="/wallet"){
        res.end(walletpage)
    }else if( pathname==="/login"){
        res.end(loginpage)
    }else if( pathname==="/profile"){
        res.end(profilepage)
    }else {
        res.writeHead(404)
        res.end("<h1>Not found</h1>")
    }
})
server.listen(8080,"localhost",()=>{
    console.log("start sever in port 8080")
})