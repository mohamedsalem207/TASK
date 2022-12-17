let email = document.getElementById("email");

window.onload = () => {
  let text = document.createTextNode(localStorage.getItem("email"));
  email.appendChild(text);
};
