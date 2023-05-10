/* eslint-disable */
import "./style.css";

//write your code here
window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
function generateExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  let theWho = who[Math.floor(Math.random() * who.length)];
  let theAction = action[Math.floor(Math.random() * action.length)];
  let theWhat = what[Math.floor(Math.random() * what.length)];
  let theWhen = when[Math.floor(Math.random() * when.length)];

  return theWho + " " + theAction + " " + theWhat + " " + theWhen + "!";
}
