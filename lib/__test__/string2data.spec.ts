import { JsonObject } from "../types"
import { getJson } from "../string2data"

describe("getJson", () => {
  it("should extract JSON objects from a given string", () => {
    const text =
      'this is a big dynamic text with JSON { "title": "My Title" } and { "description": "A description" }'
    const expectedResult: JsonObject[] = [
      { title: "My Title" },
      { description: "A description" },
    ]

    const result = getJson(text)
    expect(result).toEqual(expectedResult)
  })

  it("should extract JSON objects with complex properties", () => {
    const text =
      'this is a big dynamic text with JSON { "title": "My Title", "labels": ["label one", "label two"], "active": true } and { "description": "A description", "author": { "name": "Author Name" } }'
    const expectedResult: JsonObject[] = [
      {
        title: "My Title",
        labels: ["label one", "label two"],
        active: true,
      },
      {
        description: "A description",
        author: { name: "Author Name" },
      },
    ]

    const result = getJson(text)
    expect(result).toEqual(expectedResult)
  })

  it("should return an empty array if no JSON objects are found", () => {
    const text = "this is a text without JSON objects"
    const expectedResult: JsonObject[] = []

    const result = getJson(text)
    expect(result).toEqual(expectedResult)
  })

  it("should ignore invalid JSON objects", () => {
    const text = 'this is a text with invalid JSON { "title": }'
    const expectedResult: JsonObject[] = []

    const result = getJson(text)
    expect(result).toEqual(expectedResult)
  })
})
