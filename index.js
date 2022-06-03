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
    function rednerABand(band){
        bandName.textContent = band.name
        bandPic.setAttribute("src", band.image)
        bandGenre.textContent = band.genre
        remainingSpots.textContent = band.capacity - band.reserved
    }

    function createBandList(name){
      const listItem = document.createElement("li");
      const bandListContainer = document.querySelector('#band-list');
      listItem.textContent = name;
      listItem.addEventListener('click',() => {
        const itemFound = allBands.find(band => band.name === name);
        rednerABand(itemFound)
      })
      bandListContainer.append(listItem)
    }


    function reserveTicket(){
        const reserveButton = document.getElementById('reserve-button')
        const remainingSpots = document.getElementById('remaining-spots')
        reserveButton.addEventListener('click', event => {
            const currentValue = parseInt(remainingSpots.textContent);
            if (currentValue === 0) return
            const newValue = currentValue - 1
            remainingSpots.textContent = newValue
        })
    }

    rednerFirstBand()
    allBands.forEach(band => {
        createBandList(band.name)
    });
    reserveTicket()
}

document.addEventListener('DOMContentLoaded', () => {
    getBandsData()
})