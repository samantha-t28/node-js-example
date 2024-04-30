// Importing the default function from square.js
import square from './square.js'
// Importing only the name from square.js
import { name } from './square.js'
// Importing lodash library
import _ from 'lodash';

// This is using the default export of square.js
const squareDimensions = square(2, 2);
console.log(squareDimensions)

// This is using the named export "name" from square.js
console.log(name)

// Gets the timestamp of the number of milliseconds from lodash library
const now = _.now();

console.log(now);