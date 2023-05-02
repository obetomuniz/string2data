import { JSONObject, JSONArray } from "./types"

function isJSONObject(value: unknown): value is JSONObject {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function isJSONArray(value: unknown): value is JSONArray {
  return Array.isArray(value)
}

function isValidJSON(text: string): boolean {
  try {
    const value = JSON.parse(text)
    return isJSONObject(value) || isJSONArray(value)
  } catch {
    return false
  }
}

function extractJSON(text: string): string[] {
  const regex =
    /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}|(?:\[(?:[^\[\]]|\[(?:[^\[\]]|\[[^\[\]]*\])*\])*\])/g
  const matches = text.match(regex) || []
  return matches
}

export function getJSON(text: string): (JSONObject | JSONArray)[] {
  const matches = extractJSON(text)
  return matches
    .filter((match) => isValidJSON(match))
    .map((match) => JSON.parse(match))
}
