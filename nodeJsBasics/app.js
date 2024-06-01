const http = require('http');

const port = 5050;

const dbConnection = false;

if (!dbConnection) {
   process.exit(1);
}

const server = http.createServer((req, res) => {
   switch (req.url) {
      case '/':
         res.end(`
   <html>
    <head>
       <title> First node app </title>
    </head><body>
          <h1> Welcome to my node app</h1>
       </body></>
   </html>
 `);
         break;
      case '/admin':
         res.end('welcome to the admin page');
         break;
      case '/user':
         res.end();
         break;

      default:
         res.end('not found');
   };
});

server.listen(5050, () => {
   console.log(`server is now listening to port ${port}`)
});