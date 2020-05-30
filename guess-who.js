const redCards = document.getElementsByClassName('redCard');
const blueCards = document.getElementsByClassName('blueCard');
const myCard = document.querySelector('.myCard');
for (c = 0; c < redCards.length; c++) {
    redCards[c].addEventListener('click', function() {
        this.classList.toggle('redCard');
        this.classList.toggle('greyed-out');
    })
}
for (c = 0; c < blueCards.length; c++) {
    blueCards[c].addEventListener('click', function() {
        this.classList.toggle('blueCard');
        this.classList.toggle('greyed-out');
    })
}
const cards = [
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
let randomCard = cards[0];
function giveRandomCard() {
    randomCard = cards[Math.floor(Math.random()*cards.length)];
    document.myPhoto.src=("Character Photos/"+randomCard+".jpg");
    document.getElementById("myName").innerHTML = randomCard;
};
window.onload= giveRandomCard();
myCard.addEventListener('click', function() {
    giveRandomCard();
});