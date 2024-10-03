const students = require('../students.json');
/* Írj függvényt ami megvizsgálja, hogy van-e eltérés a freeDormitory
 boolean és dormitoryPrice number-ek között 
 (Ha jól van feltöltve a lista a false értékek száma és a null-ok száma megegyezik.
  Ha nem akkor írja ki az eltérést) */
const f3 = () => {
  const incorrect = [];
  students.forEach((student) => {
      if ((student.freeDormitory === true && student.dormitoryPrice !== null) ||
          (student.freeDormitory !== true && student.dormitoryPrice === null)      
    ) {
      incorrect.push(student);
      console.log(`hibás adatok: ${student.lastName} ${student.firstName}`);
    }
  });
  return incorrect.length;
}
module.exports = f3;