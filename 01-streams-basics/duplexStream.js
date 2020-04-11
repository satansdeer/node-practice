const {Duplex} = require('stream')

const duplexStream = new Duplex({read: () => {}})

duplexStream._read(() => {})

duplexStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}


duplexStream.push('First message')
duplexStream.push('Second message')

duplexStream.push('Third message')
duplexStream.push('Fourth message')

duplexStream.end()