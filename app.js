const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Jenkins CI/CD Demo</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
          }
          h1 {
            color: #2c3e50;
          }
          .status {
            display: inline-block;
            padding: 10px 20px;
            background: #27ae60;
            color: white;
            border-radius: 5px;
          }
        </style>
      </head>

      <body>
        <h1>Employee Management Application</h1>
        <p class="status">Build Successful 🚀</p>
        <p>Deployed through Jenkins CI/CD</p>
        <p>Version: 2.0</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
