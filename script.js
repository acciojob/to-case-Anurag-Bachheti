function toCase(text) {
	  let lowerCase = text.toLowerCase();
	  let upperCase = text.toUpperCase();
	  return lowerCase.concat('-', upperCase)
}
// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
