class Książka {
  constructor(tytuł, autor, rok_wydania) {
    this.tytuł = tytuł;
    this.autor = autor;
    this.rok_wydania = rok_wydania;
  }
}

function printBook(book) {
  console.log(
    book.tytuł.concat(" - ", book.autor).concat(", ", book.rok_wydania)
  );
}

const book = new Książka(
  "The Thorn Birds",
  "Colleen Margaretta McCullough",
  "1977"
);

printBook(book);
