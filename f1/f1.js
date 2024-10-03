const students = require('../students.json');

//Írj függvényt annak kiszűrésére, hogy a tanulók melyik emeleten laknak.
function f1(floor) {
   let onFloor = [];
   students.forEach((student) => {
      if (student.dormitoryFloor === floor){
         onFloor.push(student);
      };
   });
   return onFloor;
}
module.exports = f1;