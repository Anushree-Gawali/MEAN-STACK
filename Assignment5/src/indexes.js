
const http = require('http');

http.createServer((request, response)=>{
   
    let json = {
        title:'CDAC',
        id:'Mumbai'
    }
        response.end(JSON.stringify(json));

   
}).listen(5500);
