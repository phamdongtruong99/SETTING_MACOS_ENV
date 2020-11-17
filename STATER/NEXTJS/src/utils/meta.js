  
import fs from "fs";
import path from "path";

/**
 * Reads and returns content of a JSON file.
 * @param {string|string[]} paths Path segment(s) to the JSON file, relative to the project's directory.
 */
export function readJson(...paths) {
  return JSON.parse(
    fs.readFileSync(path.join(process.cwd(), ...paths), "utf-8")
  );
}

/**
 * Reads and returns content of the project's package.json.
 */
export function readPackageJson() {
  return readJson("package.json");
}

/**
 * Reads and returns content of a JSON file in `contents/` directory.
 * @param {string} path Path to the JSON file, relative to `contents/` directory.
 */
export function readContentJson(path) {
  return readJson("contents", path);
}
