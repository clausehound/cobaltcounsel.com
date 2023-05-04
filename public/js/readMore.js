for (const toggleEl of document.getElementsByClassName("readMoreToggle")) 
  { toggleEl.addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}