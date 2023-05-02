# string2data

Extract structured data from text with ease using a simple and intuitive syntax.

## Installation

```
npm install string2data
```

## Usage

```javascript
import { getJSON } from "string2data"

getJSON(
  `this is a big dynamic text with JSON { "title": "My Title", "labels": ["label one", "label two"], "active": true } and { "description": "A description", "author": { "name": "Author Name" } }`
)

// Output:
//
// [
//   {
//     "title": "My Title",
//     "labels": [
//       "label one",
//       "label two"
//     ],
//     "active": true
//   },
//   {
//     "description": "A description",
//     "author": {
//       "name": "Author Name"
//     }
//   }
// ]
```
