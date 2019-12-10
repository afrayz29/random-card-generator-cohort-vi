/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
    let suitArray = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let numberArray =["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
  let suit = suitArray[Math.floor(Math.random()*suiteArray.length)];
  let numb = numberArray[Math.floor(Math.random()*numberArray.length)];
  console.log("suit",suit);
  console.log("numb",numb);
  if (suit==="") || suit ===""){
      document
      .querySelector("custome-card-header")
      .classList.add("Heart-diamond");
      document
      .querySelector("custom-card-footer")
      .classList.add("heart-diamon");
  }
  
  














};
