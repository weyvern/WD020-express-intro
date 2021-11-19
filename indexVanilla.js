import http from 'http';

const port = process.env.PORT || 5000;

const requestListener = (req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/restaurants') {
      res.writeHead(200);
      res.end('here are some restaurants');
    }
    if (req.url === '/cities') {
      res.writeHead(200);
      res.end('here are some cities');
    }
  }
};

const server = http.createServer(requestListener);

server.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
