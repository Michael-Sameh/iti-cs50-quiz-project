let title = document.querySelector("title");

let num = Number(localStorage.getItem("index"));

title.textContent = form[num].name;

let i = 0;
let grade = 0;

document.querySelector("h1").textContent = form[num].questions[i].question;
for (let j = 0; j < 4; j++) {
  document.querySelector("div").innerHTML +=
    '<button onclick="theanswer(this)" class="answers">' +
    form[num].questions[i].answers[j] +
    "</button>";
}
let nextpage = document.getElementById("next");
nextpage.textContent = "Next Question";

let finalanswer = "";
function theanswer(btn) {
  finalanswer = btn.textContent;
  document.querySelectorAll(".answers").forEach(function (ans) {
    ans.style.backgroundColor = "";
    ans.style.color = "";
  });
  btn.style.backgroundColor = "#007bff";
  btn.style.color = "white";
}

let rmvnext = document.getElementById("removal");

nextpage.addEventListener("click", function () {
  if (finalanswer == form[num].questions[i].correct) {
    grade++;
  }
  if (i < form[num].questions.length - 1) {
    i++;
    document.querySelector("h1").textContent = form[num].questions[i].question;
    document.querySelector("div").innerHTML = "";
    for (let j = 0; j < 4; j++) {
      document.querySelector("div").innerHTML +=
        '<button   onclick="theanswer(this)" class="answers" >' +
        form[num].questions[i].answers[j] +
        "</button>";
    }
    if (i == form[num].questions.length - 1) {
      nextpage.textContent = "ShowGrade";
    }
  } else {
    document.querySelector("h1").textContent =
      "Your grade is : " + grade + "/" + form[num].questions.length;
    document.querySelector("div").innerHTML = "";
    if (grade > form[num].questions.length / 2) {
      rmvnext.innerHTML = "<h2>You Passed</h2>";
      rmvnext.style.color = "green";
    } else {
      rmvnext.innerHTML = "<h2>You Failed</h2>";
      rmvnext.style.color = "red";
    }
  }
  finalanswer = "";
});
