
function generatePrompt() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  if (input.trim() === "") {
    output.innerText = "Silakan masukkan topik terlebih dahulu.";
  } else {
    output.innerText = `Prompt AI untuk: "${input}"\nContoh: Jelaskan tentang ${input} untuk orang awam.`;
  }
}
