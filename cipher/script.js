let msg = document.getElementById("textInput").value;
let keyNum = document.getElementById("keyInput").value;
let result = document.getElementById("resultText");
const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");
const resetBtn = document.getElementById("resetBtn");

// ENSURE FORM IS CLEAR ON LOAD AND WHEN RESET BTN CLICKED
document.getElementById("myForm").addEventListener("load", (event) => {
  console.log("reloaded");
  textInput.value = "";
  textInput.textContent = "";
  keyInput.value = "";
  keyInput.textContent = "";
  console.log(textInput.value);
  console.log(keyInput.value);
  document.location.reload(true);
  history.go(0);
});

// FUNCTIONS FOR CAESAR'S CIPHER
// check if uppercase
function isUpperCase(str) {
  return str === str.toUpperCase();
}

// encode each letter
function encode(str, key) {
  let encoded = "";

  for (let i = 0; i < str.length; i++) {
    // only work on upper or lowercase letters
    if (str[i].match(/[\w]/i)) {
      // if uppercase, return uppercase
      if (isUpperCase(str[i])) {
        encoded += String.fromCharCode(
          ((str.charCodeAt(i) + key - 65) % 26) + 65
        );
        console.log(encoded);
      } else {
        // return lowercase letters
        encoded += String.fromCharCode(
          ((str.charCodeAt(i) + key - 97) % 26) + 97
        );
        console.log(encoded);
      }
    } else {
      encoded += str[i];
    }
  }
  return encoded;
}

function decode(str, key) {
  const shift = (26 - key) % 26;
  const decoded = encode(str, shift);
  return decoded;
}

function showEncodedResult() {
  result.textContent = encode(msg, keyNum);
}

function showDecodedResult() {
  result.textContent = decode(msg, keyNum);
}

document
  .getElementById("encodeBtn")
  .addEventListener("click", showEncodedResult);

document
  .getElementById("decodeBtn")
  .addEventListener("click", showDecodedResult);

resetBtn.addEventListener("click", function () {
  console.log("reloaded");
  textInput.value = "";
  textInput.textContent = "";
  keyInput.value = "";
  keyInput.textContent = "";
  console.log(textInput.value);
  console.log(keyInput.value);
  document.location.reload(true);
  history.go(0);
});
