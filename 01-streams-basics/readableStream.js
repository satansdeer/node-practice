const { Readable } = require('stream');

const rs = new Readable();
rs.push('ping ');
rs.push('pong\n');
rs.push(null);

rs.pipe(process.stdout);