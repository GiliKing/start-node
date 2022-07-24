const http = require('http');


const server = http.createServer((req, res) => {
    // console.log(req)
    if(req.url === '/'){
        res.end('Hwllo World');
    }

    if(req.url === '/about') {
        res.end('Here is about page ')
    }

    res.end(`
    <h1>Ooops!</h1>
    <p>We cant seem to find the page your are looking for</p>
    <a href="/">Back home</a>
    `)
})

server.listen(3000)