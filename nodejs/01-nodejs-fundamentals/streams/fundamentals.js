// Netflix & Spotify

// Importing customers via CSV (Excel)
// 1GB - 1.000.000 lines
// POST /upload import.csv

// 10mb/s - 100s (1024 / 10)

// 100s -> Insertions on database

// 10mb/s -> 10.000 lines

// Readable Streams / Writable Streams

// Streams ->
// process.stdin
//   .pipe(process.stdout)

import {
  Duplex,
  Readable,
  Transform,
  Writable
} from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buffer = Buffer.from(String(i));

        this.push(buffer);
      }
    }, 1000);
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());
