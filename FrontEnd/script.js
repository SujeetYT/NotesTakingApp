const newNote = document.querySelector(".newNote");
const add = document.querySelector(".Add h2");
const background = document.querySelector(".backgroundOverlay");
const submit = document.querySelector("#submit");


background.addEventListener("click", close);

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    // fetch method to be written
    close();
});

function close(){
    newNote.style.display = "none";
}
add.addEventListener("click", ()=>{
    newNote.style.display = "flex";
});