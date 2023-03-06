const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>welcome to raw</title></head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  } else if (req.url == "/users") {
    res.write("<html>");
    res.write("<head><title>welcome to raw</title></head>");
    res.write(
      "<body><ul><li>user1</li><li>user2</li><li>user3</li><li>user4</li><li>user5</li><li>user6</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  } else if (req.url === "/create-user" && req.method === "POST") {
    const data = [];
    req.on("data", (chunk) => {
      //   console.log(chunk.toString());
      data.push(chunk);
    });
    return req.on("end", (err) => {
      const final = Buffer.concat(data).toString().split("=")[1];
      console.log(final);
    });
    // console.log(data.toString());
  }
});

server.listen(3000);
