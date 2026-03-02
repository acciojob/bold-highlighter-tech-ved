function highlight() {
  const boldWords = document.querySelectorAll("strong");
  boldWords.forEach(el => {
    el.style.color = "rgb(0, 128, 0)";
  });
}

function return_normal() {
  const boldWords = document.querySelectorAll("strong");
  boldWords.forEach(el => {
    el.style.color = "rgb(0, 0, 0)";
  });
}



