const bandListElement = document.getElementById("band-list");
const bandImageElement = document.getElementById("band-image");

const bandNameElement = document.getElementById("band-name");
const bandGenreElement = document.getElementById("band-genre");
const remainingSpotsElement = document.getElementById("remaining-spots");
const reserveButtonElement = document.getElementById("reserve-button");

fetch("http://localhost:3000/bands")
.then(response => response.json())
.then(json => {
    for (const band of json) {
        const bandLi = document.createElement("li");
        bandLi.textContent = band.name;
        bandListElement.appendChild(bandLi);
        bandLi.addEventListener('click', () => {
            showDetails(band);
        })
    }

    showDetails(json[0]);
});

function showDetails(band) {
    bandImageElement.src = band.image;
    bandNameElement.textContent = band.name;
    bandGenreElement.textContent = band.genre;
    remainingSpotsElement.textContent = parseInt(band.capacity) - parseInt(band.reserved);
}


reserveButtonElement.addEventListener('click', () => {
    const remainingSpots = parseInt(remainingSpotsElement.textContent);
    if (remainingSpots > 0) {
        const spotsLeft = remainingSpots - 1;
        remainingSpotsElement.textContent = spotsLeft;
    }
});