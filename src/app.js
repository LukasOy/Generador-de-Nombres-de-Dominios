/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.querySelector("#GND").innerHTML = NombreDominio();

function NombreDominio() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let P = 0;
  let A = 0;
  let N = 0;

  let i = "";

  for (let P = 0; P < pronoun.length; P++) {
    for (let A = 0; A < adj.length; A++) {
      for (let N = 0; N < noun.length; N++) {
        i += pronoun[P] + adj[A] + noun[N] + ".com <br>";
      }
    }
  }
  return i;
}
