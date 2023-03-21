let suit = ['clubs', 'spades', 'diamonds', 'hearts'];
let picture = ['jack', 'queen', 'king', 'ace'];
let pictureLetter = picture.map((word) => word[0]).join('').toUpperCase();
console.log(pictureLetter);

let cards = [];

for (let i = 2; i <= 10; i++) {
    for (let j = 0; j < suit.length; j++) {
        cardInfo = `<div class="card__info">${i}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;

        cards.push(`<div class="card">
        ${cardInfo}
        ${cardInfo}
        </div>`)
    }
}

for (let i = 0; i < pictureLetter.length - 1; i++) {
    for (let j = 0; j < suit.length; j++) {
        cardInfo = `<div class="card__info">${pictureLetter[i]}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;
        cardPerson = `<img class="person" src="images/${picture[i]}.svg" alt="${picture[i]}"></img>`;
        cards.push(`<div class="card card--person">
        ${cardInfo}
        ${cardPerson}
        ${cardInfo}
        </div>`)
        // if (picture[i] === 3) {
        //     for (i = 0; i < pictureLetter.length; i++) {
        //         for (j = 0; j < suit.length; j++) {
        //             cardInfo = `<div class="card__info">A<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;
        //             cardAce = `<img class="person" src="images/${suit[j]}.svg" alt="${suit[j]}"></img>`;
        //             cards.push(`<div class="card card--person">
        //             ${cardInfo}
        //             ${cardAce}
        //             ${cardInfo}
        //             </div>`)    
        //         }
        //     }
        // } // тут пытался через условие сделать, но что-то пошло не так, решил оставить, чтоб ты потом показал как правильно)

    }
    
}

for (let i = 0; i < 1; i++) {
    for (let j = 0; j < suit.length; j++) {
        cardInfo = `<div class="card__info">A<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;
        cardAce = `<img class="person" src="images/${suit[j]}.svg" alt="${suit[j]}"></img>`;
        cards.push(`<div class="card card--person">
        ${cardInfo}
        ${cardAce}
        ${cardInfo}
        </div>`)
    }
}

cards = cards.join('');
document.write(`<div class="wrapper">${cards}</div>`);


