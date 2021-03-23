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
    ];


// vraag 1: array van de namen van de superhelden
const heroesNames = superheroes.map(i => i.name);
console.log(heroesNames);

// vraag 2: array van de lichtere superhelden
const lightHeroes = superheroes.filter(i => i.weight < 190);
console.log(lightHeroes);

// vraag 3: de namen van de superhelden die een gewicht van 200 hebben
const weight200Pounds = superheroes.filter(i => i.weight == 200);
const nameHeroOf200Pounds = weight200Pounds.map(i => i.name);
console.log(nameHeroOf200Pounds);

// vraag 4: array met de first-appearances
const firstAppearance = superheroes.map(i => i.first_appearance);
console.log(firstAppearance);

// vraag 5: superhelden van DC Comics
const heroesOfDCComics = superheroes.filter(i => i.publisher === 'DC Comics');
const namesOfHeroesOfDCComics = heroesOfDCComics.map(i => i.name);
console.log("superhelden bij DC Comics: " ,namesOfHeroesOfDCComics);
const heroesOfMarvel = superheroes.filter(i => i.publisher === 'Marvel Comics');
const namesOfHeroesOfMarvel = heroesOfMarvel.map(i => i.name);
console.log("superhelden bij Marvel Comics: ", namesOfHeroesOfMarvel);

// vraag 6: het totaalgewicht van de superhelden van DC Comics
const weightOfHeroesOfDCComics = heroesOfDCComics.map(i => parseInt(i.weight, 10));
const totalWeightOfHeroesOfDCComics = weightOfHeroesOfDCComics.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("totaal gewicht van de superhelden van DC Comics: ",totalWeightOfHeroesOfDCComics);

// vraag 7: het totaalgewicht van de superhelden van Marvel Comics
const weightOfHeroesOfMarvel = heroesOfMarvel.map(i => {
    const weight = i.weight !== "unknown" ? parseInt(i.weight) : 0;
    return weight;
});
const totalWeightOfHeroesOfMarvel = weightOfHeroesOfMarvel.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("totaal gewicht van de superhelden van Marvel Comics: ",totalWeightOfHeroesOfMarvel);

//  vraag 8: wat is de zwaarste superheld
const weightOfSuperheroes = superheroes.map(i => {
    const weight = i.weight !== "unknown" ? parseInt(i.weight, 10) : 0;
    return weight;
});
const heaviestSuperhero = weightOfSuperheroes.reduce((currentHeaviestSuperhero, superhero) => {
    if (superhero.weight > currentHeaviestSuperhero.weight) {
        return superhero;                
    } else {
        return currentHeaviestSuperhero;
    }
}, weightOfSuperheroes[0]);
console.log("zwaarste superheld weegt: " + heaviestSuperhero + " pounds");

// 8 Bonus: vind de zwaarste superheld!
// First cast all values to a number or 0 if unknown
const allHeroes = superheroes.map(hero => {
    const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
    hero.weight = weight;
    return hero;
  });
  // next, use reduce to find the largest value
  const heaviestHero = allHeroes.reduce(
    (currentHeaviestHero, currentHero) => {
      if (currentHero.weight > currentHeaviestHero.weight) {
        return currentHero;
      } else {
        return currentHeaviestHero;
      }
    },
    allHeroes[0]
    // met deze laatste waarde geef je aan wat de initiele waarde moet zijn van de functie
  );
  
  console.log("Heaviest her0000o:", heaviestHero);





