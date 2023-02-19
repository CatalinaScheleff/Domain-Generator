/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  generateDomain();
  console.log("Hello Rigo from the console!");
};

let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".net"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        for (let c = 0; c < dom.length; c++) {
          let nuevo = document.createElement("div");
          nuevo.innerHTML = pronoun[i] + adj[a] + noun[b] + dom[c];
          document.querySelector("p").appendChild(nuevo);
        }
      }
    }
  }
};
generateDomain();

// let pronoun = ['the','our'];
//   let adj = ['great', 'big' ];
//   let noun = ['jogger','racoon'];
//   let dom = ['.com', '.net'];

//   for (let i=0;i<pronoun.length;i++) {
//     for (let a=0;a<adj.lenght;a++) {
//       for (let b=0;b<noun.lenght;b++) {
//         for (let c=0;c<dom.lenght;c++) {
//           let div = document.createElement('div');
//           div.InnerText = `${pronoun[i]}${adj[a]}${noun[b]}${dom[c]}`
//           document.body.appendChild(div);
//         }
//       }
//     }
//   }
