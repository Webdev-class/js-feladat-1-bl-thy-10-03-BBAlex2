const students = require('../students.json');
/* Írj függvényt ami megvizsgálja, hogy van-e eltérés a freeDormitory
 boolean és dormitoryPrice number-ek között 
 (Ha jól van feltöltve a lista a false értékek száma és a null-ok száma megegyezik.
  Ha nem akkor írja ki az eltérést) */
const f3 = () => {
  const correct = [];
  students.forEach((student) => {
      if ((student.freeDormitory === true && student.dormitoryPrice !== null) ||
          (student.freeDormitory !== true && student.dormitoryPrice === null)      
    ) {
      console.log(`hibás adatok: ${student.lastName} ${student.firstName}`);
    } else {
      correct.push(student);
    }
  });
  return correct.length;
}
module.exports = f3;