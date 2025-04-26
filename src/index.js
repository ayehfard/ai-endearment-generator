function generateTerm(event) {
  event.preventDefault();

  new Typewriter("#term", {
    strings: "Generating term...",
    autoStart: true,
    delay: 30,
  });
}

let termFormElement = document.querySelector("#term-form");
termFormElement.addEventListener("submit", generateTerm);
