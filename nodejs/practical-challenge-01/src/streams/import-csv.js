import fs from 'node:fs';

import { parse } from 'csv-parse';

// GET CURRENT ABSOLUTE DIRECTORY/PATH
const meta_url = import.meta.url;

// GET ABSOLUTE PATH USING THE CURRENT FILE DIRECTORY/PATH AS A REFERENCES
const csvPath = new URL('./tasks.csv', import.meta.url);

// console.log(meta_url);
// console.log(csvPath);

const stream = fs.createReadStream(csvPath);

const csvParser = parse({
  delimiter: ',',
  skipEmptyLines: true,
  fromLine: 2 // skip the header line
});

async function csvImporter() {
  const linesParse = stream.pipe(csvParser);

  for await (const line of linesParse) {
    const [title, description] = line;

    await fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description
      })
    });

    // 💡 Uncomment this line to see the import working in slow motion
    // await wait(2000);
  }
}

csvImporter();

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
