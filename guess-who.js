const redCards = document.getElementsByClassName('redCard');
const blueCards = document.getElementsByClassName('blueCard');
const myCard = document.querySelector('.myCard');
let cards = [];
let randomCard = cards[0];
const communityBtn = document.getElementById('community-btn');
const theOfficeCards = [
    "Jim Halpert",
    "Pam Beesly",
    "Dwight Schrute",
    "Michael Scott",
    "Angela Martin",
    "Kevin Malone",
    "Phyllis Lapin",
    "Jan Levinson",
    "Meredith Palmer",
    "Stanley Hudson",
    "Ryan Howard",
    "Toby Flenderson",
    "Oscar Martinez",
    "Kelly Kapoor",
    "Creed Bratton",
    "Darryl Philbin",
    "Roy Anderson",
    "David Wallace",
    "Andy Bernard",
    "Erin Hannon",
    "Holly Flax",
    "Pete Miller",
    "Clark Green",
    "Gabe Lewis"
];
const communityCards = [
    'Jeff Winger',
    'Abed Nadir',
    'Britta Perry',
    'Pierce Hawthorn',
    'Troy Barnes',
    'Annie Edison',
    'Shirley Bennett',
    'Ben Chang',
    'Dean Pelton',
    'Ian Duncan',
    'Elroy Patashnik',
    'Magnitude',
    'V. Dean Laybourne',
    'Buddy',
    'Star-Burns',
    'Vaughn Miller',
    'Fat Neil',
    'Garrett Lambert',
    'Todd Jacobson',
    'Buzz Hickey',
    'Frankie Dart',
    'Michelle Slater',
    'Eustice Whitman',
    'Rachel'
];


window.onload = updateCards(theOfficeCards);

function updateCards(cardArray) {
    for (const [idx, card] of cardArray.entries()) {
        currPhoto = document.getElementById('photo-' + idx);
        currName = document.getElementById('name-' + idx);
        currPhoto.src = 'Character Photos/' + card + '.jpg';
        currName.textContent = card;
    };
    cards = cardArray;
};

function updateCommunityCards(cardArray) {
    for (const [idx, card] of cardArray.entries()) {
        currPhoto = document.getElementById('photo-' + idx);
        currName = document.getElementById('name-' + idx);
        currPhoto.src = 'Character Photos/' + card + '.jpg';
        currName.textContent = card;
    };
    return cards = cardArray;
};

function giveRandomCard() {
    randomCard = cards[Math.floor(Math.random()*cards.length)];
    document.myPhoto.src=("Character Photos/"+randomCard+".jpg");
    document.getElementById("myName").innerHTML = randomCard;
};
window.onload = giveRandomCard();

for (c = 0; c < redCards.length; c++) {
    redCards[c].addEventListener('click', function() {
        this.classList.toggle('redCard');
        this.classList.toggle('greyed-out');
    })
};
for (c = 0; c < blueCards.length; c++) {
    blueCards[c].addEventListener('click', function() {
        this.classList.toggle('blueCard');
        this.classList.toggle('greyed-out');
    })
};
myCard.addEventListener('click', giveRandomCard);
communityBtn.addEventListener('click', () => updateCommunityCards(communityCards));