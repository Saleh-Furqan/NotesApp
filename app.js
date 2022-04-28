let title = document.getElementById("title");

let submit = document.querySelector(".submit");
let desc = document.getElementById("desc");

let notesElem = document.querySelector(".notes");

let notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((element) => {
    addNotes(element);
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addNotes();
});

function addNotes(obj) {
  let card = document.createElement("div");
  card.classList.add("card");
  let titleVal = title.value;
  let descVal = desc.value;
  if (obj) {
    titleVal = obj.title;
    descVal = obj.desc;
  }
  card.classList.add("card");

  if (titleVal) {
    card.innerHTML = `<h3>${titleVal}</h3>
      <p class="ptag">${descVal}</p>
      <button class="del">Delete</button>`;
    notesElem.appendChild(card);
    update();
  }
  let clear = card.querySelector(".del");
  clear.addEventListener("click", () => {
    card.remove();
    update();
  });
}

function update() {
  let card = document.querySelectorAll(".card");
  let arr = [];
  card.forEach((element) => {
    arr.push({
      title: element.children[0].innerText,
      desc: element.children[1].innerText,
    });
  });
  localStorage.setItem("notes", JSON.stringify(arr));
}
