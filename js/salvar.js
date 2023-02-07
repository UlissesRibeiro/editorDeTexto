const saveButton = document.getElementById("saveButton");
const textInput = document.getElementById("texto");

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  const text = textInput.value;
  
  const a = document.createElement("a");
  const file = new Blob([text], {type: 'text/plain'});
  a.href = URL.createObjectURL(file);
  a.download = "arquivo.txt";
  a.click();
});