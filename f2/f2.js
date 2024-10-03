const students = require('../students.json');
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon) 
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {
    const clubIndx = {};
    students.forEach((student) => {
        let thisClub = student.club
        if (clubIndx[thisClub]){
            clubIndx[thisClub]++;
        } else {
            clubIndx[thisClub] = 1;
        }
    });
    return clubIndx;
}

module.exports = f2;