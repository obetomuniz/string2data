import { getJSON } from "../../../dist/esm/index.js"

const data = getJSON(
  `this is a big dynamic text with JSON { "title": "My Title", "labels": ["label one", "label two"], "active": true } and { "description": "A description", "author": { "name": "Author Name" } }`
)

console.log(data)
