//for using both import and require
import { createRequire } from "module";
const require = createRequire(import.meta.url);

//franc npm
import { franc } from "franc";
//langs npm
const langs = require("langs");

const input = process.argv[2];
const langCode = franc(input);

if (langCode === "und") {
  console.log("Sorry, Couldn't figure out!");
} else {
  const language = langs.where("3", langCode);
  console.log("Our guess is " + language.name);
}
