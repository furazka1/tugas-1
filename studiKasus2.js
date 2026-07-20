const nilai = [90, 75, 60 , 45, 88];

let lulus = 0;
let remedial = 0;

let total = 0;
for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
    if (nilai[i] >= 75) {
        console.log(`siswa ke-${i + 1} = ${nilai[i]} - Lulus`)
        lulus++;
    } else {
        console.log(`siswa ke-${i + 1} = ${nilai[i]} - Remedial`)
        remedial++;
    }
}

console.log(`lulus = ${lulus}`);
console.log(`remedial = ${remedial}`);