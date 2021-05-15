# write.js

> Normalized `stdout.write()` that works on both Node.js and PhantomJS.

## Install

```sh
$ npm install --save write.js
```

## API

### `write(message)`

#### `message`

*Required*  
Type: `string`  

Output message.

## Motivation

I wanted to persist a log message on the REPL but I have discovered that this is not so trivial.
There's a bunch of weird tricks to simply append a new log entry and keeping the output clean at the same time.  

This module abstracts all these small gotchas so you can focus on what really matters. 

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
