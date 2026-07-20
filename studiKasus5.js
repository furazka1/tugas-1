const hadir = [true, false, true, true, false, true];

let Hadir= 0;
let tidakHadir = 0; 

for (let i = 0; i < hadir.length; i++) {
    if (hadir[i] === true) {
        Hadir++;
        console.log(`siswa ke-${i + 1} hadir`);
    } else {
        tidakHadir++;
        console.log(`siswa ke-${i + 1} tidak hadir`);
    }
}

console.log(`Hadir = ${Hadir}`);
console.log(`tidak hadir = ${tidakHadir}`);