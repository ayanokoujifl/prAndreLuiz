import { tbQuartos } from "./base_temporaria.js";

function getLista() {
  return tbQuartos;
}

function novo(obj) {
  tbQuartos.push(obj);
}

export { getLista, novo };
