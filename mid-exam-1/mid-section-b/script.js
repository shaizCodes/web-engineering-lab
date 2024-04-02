const current = document.querySelector("#current");
const thumbnails = document.querySelectorAll("#navigation>img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener('click', getPrevious);
next.addEventListener('click', getNext);

function getPrevious() {
    // console.log("previous selected...")
    for (let i=0; i<thumbnails.length; i++) {
        if(thumbnails[i].classList.contains("active")) {
            thumbnails[i].classList.toggle("active");
            thumbnails[i==0 ? thumbnails.length-1 : i-1].classList.toggle("active");
            updateCurrent();
            break;
        }
    }
}
function getNext() {
    for (let i=0; i<thumbnails.length; i++) {
        if(thumbnails[i].classList.contains("active")) {
            thumbnails[i].classList.toggle("active");
            thumbnails[i==thumbnails.length-1 ? 0 : i+1].classList.toggle("active");
            updateCurrent();
            break;
        }
    }
}


function updateCurrent() {
    current.src = document.querySelector(".active").src;
}