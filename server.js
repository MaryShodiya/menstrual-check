const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/checker') {
    fs.readFile('checker.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    })
  }else if (page == '/img/calendar3.svg'){             
      fs.readFile('./img/calendar3.svg', function(err, data) {
          res.writeHead(200, {'Content-Type':'image/svg+xml'});
          res.write(data);
          res.end();
      })
  } else if (page == '/img/Grape.svg'){
    fs.readFile('./img/Grape.svg', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/svg+xml'});
        res.write(data);
        res.end();
    })
} else if (page == '/img/menstrual_pad.svg'){
    fs.readFile('./img/menstrual_pad.svg', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/svg+xml'});
        res.write(data);
        res.end();
    })
} else if (page == '/img/grimgiant-nude-woman.svg'){
    fs.readFile('./img/grimgiant-nude-woman.svg', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/svg+xml'});
        res.write(data);
        res.end();
    })
} else if (page == '/img/sanitary-napkin.svg'){
    fs.readFile('./img/sanitary-napkin.svg', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/svg+xml'});
        res.write(data);
        res.end();
    })
} else if (page == '/img/thatsmyboy-Simple-Red-Checkmark.svg'){
    fs.readFile('./img/thatsmyboy-Simple-Red-Checkmark.svg', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/svg+xml'});
        res.write(data);
        res.end();
    })
} else if (page == '/img/1.jpeg'){
  fs.readFile('./img/1.jpeg', function(err, data) {
      res.writeHead(200, {'Content-Type':'image/jpeg'});
      res.write(data);
      res.end();
  })


}else if (page == '/css/main.css'){
    fs.readFile('css/main.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
