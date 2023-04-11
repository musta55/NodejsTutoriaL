const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  // routing

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
      case "/about-me":
        res.statusCode = 301;       //ridirect
        res.setHeader('Location','/about')
        res.end();
        break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // Send an HTML file to the browser
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      console.log(data);

      res.end(data);
    }
  });
});

server.listen(3001, "localhost", () => {
  console.log("Listening for requests on port 3001");
});


// Learnings

// Request, responses
// Routing
// Status Code