const bandsApi = 'http://localhost:3000/bands';

function getBandsData(){
    return fetch(bandsApi)
    .then(response => response.json())
    .then(data => createPageInteractions(data));
}

function createPageInteractions(allBands){
    const bandName = document.querySelector('#band-name');
    const bandPic = document.querySelector('#band-image');
    const bandGenre = document.querySelector('#band-genre');
    const remainingSpots = document.querySelector('#remaining-spots');

    function rednerFirstBand(){
        const firstBandData = allBands[0]
        bandName.textContent = firstBandData.name
        bandPic.setAttribute("src", firstBandData.image)
        bandGenre.textContent = firstBandData.genre
        remainingSpots.textContent = firstBandData.capacity - firstBandData.reserved

    }
rednerFirstBand()
}


document.addEventListener('DOMContentLoaded', () => {
    getBandsData()
})