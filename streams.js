const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //Solution 1
  // this works fine but node has to load the entire file in memory
  // and only then it can send the data
  // fs.readFile('test-file.txt', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   res.end(data); // if no error send data back to the client
  // });

  // Solution 2: Streams
  // Instead of storing all the data into a variable, data,
  // like above, we will just stream
  // as we receive each chunk of data, we send it to client as a response
  // as a readable stream and we can consume it chunk by chunk
  // const readable = fs.createReadStream('test1-file.txt')
  // readable.on('data', chunk => {
  //   res.write(chunk) // use write method to send every data into the response stream and to the client
  // });
  // after the stream is finished reading the data, the end signals that no more data will be written -
  // no need to pass anymore data since we are already done.
  // this solution still has issue since
  // the incoming readable stream cannot be handled fast enough
  // this is called back pressure
  // readable.on('end', ()=>{
  //   res.end();
  // });
  // readable.on('error', err=> {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('File not found!');
  // })
  // Solution 3: Use pipe operator - handles the issue of data coming in and going out
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // we take a readable source and pipe it to a writeableDest. In our case , res
  // readableSource.pipe(writeableDest)


});

server.listen(8000, '127.0.0.1', () => {
  console.log("Listening...")
});
