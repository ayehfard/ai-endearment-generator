function displayTerm(response) {
  new Typewriter("#term", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}
function generateTerm(event) {
  event.preventDefault();
  let userInstructionsElement = document.querySelector("#user-instructions");
  let apiKey = "b36tf90a76ca9d0b31o886f434445568";
  let context =
    "You are me. You have a boyfriend named Nima. You should use the user instructions and include it in your term of endearment. Add more to the term of endearment so it's a full sentence or two sentences. make it personal based on what I've told you about Nima. We are in a long distance relationship. every output should be like the following example: `Nima, you're my (your answer)`. Also, add an emoji related to the term of endearment at the end. It should be a phrase and not one word. Here is some context about Nima: `He is an extremely intelligent person. He loves science and is studying Pharmaceutical Biotechnolgy. He loves jazz, woodworking, and is a poet himself.`";
  let prompt = `user intructions: Generate a term of endearment based on ${userInstructionsElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let termElement = document.querySelector("#term");
  termElement.innerHTML = "Generating term...";
  termElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayTerm);
}

let termFormElement = document.querySelector("#term-form");
termFormElement.addEventListener("submit", generateTerm);
