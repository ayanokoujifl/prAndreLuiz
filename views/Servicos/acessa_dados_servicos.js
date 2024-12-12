import { tbServicos } from "./base_temporaria.js";

function getLista() {
  return tbServicos;
}

function novo(obj) {
  tbServicos.push(obj);
}

export { getLista, novo };
