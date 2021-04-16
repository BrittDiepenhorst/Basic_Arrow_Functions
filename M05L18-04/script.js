// A Schrijf een JavaScript functie die een bepaald item weet te vinden en terug geeft op basis van een bepaalde value.
// Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = function (superheroes) {
    return superheroes.find(function (superhero) {
        return superhero.name === "Spiderman";
    });
}

console.log(findSpiderMan(superheroes))
// Find Spiderman
// result: {name: "Spiderman", alter_ego: "Peter Parker"}

// B In een array met integers. Zorg dat je een array returned met de integers verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.
const array1 = [1, 2, 3];
const doubleArrayValues = function (array) {
    return array.map(x => x * 2);
}
console.log((doubleArrayValues(array1)));
// result [2, 4, 6]

// C In een array met integers. Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.
const arrayFirst = [1, 4, 3, 6, 9, 7, 11];
const arraySecond = [1, 2, 1, 2, 1, 2]

const containsNumberBiggerThan10 = function (arrays) {
    return arrays.some(function (array) {
        return array > 10;
    });
}

console.log(containsNumberBiggerThan10(arrayFirst));
console.log(containsNumberBiggerThan10(arraySecond));

// array 1 result true
// array 2 result false

// D In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.
const theGreat7 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
const isItalyInTheGreat7 = theGreat7.includes('Italy');
console.log(isItalyInTheGreat7);

// result true

// E In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruik .forEach.
const items1 = [1, 4, 3, 6, 9, 7, 11]

const tenfold = items1.forEach((item1) => {
    return item1 * 10
});

console.log(tenfold)
// result should be [10, 40, 30, 60, 90, 70, 110]
// niet gelukt; undefined

//F In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.
const items = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]

const isBelow100 = items.every((item) => {
    return item <= 100
});

console.log(isBelow100)
// result should be: false

// G Bonus! Deze laatste is wat extra uitdagend. We hopen dat jullie deze challenge accepteren. Gebruik Google en wees een beetje baldadig (gebruik wellicht een klein stukje code die je kopieert).
// In een array met integers. Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneert. Gebruik de .reduce method. En echt, gebruik Google.
const arrayTotal = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

const bigSum = arrayTotal.reduce((currentTotal, arrayTotal) => {
    return arrayTotal + currentTotal
}, 0);

console.log(bigSum);
// result 1118
