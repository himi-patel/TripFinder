document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", function () {
          mobileMenu.classList.toggle("hidden");
      });
  }

  // Source & Destination dropdown change event
  const source = document.getElementById("source");
  const destination = document.getElementById("destination");
  const optionsSection = document.getElementById("options");

  function showOptions() {
      if (source?.value && destination?.value) {
          optionsSection?.classList.remove("hidden");
      } else {
          optionsSection?.classList.add("hidden");
      }
  }

  source?.addEventListener("change", showOptions);
  destination?.addEventListener("change", showOptions);

  // FAQ toggle
  const questions = document.querySelectorAll(".w-full.text-left");
  questions.forEach((question, index) => {
      question.addEventListener("click", () => {
          const answer = document.getElementById(`faq-${index + 1}-answer`);
          answer?.classList.toggle("hidden");
      });
  });

  // Option button click event
  const buttons = document.querySelectorAll(".option-btn");
  const optionTitle = document.getElementById("option-title");
  const optionLinks = document.getElementById("option-links");
  const linksSection = document.getElementById("links");

  buttons.forEach((button) => {
      button.addEventListener("click", function () {
          if (optionTitle && optionLinks && linksSection) {
              optionTitle.textContent = this.innerText;
              optionLinks.innerHTML = `<a href="#" class="text-blue-500 hover:underline">Link to ${this.innerText} information</a>`;
              linksSection.classList.remove("hidden");
          }
      });
  });
});
