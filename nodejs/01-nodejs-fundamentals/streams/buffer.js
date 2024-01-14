const buffer = Buffer.from("ok");

console.log("Hexadecimal (16): ", buffer);
// Output: <Buffer 6f 6b>

console.log("\nDecimal (10): ", buffer.toJSON());
// Output: { type: 'Buffer', data: [ 111, 107 ] }
