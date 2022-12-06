/*
[1]-set characters to create the serial.
[2]-set serial characters count.
[3]-create empty variable to store the serial.
[4]-create random number + access sequence.
[5]-store the random element in the empty variable.
[6]-loop x count.
[7]-change the serial element content with the serial variable.
*/

let btnEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

btnEl.onclick = function () {
  let characters =
    "1234567890aqwertyuioplkjhgfdszxcvbnmAZXSCDVFBGNHMJKLOPIUYTREWQ#@%$&!";
  let charsCount = 10;
  let randomSerial = "";
  for (var i = 0; i < charsCount; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }
  serialEl.innerHTML = randomSerial;
};
