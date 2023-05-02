import { getJSON } from "../string2data"

test("getJSON should return an array of valid JSON objects and arrays", () => {
  const text = `
    { "a": true },
    { "a": true, "b": { "c": true } },
    [{ "a": true, "b": { "c": true } }],
    { "a": true, "b":[{ "c": true }] }
  `

  const expectedResult = [
    { a: true },
    { a: true, b: { c: true } },
    [{ a: true, b: { c: true } }],
    { a: true, b: [{ c: true }] },
  ]

  expect(getJSON(text)).toEqual(expectedResult)
})

test("getJSON should return an empty array when there are no valid JSON objects or arrays", () => {
  const text = "This is a text without any JSON objects or arrays."
  expect(getJSON(text)).toEqual([])
})

test("getJSON should ignore invalid JSON objects or arrays", () => {
  const text = `
    { "a": true, },
    { "a": true, "b": { "c": true, } },
    [{ "a": true, "b": { "c": true, } }],
    { "a": true, "b":[{ "c": true, }] }
  `

  expect(getJSON(text)).toEqual([])
})
