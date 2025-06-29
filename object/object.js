const person = {
    name: 'Адександр',
    age: 24,
    adress: {
        city: 'Краснодар',
        street: 'Маяковская',
        house: 3,
        apartament: 34
    },
    hobbies: ['видеоигры', 'баскетбол', 'путешествие'],
    greet: function() {
        console.log('Привет');
    } 
};

console.log(Object.keys(person)); 

for (const key in person) {
    console.log(key);
};

person.isMarried = false;
person.age = 25;
delete person.greet;

console.log(Object.keys(person)); 

for (const key in person) {
    console.log(key);
};


