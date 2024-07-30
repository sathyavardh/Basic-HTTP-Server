const http = require("http");

// Creating server
const server = http.createServer((req, res) => {
    // Setting the content type to text/html
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Sending the response with some HTML and CSS
    res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Styled Response</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to My Server</h1>
                <p>Hello World!<p>
                <p>This is the response from the server with some styling.</p>
            </div>
        </body>
        </html>
    `);

    res.end();
});

// Server listening to port 3000
server.listen(3000, () => {
    console.log("Server is Running on port 3000");
});
