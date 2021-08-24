const http = require('http')
const fs = require('fs')



server = http.createServer((req, res)=>{

  if (req.url==="/" && req.method==="GET"){
    // console.log(req)
    res.setHeader('Content-Type', 'text/html')
    res.write("<html>")
    res.write("<h1>Node JS by Abhiram.</h1>")
    res.write("<form action='/message' method='post'><input type='text' name='message'/><button type='submit'>Submit</button></form>")
    res.write("</html>")
    res.end()
    return
  }

  if (req.url==="/message" && req.method==="POST"){

    const body = []
    req.on('data', (chunk)=>{
      console.log(chunk)
      body.push(chunk)
    })

    req.on('end', ()=>{
      const parsedBody = Buffer.concat(body).toString()
      fs.writeFileSync("message.txt", parsedBody.split("=")[1])
    })

    res.statusCode=302
    res.setHeader('Location', '/')
    return res.end()
  }

})


server.listen(3000)
