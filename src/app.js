/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [".com", ".cl"];
let domainName = [];

window.onload = function() {
  //write your code here
  for (let index = 0; index < pronoun.length; index++) {
    for (let index2 = 0; index2 < adj.length; index2++) {
      for (let index3 = 0; index3 < noun.length; index3++) {
        for (let index4 = 0; index4 < dom.length; index4++) {
          console.log(
            pronoun[index] + adj[index2] + noun[index3] + dom[index4]
          );
          domainName.push(
            pronoun[index] + adj[index2] + noun[index3] + dom[index4]
          );
        }
      }
    }
  }
  console.log(domainName);
};
