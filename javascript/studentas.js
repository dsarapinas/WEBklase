let vardas = 'Deividas';
let pavarde = 'Sarapinas';
let kursas = 4;
let mokosi = 'KTU';
let pazymiuMasyvas = [10, 9, 8];

console.log(vardas + " " + pavarde + ' mokosi ' + mokosi + ', ' + kursas + ' kurse, jo pazymiai: ' + pazymiuMasyvas);

console.log('Vardas yra ' + typeof vardas);
console.log('Pavarde yra ' + typeof pavarde);
console.log('Kursas yra ' + typeof kursas);
console.log('mokosi yra ' + typeof mokosi);
console.log('pazymiuMasyvas yra ' + typeof pazymiuMasyvas);

let studentas = {
    "vardas": 'Deividas',
    "pavarde": 'Sarapinas',
    "kursas": 4,
    "mokosi": 'KTU',
    "pazymiuMasyvas": [10, 9, 8]
}
console.log(studentas['vardas']);