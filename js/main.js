const students = [
  {
    name: "bobur",
    age: 67,
    grades1: [13, 90, 25],
  },
  {
    nmae: "ali",
    age: 85,
    grades2: [23, 45, 56],
  },
  {
    nmae: "izzat",
    age: 45,
    grades3: [43, 50, 5],
  },
];
students.push({
  nmae: "asal",
  age: 50,
  grades4: [5, 8],
});

students[2].grades3 = [12, 44, 45];

console.log(students);

const firstGrades = students[0].grades1[0];
const secondGrades = students[0].grades1[1];
const thirdGrades = students[0].grades1[2];

const gradesValues = Number(firstGrades + secondGrades + thirdGrades);
const gradesLastValues = gradesValues / 3;
console.log("boburning ortacha bahosi", gradesLastValues);

const firstGrades2 = students[1].grades2[0];
const secondGrades2 = students[1].grades2[1];
const thirdGrades2 = students[1].grades2[2];

const gradesValues2 = Number(firstGrades2 + secondGrades2 + thirdGrades2);
const gradesLastValues2 = gradesValues2 / 3;
console.log("alining ortacha bahosi", gradesLastValues2);

const firstGrades3 = students[2].grades3[0];
const secondGrades3 = students[2].grades3[1];
const thirdGrades3 = students[2].grades3[2];

const gradesValues3 = Number(firstGrades3 + secondGrades3 + thirdGrades3);
const gradesLastValues3 = Math.floor(gradesValues3 / 3);
console.log("izzatning ortacha bahosi", gradesLastValues3);
