// Get the combined text from the HTML element
const combinedTextElement = document.getElementById('descriptive_summary');
const combinedText = combinedTextElement.innerHTML.trim();
if (combinedText.length > 0) {

  // Replace the unwanted characters and split the combined text into an array of strings
  var inputList = combinedText
    .replace(/', '', '/g, ' ')
    .replace(/\['/g, '')
    .replace(/'\]/g, '')
    .replace(/", '', '/g, ' ')
    .replace(/', '', "/g, ' ')
    .replace(/', '', '/g, ' ')
    .replace(/', '', '/g, ' ');

  // Clear the content of the HTML element
  combinedTextElement.innerHTML = '';
  combinedTextElement.innerHTML = inputList;
}
