const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordFieldOne = document.getElementById("password-variant-one");
let passwordFieldTwo = document.getElementById("password-variant-two");

document.querySelectorAll(".copy-button").forEach(function (button) {
  button.addEventListener("click", function () {
    copyToClipboard(this.parentNode.querySelector("p"));
  });
});

function copyToClipboard(element) {
  var copyText = element.textContent;
  var tempInput = document.createElement("input");
  tempInput.setAttribute("value", copyText);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Copied to clipboard: " + copyText);
}

document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    passwordFieldOne.textContent = "";
    passwordFieldTwo.textContent = "";
    let passwords = generatePassword();
    passwordFieldOne.textContent = passwords[0];
    passwordFieldTwo.textContent = passwords[1];
  });

function generatePassword() {
  let passwordOne = "";
  let passwordTwo = "";
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    passwordOne += characters[randomIndex];
  }
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    passwordTwo += characters[randomIndex];
  }
  return [passwordOne, passwordTwo];
}
