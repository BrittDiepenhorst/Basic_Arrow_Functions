const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

// #1 Maak een array van alle superhelden namen
const superheroesNames = superheroes.map((superheroe) => {
    return superheroe.name
});

console.log(superheroesNames)

// #2 Maak een array van alle "lichte" superhelden (< 190 pounds)
const superheroesLight = superheroes.filter((superheroe) => {
    return superheroe.weight < 190
});

console.log(superheroesLight);

// #3 Maak een array met de namen van de superhelden die 200 pounds wegen 
const superheroes200 = superheroes.filter((superheroe) => {
    return superheroe.weight == 200
}).map((superheroe) => {
    return superheroe.name
});

console.log(superheroes200);

// #4 Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const firstAppearance = superheroes.map((superheroe) => {
    return superheroe.first_appearance
});

console.log(firstAppearance);

// #5 Maak een array met alle superhelden van DC Comics. Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
const DCComics = superheroes.filter((superheroe) => {
    return superheroe.publisher === "DC Comics"
})

console.log(DCComics);

const MarvelComics = superheroes.filter((superheroe) => {
    return superheroe.publisher === "Marvel Comics"
})

console.log(MarvelComics);

// #6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue! Het gewicht dat je hier ziet, van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?
// De superhero weights zijn in de data opgenomen als strings, e.g.: '40'
// Deze moet je eve nparsen naar een integer, zodat je er mee kunt rekenen.

const addedWeightDC = DCComics.map(superheroe => {
    return superheroe.weight !== "unknown" ? parseInt(superheroe.weight, 10) : 0;
}).reduce((weight1, weight2) => weight1 + weight2);

console.log("TotalWeight of DC Comics - supersmall version:", addedWeightDC);

// #7 Doe hetzelfde met alle superhelden van Marvel Comics
const addedWeightMarvel = MarvelComics.map(superheroe => {
    return superheroe.weight !== "unknown" ? parseInt(superheroe.weight, 10) : 0;
}).reduce((weight1, weight2) => weight1 + weight2);

console.log("TotalWeight of Marvel:", addedWeightMarvel);

// #8 Bonus: zoek de zwaarste superheld!
// First cast all values to a number or 0 if unknown
const allSuperheroes = superheroes.map(superheroe => {
    const weight = superheroe.weight !== "unknown" ? parseInt(superheroe.weight) : 0;
    superheroe.weight = weight;
    return superheroe;
});
// next, use reduce to find the largest value
const heaviestSuperheroe = allSuperheroes.reduce(
    (currentHeaviestSuperheroe, currentSuperheroe) => {
        if (currentSuperheroe > currentHeaviestSuperheroe.weight) {
            return currentSuperheroe;
        } else {
            return currentHeaviestSuperheroe;
        }
    },
    allSuperheroes[0]
);
// met deze laatste waarde geef je aan wat de initiele waarde moet zijn van de functie

console.log("Heaviest Superheroe:", heaviestSuperheroe);