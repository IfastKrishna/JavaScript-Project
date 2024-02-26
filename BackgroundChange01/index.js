function changeBackground() {
  const input = prompt(
    "Enter background color and text color separated by a space (e.g., #ffffff black):"
  );
  if (input) {
    const [bgColor, textColor] = input.split(" ");

    if (bgColor) {
      document.body.style.backgroundColor = bgColor;
      document.querySelector(".container h1").innerText =
        "Your Background Color Name: " + bgColor;
    }

    if (textColor) {
      document.body.style.color = textColor;
      document.querySelector(".container a").style.border =
        "1px solid " + textColor;
      document.querySelector(".container a").style.backgroundColor = textColor;
      document.querySelector(".container a").style.color = bgColor;
    }
  }
}
