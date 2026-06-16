const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");

input.addEventListener("keyup", () => {

  const value = input.value.toLowerCase();
  let found = false;

  cards.forEach(card => {

    const text = card.innerText.toLowerCase();

    if(text.includes(value)){
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }

  });

  if(found){
    noResults.classList.add("hidden");
  } else {
    noResults.classList.remove("hidden");
  }

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }

  });

});

console.log("Check-in Cultural cargado correctamente");
