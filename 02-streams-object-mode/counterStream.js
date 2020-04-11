const { Readable, Writable } = require("stream");

const createCounterReader = delay => {
  let counter = 0;
  const reader = new Readable({
    objectMode: true,
    read() {}
  });
  setInterval(() => {
    counter += 1;
    console.log("reading:", counter);
    reader.push(counter);
  }, delay);
  return reader;
};

const counterReader = createCounterReader(1000);

const logWriter = new Writable({
  objectMode: true,
  write: (chunk, _, done) => {
    console.log("writing:", chunk);
    done();
  }
});

counterReader.pipe(logWriter);
