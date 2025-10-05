let container = document.getElementById("container");

for (let i = 0; i < form.length; i++) {
  container.innerHTML +=
    '<div class="cards"><p>' +
    form[i].name +
    '</p><br /><br /><div class="button-container"><a href="Formpage.html" class="button">Start</a></div></div>';
}

let clicked = document.querySelectorAll(".button");

clicked.forEach(function (frm, index) {
  frm.addEventListener("click", function () {
    localStorage.setItem("index", index);
  });
});