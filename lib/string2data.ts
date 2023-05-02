import { JsonObject } from "./types"

export const getJson = (text: string): JsonObject[] => {
  const jsonObjects = []
  let openBraces = 0
  let jsonString = ""

  for (const char of text) {
    if (char === "{") {
      openBraces++
    }
    if (openBraces > 0) {
      jsonString += char
    }
    if (char === "}") {
      openBraces--
      if (openBraces === 0) {
        try {
          const jsonObject = JSON.parse(jsonString)
          jsonObjects.push(jsonObject)
          jsonString = ""
        } catch (error) {
          // Invalid JSON, reset the jsonString and continue
          jsonString = ""
        }
      }
    }
  }

  return jsonObjects
}
