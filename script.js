const textElement = document.getElementById('typing-text');
const text = textElement.textContent; // Get text from the element
let index = 0;

function typeWriter() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index); // Append next character to textContent
    index++;
  } else {
    // Reset index to 0 when end of text is reached
    index = 0;
    textElement.textContent = "";
  }
  setTimeout(typeWriter, 400); // Continue typing with a delay
}

typeWriter();
