function firstChar(text) {
  // your code here
	let char = '';
	text = text.trim()
if (text==='') {
	return char
} else {
	return  text.charAt(0);
}
	
	
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
