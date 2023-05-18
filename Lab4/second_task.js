const student = {
  name: "Katya",
  surname: "Adamovich",
  student_number: 6548,
  math: 3,
  history: 5,
  english: 5,
};

console.log(
  "Average points: " +
    Math.round((student.math + student.history + student.english) / 3)
);
