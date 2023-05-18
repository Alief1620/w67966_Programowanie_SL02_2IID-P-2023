let liczby = [4, , 8, 10, 12, 15, 18, 21, 25, 28, 31, 34];

// Zsumowanie wartości
let suma = liczby.reduce(function (a, b) {
  return a + b;
});
console.log("Suma wartości: " + suma);

// Znalezienie liczb parzystych
let parzyste = liczby.filter(function (num) {
  return num % 2 === 0;
});
console.log("Liczby parzyste: " + parzyste);

// Pomnożenie wartości razy 3
let pomnozone = liczby.map(function (num) {
  return num * 3;
});
console.log("Wartości pomnożone razy 3: " + pomnozone);

// Dodanie do tablicy numeru albumu i znalezienie jego indeksu
let numerAlbumu = "67966";
liczby.push(numerAlbumu);
let indexAlbumu = liczby.indexOf(numerAlbumu);
console.log("Index numeru albumu: " + indexAlbumu);

// Obliczenie średniej arytmetycznej
let srednia = suma / liczby.length;
console.log("Średnia arytmetyczna: " + srednia);

// Znalezienie największej liczby
let max = Math.max(...liczby);
console.log("Największa liczba: " + max);

// Zliczenie ilości wystąpień wybranej wartości
let liczbaWystapien = liczby.filter(function (num) {
  return num === 5;
}).length;
console.log("Liczba wystąpień liczby 5: " + liczbaWystapien);
