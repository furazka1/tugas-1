const nilai = [80, 95, 70, 100, 88, 65];

let NilaiTinggi = 0;
let NilaiRendah = nilai[0];

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] > NilaiTinggi) {
        NilaiTinggi = nilai[i];
    }
    if (nilai[i] < NilaiRendah) {
        NilaiRendah = nilai[i];
    }
}

console.log(`Nilai tertinggi: ${NilaiTinggi}`);
console.log(`Nilai terendah: ${NilaiRendah}`);
