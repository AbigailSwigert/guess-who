const allCards = document.getElementsByClassName('card');
const myCard = document.querySelector('.myCard');
let cards = [];
let randomCard = cards[0];
const communityBtn = document.getElementById('community-btn');
const theOfficeBtn = document.getElementById('the-office-btn');
const brooklyn99Btn = document.getElementById('brooklyn-99-btn');
const parksAndRecBtn = document.getElementById('parks-and-rec-btn');
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
const brooklyn99Cards = [
    'Jake Peralta',
    'Rosa Diaz',
    'Terry Jeffords',
    'Amy Santiago',
    'Charles Boyle',
    'Raymond Holt',
    'Hitchcock',
    'Scully',
    'Gina Linetti',
    'Kevin Cozner',
    'Madeline Wuntch',
    'Adrian Pimento',
    'The Vulture',
    'Doug Judy',
    'Teddy Wells',
    'Jason Stentley',
    'Bill',
    'Mlepclaynos',
    'Debbie Fogle',
    'Caleb John Gosche',
    'Karen Peralta',
    'Nikolaj Boyle',
    'Rodger Peralta',
    'Cheddar'
];
const parksAndRecCards = [
    'Leslie Knope',
    'Ron Swanson',
    'April Ludgate',
    'Andy Dwyer',
    'Tom Haverford',
    'Jerry Gergich',
    'Donna Meagle',
    'Ann Perkins',
    'Ben Wyatt',
    'Chris Traeger',
    'Perd Hapley',
    'Jean-Ralphio',
    'Jeremy Jamm',
    'Bill Dexhart',
    'Lucy',
    'Ethel Beavers',
    'Tammy Two',
    'Diane Lewis',
    'Marlene Knope',
    'Mona-Lisa',
    'Orin',
    'Bobby Newport',
    'The Douche',
    'Joan Callamezzo',
];


window.onload = updateCards(theOfficeCards);

function updateCards(cardArray) {
    for (const [idx, card] of cardArray.entries()) {
        currPhoto = document.getElementById('photo-' + idx);
        currName = document.getElementById('name-' + idx);
        currPhoto.src = 'Character Photos/' + card + '.jpg';
        currName.textContent = card;
        document.getElementById('card-' + idx).classList.remove('greyed-out');
    };
    cards = cardArray;
    giveRandomCard();
};

function giveRandomCard() {
    randomCard = cards[Math.floor(Math.random()*cards.length)];
    document.myPhoto.src=("Character Photos/"+randomCard+".jpg");
    document.getElementById("myName").innerHTML = randomCard;
};
window.onload = giveRandomCard();


for (c = 0; c < allCards.length; c++) {
    allCards[c].addEventListener('click', function() {
        this.classList.toggle('greyed-out');
    })
};
myCard.addEventListener('click', giveRandomCard);
communityBtn.addEventListener('click', () => updateCards(communityCards));
theOfficeBtn.addEventListener('click', () => updateCards(theOfficeCards));
brooklyn99Btn.addEventListener('click', () => updateCards(brooklyn99Cards));
parksAndRecBtn.addEventListener('click', () => updateCards(parksAndRecCards));