const http = require('http');
const https = require('https');

const url ="https://jsonplaceholder.typicode.com/posts";

http.createServer((req, serverRes)=>{

    if (req.method === 'GET' && req.url ==='/posts') {
        
                        https.get(url, (httpRes)=>{

                                httpRes.on('data', data=>{
                                        httpRes.setEncoding('utf8');
                                        console.log(data);
                                });
                        httpRes.on('end',()=>{
                                serverRes.end();
                                console.log('Its over');
                        });
                });
        }

}).listen(4444);

console.log('Server is listening');