// const books = [
//   {
//     author: "alisher Navoiy",
//     title: "qadimiy",
//     year: 2010,
//     genere: "tarix",
//   },
//   {
//     author: "alisher Navoiy",
//     title: "qadimiy",
//     year: 2009,
//     genere: "tarix",
//   },
//   {
//     author: "alisher Navoiy",
//     title: "qadimiy",
//     year: 2018,
//     genere: "tarix",
//   },
//   {
//     author: "alisher Navoiy",
//     title: "qadimiy",
//     year: 2008,
//     genere: "tarix",
//   },
// ];
// const newBooks = [];

// function allBooks() {
//   for (let i = 0; i < books.length; i++) {
//     if (books[i].year > 2010) {
//       newBooks.push(books[i]);
//     }
//   }
// }
// allBooks();
// console.log(newBooks);

// // 2 masala

const books = [
  {
    title: "Rich Dad and Poor Dad",
    author: "Robert Kiosaki",
    year: 1997,
    genre: "Non fikshin",
  },
  {
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    year: 2015,
    genre: "Advanture vis bear",
  },
  {
    title: "Mom, I Want to Hear Your Story:",
    author: "Jeffrey Mason ",
    year: 2019,
    genre: "About moms",
  },
  {
    title: "A Court of Mist and Fury",
    author: "Sarah J. Maas ",
    year: 2020,
    genre: "New york times bestselling",
  },
];
const newBooks = [];

function allBooks() {
  for (let i = 0; i < books.length; i++) {
    if (books[i].year > 2010) {
      newBooks.push(books[i]);
    }
  }
}
allBooks();
console.log(newBooks);
