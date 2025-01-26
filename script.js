document.getElementById("source").addEventListener("change", showOptions);
document.getElementById("destination").addEventListener("change", showOptions);

function showOptions() {
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;
  const optionsSection = document.getElementById("options");

  if (source && destination) {
    optionsSection.classList.remove("hidden");
  } else {
    optionsSection.classList.add("hidden");
  }
}

const buttons = document.querySelectorAll(".option-btn");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    const option = this.innerText.toLowerCase().replace(/\s+/g, '-');
    document.getElementById("option-title").textContent = this.innerText;
    document.getElementById("option-links").innerHTML = `<a href="#" class="text-blue-500 hover:underline">Link to ${this.innerText} information</a>`;
    document.getElementById("links").classList.remove("hidden");
  });
});