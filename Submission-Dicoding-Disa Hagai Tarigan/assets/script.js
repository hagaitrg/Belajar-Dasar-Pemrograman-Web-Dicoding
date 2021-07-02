const contactButton = document.querySelector("#contactButton");

contactButton.addEventListener("click", function (evet) {
  window.alert("We have received your message :)");
  location.reload();
});
