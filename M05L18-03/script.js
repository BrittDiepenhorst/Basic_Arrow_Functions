// A Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. Gebruik de .push method.

const addTheWordCool = function (array) {
    array.push(["cool"]);
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]
// !! resultaat niet gelukt: undefined


// B Schrijf een JavaScript functie die het aantal elementen in een array retourneert.
const amountOfElementsInArray = (array) => array.length

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// resultaat: 3


// C Schrijf een JavaScript functie om het éérste element uit een array te retourneren. PS: Bij welk cijfer begint een array ook alweer met tellen?
const selectBelgiumFromBenelux = (array) => array[0]

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"


// D Schrijf een JavaScript functie om het laatste element uit een array te retourneren.
const lastElementInArray = (array) => array[3]

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"


// E Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
    array.slice(1, 3)
};
const impeachTrumpSplice = function (array) {
    array.splice()
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// .slice no mutation and .splice is mutation 
// !! resultaat niet gelukt: undefined


// F Write a simple JavaScript program to join all elements of the following array into a string (with spaces). ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken.
const stringsTogether = function (array) {
    array.join(' ')
};

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"



// G Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

combineArrays = function () {
    array1.concat(array2);
}

console.log(combineArrays);

// resultaat: [1,2,3,4,5,6]